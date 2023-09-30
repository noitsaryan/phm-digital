var nodemailer = require("nodemailer");
import {createTransport} from 'nodemailer'

export async function sendMail(desOrLink, title, name, email, message, designation, number) {
    var transporter = createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: ['asrvofficial@gmail.com', 'shivam@youthistaan.com'],
        subject: title,
        html: `
        <body>
        <table style="border-collapse: collapse; width: 100%;">
            <tr>
                <td>
                    <img src="https://youthistaan-media.vercel.app/_next/image?url=%2Flogo.png&w=384&q=75" alt="Company Logo" width="150">
                </td>
                <td></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Name:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Email:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Message:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">${desOrLink}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${designation}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Number:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">+91 ${number}</td>
            </tr>
        </table>
    </body>
            `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw new Error(error);
        } else {
            console.log("Email Sent");
            return true;
        }
    });
}