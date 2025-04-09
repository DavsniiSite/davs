-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "infoImg" TEXT NOT NULL,
    "subTitleMn" TEXT NOT NULL,
    "subTitleKr" TEXT NOT NULL,
    "subTitleC" TEXT NOT NULL,
    "subTitleEn" TEXT NOT NULL,
    "captionEn" TEXT NOT NULL,
    "captionMn" TEXT NOT NULL,
    "captionKr" TEXT NOT NULL,
    "captionCn" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admins" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admins_email_key" ON "Admins"("email");
