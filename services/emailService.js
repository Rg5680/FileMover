const nodemailer = require("nodemailer");
async function sendMail ({ from, to, subject, text, html}) {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER, // generated ethereal user
                pass: process.env.MAIL_PASS, // generated ethereal password
            }
        });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `FileMover <${from}>`, // sender address
        to,
        subject,
        text,
        html
    });

    // console.log(info);
}

module.exports = sendMail;
