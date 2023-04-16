import jwt from "jsonwebtoken"
export const sendCookie = (user, res, message, statusCode = 200) => {

    const token = jwt.sign({ _id: user._id },'akdlfjladjf');

    res.status(statusCode)
        .cookie('token',token, {
            httpOnly: true, expires: new Date(Date.now() + 7*24*60 * 60 * 1000),
            sameSite:"none",
            secure:true,
        })
        .json({
            success: true,
            message,
        }
        );
}
