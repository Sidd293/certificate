import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import jwt from 'jsonwebtoken'
import {
  users as User,
  carts as Cart,
  courses as Course,
} from '@/models/index'

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

  try {
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    const courses = await Cart.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      where: {
        userId: userId
      },
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'name', 'profilePhoto']
      },{
          model: Course,
          as:'course',
          attributes:['id','title','price','profilePhoto']
      }]
    })

    res.send({ courses })
  } catch (error) {
    console.log(error)
  }
}
