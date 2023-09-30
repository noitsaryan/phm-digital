import { sendMail } from "@/email/email";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const { name, email, message, link, number } = await req.json()

        const res = await sendMail('Instagram Link','New Influencer Registeration',name, email, message, link, number)
        return NextResponse.json({
            success: true,
            message: 'Email Sent'
        })

    } catch (err) {
        console.log(err)
    }
}