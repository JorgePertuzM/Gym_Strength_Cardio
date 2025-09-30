import winston from "winston";

const { combine, timestamp, printf, colorize } = winston.format;

// Define el formato de los logs en consola
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}: ${message}]`;

})

const logger = winston.createLogger({
    // Cambia el nivel de log segun el entorno
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',

    // Definir el formato de los logs qie se escribem en archivos
    format: combine(timestamp(), myFormat),
    transports: [
        // mandar logs a la consola con colores para el entorno de desarrollo
        new winston.transports.Console({
            format: combine(colorize(), timestamp(), myFormat)
        }),

        // Mandar solo los logs de nivel 'error' a un archivo
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),

        // mandar logs (segun nivel definido) a otro archivo
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],

    // manejadores para capturar excepciones y promesas no manejadas
    exceptionHandlers: [new winston.transports.File({ filename: 'logs/exceptions.log' })],
    rejectionHandlers: [new winston.transports.File({ filename: 'logs/rejections.log' })]
});

export default logger;