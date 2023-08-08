import { PrismaClient } from '@prisma/client';
import { enhance } from '@zenstackhq/runtime';

const prisma = new PrismaClient();

export function getEnhancedPrisma(userId?: string) {
    return enhance(prisma, { user: userId ? { id: userId } : undefined });
}

export default prisma;
