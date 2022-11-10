/** @format */

import cookie from 'cookie'

const handler = (req, res) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', process.env.TOKEN, {
        maxAge: 0,
        sameSite: 'strict',
        path: '/'
      })
    )
    res.status(200).json('Successfull')
  } else {
    res.status(400).json('Wrong Credentials')
  }
}

export default handler
