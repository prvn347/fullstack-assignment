-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "link" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
