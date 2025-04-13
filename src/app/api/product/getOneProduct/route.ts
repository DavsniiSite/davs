import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const body = await req.json();
    const response = await prisma.products.findFirst({
      where: { id: body.id },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};
