// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { PrismaClient, User } from '@prisma/client';

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user?: User;
            db: PrismaClient;
        }
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
