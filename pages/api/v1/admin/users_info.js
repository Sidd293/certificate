import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from "jsonwebtoken";
import {
//   courses as Course,
  users as User,
//   enroled_courses as Enroled_courses
} from '@/models/index'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET']
  })
)

export default async (req, res) => {
  await cors(req, res)

  if (!('authorization' in req.headers)) {
        res.status(401).json({ message: 'No autorization token' })
    }

    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

    console.log("ID: "+userId);

    try {
        const admin = await User.findOne({
            where: { id: userId }
        });

        console.log("Role: "+admin.role)

        if(admin.role !== "admin") 
            res.status(404).json("Page Not Found");
        
    } catch (err) {
        console.log("err "+err);
    }

  try {
    const users = await User.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    });
    
    res.status(200).send({ users })
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
