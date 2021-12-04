import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from 'jsonwebtoken'
import { carts as Cart } from '@/models/index'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
  })
)

export default async (req, res) => {
  await cors(req, res)
  if (!('authorization' in req.headers)) {
    return res.status(401).json({ message: 'No autorization token' })
  }

  const {
    courseId
  } = req.body

  try {
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    await Cart.create({
      courseId,
      userId
    })

    res.send('Successfully added to the cart.')
  } catch (error) {
    console.log(error)
  }
}
