import mailer from "@/utils/mailer";
import initMiddleware from "@/lib/init-middleware";
import Cors from "cors";

const cors = initMiddleware(
  Cors({
    methods: ["POST"]
  })
)

export default async (req, res) => {
  await cors(req, res);

  console.log(req.body)
  const { name, email, number, subject, text } = req.body

  const supportEmail = 'support@brainlox.com'

  const data = {
    email: supportEmail,
    subject: 'Hello',
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Text:</b> ${text} 
        `
  }

  try {
    const response = await mailer(data)
    console.log(response)
    res.status(200).send('Email send successfully')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error proccessing charge')
  }
}
