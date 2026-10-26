import { PrismaClient } from "@prisma/client";

// Reuse a single PrismaClient instance throughout the Express application.
const prisma = new PrismaClient();

export default prisma;
