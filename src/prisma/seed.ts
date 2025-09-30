import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    
    await prisma.usuario.createMany({
        data: [
            {
                email: 'deportista@ejemplo.com',
                password_hash: '$2a$12$XYQ7gFCHTAnM5x0WJhK3YucgUz3E6yE0EQyKP2897AQ2GxJh15hp2',
                rol: 'deportista',
                nombre: 'Juan Pérez',
                status: 'pendiente'
            }
        ],

        skipDuplicates: true
    });

    console.log('Seed: Usuarios Creados');
    
}

main()

    .catch((e) => {
        console.error('Error durantre el seeding:', e);
        process.exit(1);
    })

    .finally(async () => {
        await prisma.$disconnect();
        console.log('COnexion a la base de datos cerrada.');
    });