import Cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import initMiddleware from "@/lib/init-middleware";
import { users as User } from "@/models/index";
import mailer from "@/utils/mailer";
import baseUrl from "@/utils/baseUrl";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);

export default async (req, res) => {
  await cors(req, res);
  const { email } = req.body;
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    console.log("we are in re send api");

    const name = user.name;
    const confirmToken = user.emailResetToken;

    const mailingModel = {
      email,
      subject: "ReEmail Verification",
      html: `
            Dear ${name}!
            Thank you for registering at Brainlox, The World's Leading Distance-Learning Provider.
            This is ur Email verification link ${baseUrl}/api/v1/auth/confirm-email?confirmToken=${confirmToken}
        `,
    };

    await mailer(mailingModel);
    res.status(200).send("ReEmail Verification send.");

    // res.status(201).json(token);
  } catch (error) {
    // console.error(error)
    res.status(500).send("Error in sending Email");
  }
};
