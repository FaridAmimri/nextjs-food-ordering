/** @format */

import cookie from 'cookie'
const cors = require('cors').config()

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body
    if (
      email === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/'
        })
      )
      res.status(200).json('Successfull')
    } else {
      res.status(400).json('Wrong Credentials')
    }
  }
}

export default handler
