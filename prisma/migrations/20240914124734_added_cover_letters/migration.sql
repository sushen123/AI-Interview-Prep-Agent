-- CreateTable
CREATE TABLE "coveLetters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "resumeData" JSONB,
    "template" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "coveLetters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coveLetters" ADD CONSTRAINT "coveLetters_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
