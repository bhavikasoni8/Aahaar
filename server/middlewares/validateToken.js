import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    const token = authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        req.user = decoded
        next()
    })
})

export default validateToken;