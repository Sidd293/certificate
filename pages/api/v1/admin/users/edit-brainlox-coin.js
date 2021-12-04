import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from "jsonwebtoken";
import {
  users as User,
} from '@/models/index'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['POST']
  })
)

export default async (req, res) => {
  await cors(req, res)

  if (!('authorization' in req.headers)) {
        res.status(401).json({ message: 'No autorization token' })
    }

    try {

        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        console.log("ID From Edit: "+userId);

        const admin = await User.findOne({
            where: { id: userId }
        });

        console.log("Role From Edit: "+admin.role)

        if(admin.role !== "admin") 
            res.status(404).json("Page Not Found");
        
    } catch (err) {
        console.log("err From Edit: "+err);
        res.status(404).json("Page Not Found");
    }

    const { userId, brainlox_coin } = req.body;

    console.log("userId From Edit: "+userId);

    console.log("brainlox_coin From Edit: "+brainlox_coin);

    try {
        const user = await User.update(
            {
                brainlox_coin
            },
            {
                where: { id: userId }
            }
        );
        res.status(200).json(`Successfully Added ${brainlox_coin} Coin's`);
    } catch (err) {
        console.log("err From Edit: "+err);
        res.status(404).json("Page Not Found");
    }
}