const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // 현재 클라이언트가 실행 중인 포트로 설정
}));
app.use(express.json());

// 회원가입 엔드포인트
app.post('/auth/register', (req, res) => {
    const { email, password, passwordCheck } = req.body;
    if (!email || !password || !passwordCheck) {
        return res.status(400).json({ message: '모든 필드를 입력해 주세요.' });
    }
    if (password !== passwordCheck) {
        return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }
    res.status(200).json({ message: '회원가입 성공' });
});

// 로그인 엔드포인트
app.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: '이메일과 비밀번호를 입력해 주세요.' });
    }

    res.status(200).json({ message: '로그인 성공' });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});
