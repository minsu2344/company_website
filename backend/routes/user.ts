import { Request, Response, Router } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User'
import { ISchemaUser } from '../types/user';

interface ISignupRequest {
    username: string;
    password: string;
}

const router = Router();

router.post('/signup', async (req: any, res: any) => {
  try {
    const { username, password } = req.body as ISignupRequest;
    const existingUser: ISchemaUser | null = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: '이미 존재하는 사용자입니다.' });
    }

    const hashedPassword: string = await bcrypt.hash(password, 10); // 10진수로 해시 생성

    const user: ISchemaUser = new User({
      username,
      password: hashedPassword,
    })

    await user.save();

    return res.status(201).json({message: '회원가입이 완료되었습니다.'})
  }
  catch(error) {
    return res.status(500).json({ message: '회원가입 중 오류가 발생했습니다.' });
    console.log(error)
  }
})

export default router;