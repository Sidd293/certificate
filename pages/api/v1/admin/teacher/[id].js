import Cors from 'cors'
import initMiddleware from '@/lib/init-middleware'
import {
  courses as Course,
  users as User,
  videos as Video
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
  const { id } = req.query

  // console.log(id)
  try {
    const teacher = await User.findOne({
      where: { id: id }
    })

    // console.log(course)

    res.send({ teacher })
  } catch (error) {
    // console.log(error)
    res.send(error.message)
  }
}
