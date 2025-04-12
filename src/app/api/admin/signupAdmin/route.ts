import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { phoneNumber, email, password } = body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const response = await prisma.admins.create({
      data: {
        id: nanoid(),
        phoneNumber,
        email,
        password: hashedPassword,
      },
    });
    const token = jwt.sign({ adminId: response.id }, process.env.JWT_SECRET!, {
      expiresIn: "3h",
    });
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create admin",
      },
      { status: 404 }
    );
  }
};
