import { appSettings as app } from "@/models/index";
import initMiddleware from "@/lib/init-middleware";
import Cors from "cors";
import jwt from "jsonwebtoken";
import { users as User } from "@/models/index";

const cors = initMiddleware(
    Cors({
        methods: ["GET", "POST"]
    })
);

export default async (req, res) => {
    await cors(req, res);

    switch (req.method) {
        case 'POST':
            await handlePostRequest(req, res)
            break
        case 'GET':
            await handleGetRequest(req, res)
            break
        default:
            res.status(405).send(`Method ${req.method} not allowed`)
    }

}

const handleGetRequest = async (req, res) => {
    let foundData = null;

    try {
        foundData = await app.findOne({
            where: { key: "chatBotState" }
        })
    } catch (e) {
        console.log("Failed Try again"+e);
        res.status(500).json(`Failed...${e}`);
    }

    (await foundData && foundData.value == "ON") ? res.status(200).json(true) : res.status(200).json(false);
}

const handlePostRequest = async (req, res) => {

    if (!('authorization' in req.headers)) {
        res.status(401).json({ message: 'No autorization token' })
    }

    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

    console.log("ID: "+userId);

    const { value } = await req.body;

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

    let foundData = null;

    try {
        foundData = await app.update(
            {
                value
            },
            {
                where: { key: "chatBotState" }
            }
        )
    } catch (e) {
        console.log("Failed Try again"+e);
        res.status(500).json(`Failed...${e}`);
    }

    (await foundData.value == "ON") ? res.status(200).json(true) : res.status(200).json(false);
}
