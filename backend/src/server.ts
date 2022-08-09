import fastify, { FastifyInstance } from 'fastify';
import blipp from 'fastify-blipp';
import { app } from './app';
import { PORT } from './config';

const server: FastifyInstance = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    disableRequestLogging: true,
});

server.register(blipp);
server.register(app);
server
    .listen({
        port: parseInt(PORT || '5000'),
        host: '0.0.0.0',
    })
    .then(() => {
        server.blipp();
    });
