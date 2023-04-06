import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'admin',
  host: 'svc.sel3.cloudtype.app',
  database: 'postgres',
  password: 'admin',
  port: 30641,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const client = await pool.connect();

  // if (email === 'test@example.com' && password === 'password') {
  //   res.status(200).json({ message: '로그인 성공!' });
  // } else {
  //   res.status(401).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
  // }
  try {
    const result = await client.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    if (result.rowCount === 1) {
      res.status(200).json({ message: '로그인 성공!' });
    } else {
      res.status(401).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  } finally {
    client.release();
  }
}
