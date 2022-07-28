import fastify, { FastifyInstance } from 'fastify';
import blipp from 'fastify-blipp';
import { app } from './app';

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
});

server.register(blipp);
server.register(app);

server
	.listen({
		port: parseInt(process.env.PORT || '5000'),
		host: '0.0.0.0',
	})
	.then(() => {
		server.blipp();
	});
