import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";
import jwt from "jsonwebtoken";
import { users as User } from "@/models/index";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET"],
  })
);

export default async (req, res) => {
  await cors(req, res);

  if (!("authorization" in req.headers)) {
    res.status(401).json({ message: "No autorization token" });
  }

  const { userId } = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );

  console.log("ID: " + userId);

  try {
    const admin = await User.findOne({
      where: { id: userId },
    });

    console.log("Role: " + admin.role);

    if (admin.role !== "admin")
      if (admin.role !== "support") res.status(404).json("Page Not Found");
  } catch (err) {
    console.log("err " + err);
  }

  try {
    // const users = await User.findAll({
    //   order: [
    //     ['brainlox_coin', 'DESC']
    //   ],
    //   include: [{
    //     model: User,
    //     // as: 'user',
    //     attributes: ['name', 'brainlox_coin']
    //   }]
    // })

    const users = await User.findAll({
      order: [["brainlox_coin", "DESC"]],
      attributes: ["id", "name", "email", "role", "brainlox_coin"],
    });

    res.status(200).send({ users });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
