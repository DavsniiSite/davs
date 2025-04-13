/*
  Warnings:

  - You are about to drop the column `subTitleC` on the `Products` table. All the data in the column will be lost.
  - Added the required column `captionJp` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTitleCn` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTitleJp` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "subTitleC",
ADD COLUMN     "captionJp" TEXT NOT NULL,
ADD COLUMN     "subTitleCn" TEXT NOT NULL,
ADD COLUMN     "subTitleJp" TEXT NOT NULL;
