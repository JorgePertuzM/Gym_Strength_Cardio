import { PrismaClient } from "@prisma/client";
import logger from "./logger";

declare global {
    var prisma: PrismaClient | undefined;
}

// Crear una sola instancia del cliente de prisma o reutilizar la existente en desarrollo
const prisma =
    global.prisma ??
    new PrismaClient({
        log:
            process.env.NODE_ENV === 'development'
                ? ['query', 'info', 'warn']
                : ['warn'],
    });

    // Evita crear varias instancias en entornos de desarrollo
    if (process.env.NODE_ENV === 'development') (global as any).prisma = prisma;

    // Prisma events (Redifirigos a wiston)
    (prisma as any).$on('warn', (e: any) => {
        logger.warn(`[Prisma Warning] ${JSON.stringify(e)}`);
    })

    (prisma as any).$on('info', (e: any) => {
        logger.info(`[Prisma info] ${JSON.stringify(e)}`);
    })

    (prisma as any).$on('query', (e: any) => {
        logger.debug(`[Prisma query] ${JSON.stringify(e)}`);
    })

    export default prisma;