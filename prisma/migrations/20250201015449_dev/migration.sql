-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
