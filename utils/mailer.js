import nodemailer from "nodemailer";

const ADMIN_EMAIL = "noreply@brainlox.com";
const ADMIN_PASSWORD = "BrainloxNoReply7890!";

const transporter = nodemailer.createTransport({
    host: "giowm1288.siteground.biz",
    port: 465,
    auth: {
        user: ADMIN_EMAIL,
        pass: ADMIN_PASSWORD
    }
});

const mailer = async (mailingModel) => {
    console.log("Sending Mail...");

    const mailingoption = {
        from: ADMIN_EMAIL,
        to: mailingModel.email,
        subject: mailingModel.subject,
        html: mailingModel.html
    };
    
    try {
        await transporter.sendMail(mailingoption, (err, info) => {
            if(err)
                console.log("Error Sending Mail"+err);
            else
                console.log("Mail sent.");
        });
    } catch (err) {
        console.log("Error: "+err);
    }
}

export default mailer;
