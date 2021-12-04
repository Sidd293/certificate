import Cors from 'cors';
import { users as User } from '@/models/index';
import initMiddleware from '@/lib/init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ["GET"]
    })
);

export default async (req, res) => {
    await cors(req, res);
    const { confirmToken } = req.query;

    try {
        const foundUser = await User.findOne({
            where: { emailResetToken: confirmToken }
        });
        
        if(!foundUser) {
            res.status(404).json("Not a Valid Token...")
        };

        const verifiedUser = await User.update(
            {
                emailConfirmed: true,
                emailConfirmedAt: new Date()
            },
            {
                where: { emailResetToken: confirmToken }
            }
        );

        res.status(200).json("Email Verified...");
    } catch (err) {
        res.status(500).json("Error aquired in verfying the token...");
    }

};
