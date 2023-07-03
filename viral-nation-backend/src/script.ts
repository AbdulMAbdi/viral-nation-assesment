// 1
import { PrismaClient } from '@prisma/client'
 
// 2
const prisma = new PrismaClient()
 
// 3
async function main() {
  const allProfiles = await prisma.profile.findMany()
  console.log(allProfiles)
}
 
// 4
main()
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })