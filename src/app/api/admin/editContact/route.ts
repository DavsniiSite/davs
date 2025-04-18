import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const { field, value } = body;

    if (!["phoneNumber", "email", "password"].includes(field)) {
      return NextResponse.json(
        { message: "Тохиромжгүй талбар." },
        { status: 400 }
      );
    }

    const updatedContact = await prisma.$transaction(async (tx) => {
      const existingContact = await tx.admins.findFirst();
      if (!existingContact) {
        throw new Error("Холбоо барих мэдээлэл олдсонгүй.");
      }

      return await tx.admins.update({
        where: { id: existingContact.id },
        data: { [field]: value },
      });
    });

    return NextResponse.json(updatedContact, { status: 200 });
  } catch (error: unknown) {
    console.error("Update failed:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Алдаа гарлаа";

    return NextResponse.json(
      { message: errorMessage },
      { status: error instanceof Error ? 400 : 500 }
    );
  }
};
