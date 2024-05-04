-- CreateTable
CREATE TABLE "Absen" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nrp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Absen_pkey" PRIMARY KEY ("id")
);
