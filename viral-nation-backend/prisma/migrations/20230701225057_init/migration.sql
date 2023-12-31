-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");
