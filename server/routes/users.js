const express = require('express')
const router = express.Router()
const User = require("../model/user")
const jwt = require('jsonwebtoken');
const config = require('../config/')



router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ error: 'Email is not registered' });
        }
        if (!foundUser.hasSamePassword(password)) {
            return res.status(400).json({ error: 'Password is incorrect.' });
        }

        const token = jwt.sign({
            userId: foundUser.id,
            username: foundUser.username
        }, config.SECRET, { expiresIn: '1h' });

        return res.json(token)


    } catch (err) {
        console.error('Log in Error:', err);
        return res.status(500).json({ error: 'Log in failed' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        // 入力チェック
        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        }
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // ユーザーの重複チェック
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // ユーザー登録
        const user = new User({ username, email, password });
        await user.save();

        return res.json({ registered: true });

    } catch (err) {
        console.error('Registration Error:', err);
        return res.status(500).json({ error: 'Registration failed' });
    }
});

module.exports = router