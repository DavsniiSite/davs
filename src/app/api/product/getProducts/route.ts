import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const response = await prisma.products.findMany();
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
};
