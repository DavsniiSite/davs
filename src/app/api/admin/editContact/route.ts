import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const { field, value } = body;

    if (!["phoneNumber", "email", "password"].includes(field)) {
      return NextResponse.json({ message: "Тохиромжгүй талбар." });
    }
    const existingContact = await prisma.admins.findFirst();
    if (!existingContact) {
      return NextResponse.json({ message: "Холбоо барих мэдээлэл олдсонгүй." });
    }
    const updatedContact = await prisma.admins.update({
      where: { id: existingContact.id },
      data: { [field]: value },
    });
    return NextResponse.json(updatedContact, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
};
