import { PrismaClient } from '@prisma/client';

if (!global.db) {
  global.db = new PrismaClient();
}
const prisma = global.db;

export default prisma;
