import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}
const { NODE_ENV } = process.env;
export const db = globalThis.prisma || new PrismaClient();

if (NODE_ENV !== "production") globalThis.prisma = db;
