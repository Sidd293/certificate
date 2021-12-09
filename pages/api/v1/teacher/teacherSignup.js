import Cors from "cors";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import initMiddleware from "@/lib/init-middleware";
import { users as User } from "@/models/index";
import mailer from "@/utils/mailer";
import baseUrl from "../../../../utils/baseUrl";

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
  const confirmToken = uuidv4();
  // Recieved params from request
  const { name, email, password, confirmPassword, role } = req.body;
  try {
    if (!isLength(name, { min: 3 })) {
      return res
        .status(422)
        .send("The name should be a minimum of Three characters long");
    } else if (!isEmail(email)) {
      return res.status(422).send("Email should be a valid email address");
    } else if (!isLength(password, { min: 6 })) {
      return res
        .status(422)
        .send("Password should be minimum of Six characters long");
    } else if (password != confirmPassword) {
      return res.status(422).send("Password doesn't match");
    }

    // Check if user with that email if already exists
    const user = await User.findOne({
      where: { email: email },
    });

    if (user) {
      return res.status(422).send(`User already exist with email ${email}`);
    }

    // Encrypt password with bcrypt
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
      emailResetToken: confirmToken,
      role,
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // confirmEmailAddress(newUser)

    const mailingModel = {
      email,
      subject: "Teacher's Credentials",
      html: `
				Dear ${name}!
				Thank you for registering Brainlox, The World's Leading Distance-Learning Provider.
				You are assigned as a teacher. 
        Here are your credentials.
        Username:- ${email}
        Password:- ${password}
			`,
    };

    await mailer(mailingModel);

    res.status(201).send("Successfully created the teacher.")
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in account signup. Please try again.");
  }
};
