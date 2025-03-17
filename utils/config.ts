export const config = {
    jwtSecret: process.env.JWT_SECRET || 'your_fallback_secret_key',
    cookieName: 'token'
};