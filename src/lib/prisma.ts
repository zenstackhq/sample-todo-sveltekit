import { PrismaClient } from '@prisma/client';
import { withPresets } from '@zenstackhq/runtime';

const prisma = new PrismaClient();

export function getEnhancedPrisma(userId?: string) {
    return withPresets(prisma, { user: userId ? { id: userId } : undefined });
}

export default prisma;
