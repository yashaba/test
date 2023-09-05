import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { AuthService } from '../services/auth.service'
import { Service } from 'typedi'

@Service()

export class AuthController {

  constructor(){

  }

  authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(403)
  
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err)
  
      if (err) return res
  
    
      next()
    })
  }
  
   generateAccessToken(userName: string) {
    const secret = process.env.KEY as string
    return jwt.sign(userName, secret);
  }
}



