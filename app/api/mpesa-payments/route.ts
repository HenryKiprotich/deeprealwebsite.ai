import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY as string;
const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET as string;
const MPESA_SHORTCODE = "174379"; // ✅ Sandbox Paybill Number
const MPESA_PASSKEY =
  "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3"; // ✅ Sandbox Passkey
const CALLBACK_URL = process.env.CALLBACK_URL as string;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phoneNumber, amount } = body;

    // 🔹 Validate input
    if (!phoneNumber || !amount || isNaN(amount) || amount <= 1) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number or amount" },
        { status: 400 }
      );
    }

    // 🔹 Generate M-Pesa Access Token
    const authResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        auth: {
          username: MPESA_CONSUMER_KEY,
          password: MPESA_CONSUMER_SECRET,
        },
      }
    );

    const accessToken = authResponse.data.access_token;

    // 🔹 Generate Timestamp
    //const timestamp = new Date()
      //.toISOString()
      //.replace(/[-T:.Z]/g, "")
      //.substring(0, 14);

    // ✅ FOR PRODUCTION: Use this in the future
    // const stkPassword = Buffer.from(
    //   `${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`
    // ).toString("base64");

    // 🔹 STK Push Request (Using Sandbox Test Details)
    const stkResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: MPESA_SHORTCODE, // ✅ Sandbox Paybill Number
        Password: MPESA_PASSKEY, // ✅ Hardcoded Password for Sandbox
        Timestamp: "20160216165627", //timestamp, // ✅ Dynamically generated timestamp
        TransactionType: "CustomerPayBillOnline",
        Amount: Math.round(amount), // ✅ Ensure integer amount
        PartyA: "254708374149", // ✅ Use user-provided phone number
        PartyB: MPESA_SHORTCODE, // ✅ Paybill Number
        PhoneNumber: "254708374149", // ✅ Ensure phone number is the one from user input
        CallBackURL: CALLBACK_URL, // ✅ Use actual callback URL
        AccountReference: "Test", // ✅ Sandbox Account Reference
        TransactionDesc: "Test", // ✅ Sandbox Transaction Description
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: "STK Push sent",
      response: stkResponse.data,
    });
  } catch (error) {
    let errorMessage = "Payment request failed";
    let errorDetails: string | object =
      error instanceof Error ? error.message : "Unknown error";

    if (axios.isAxiosError(error) && error.response) {
      errorMessage =
        error.response.data?.errorMessage || "Payment request failed";
      errorDetails = error.response.data || error.message;
    }

    console.error("M-Pesa Error:", errorDetails);

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        errorDetails,
      },
      { status: 500 }
    );
  }
}
