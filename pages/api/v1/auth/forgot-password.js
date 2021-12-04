import { users as User } from "@/models/index";
import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";
import { v4 as uuidv4 } from "uuid";
import mailer from "@/utils/mailer";
import bcrypt from "bcrypt";

const cors = initMiddleware(
    Cors({
        methods: ["POST"]
    })
);

export default async (req, res) => {
    await cors(req, res);

    const { name, email, lastRememberPassword } = req.body;
    const passwordUuid = await String(uuidv4()).slice(-10);

	const password = await bcrypt.hash(passwordUuid, 10);

    try {
        const available = await User.findOne({
            where: {email},
        });
    } catch (err) {
        res.status(404).json("User N0t Found...");
    }

	const user = await User.update(
		{
			password,
		},
		{
			where: {email}
		}
	);

    const foundUser = await User.findOne({
        where: {email},
    });

	const mailingModel = {
		email,
		subject: "Forgot Password?",
		html: `
		Hi dear ${foundUser.name}!
			We received a request to generate temprorary Password.
			Your temp password: ${passwordUuid}.
		`
	};

	try {
		await mailer(mailingModel);
		res.status(200).json("Reset token sent");
	} catch (err) {
		console.log("Err2: "+err);
		res.status(404).json("User Not found...");
	}

};
