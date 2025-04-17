import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { phoneNumber, password } = body;
    const admin = await prisma.admins.findFirst({
      where: { phoneNumber },
    });
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" });
    }
    const passwordValid = bcrypt.compareSync(password, admin.password);
    if (!passwordValid) {
      return NextResponse.json({
        error: "Incorrect phoneNumber and password combination",
      });
    }
    const token = jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET!, {
      expiresIn: "3h",
    });
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Login error" }, { status: 404 });
  }
};
