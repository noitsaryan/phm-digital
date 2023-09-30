import { sendMail } from "@/email/email";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const { name, email, message, designation, number } = await req.json()

        const res = await sendMail('Designation','New Brand Registeration', name, email, message, designation, number)
        return NextResponse.json({
            success: true,
            message: 'Email Sent'
        })

    } catch (err) {
        console.log(err)
    }
}