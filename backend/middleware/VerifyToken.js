import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    // Get token from Authorization header
    const authHeader = req.headers['authorization'];
    
    // If the token is missing or not properly formatted (e.g., "Bearer <token>")
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Token is required or improperly formatted" });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.split(' ')[1];

    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });
        
        // Attach user info to request for further use
        req.user = user;
        next(); // Proceed to next middleware or route handler
    });
};
