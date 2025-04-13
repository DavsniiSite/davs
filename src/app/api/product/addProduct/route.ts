import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const {
      infoImg,
      subTitleMn,
      subTitleJp,
      subTitleKr,
      subTitleEn,
      subTitleCn,
      captionEn,
      captionJp,
      captionMn,
      captionKr,
      captionCn,
      price,
    } = body;
    const response = await prisma.products.create({
      data: {
        id: nanoid(),
        infoImg,
        subTitleCn,
        subTitleEn,
        subTitleJp,
        subTitleKr,
        subTitleMn,
        captionCn,
        captionEn,
        captionJp,
        captionKr,
        captionMn,
        price,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};
