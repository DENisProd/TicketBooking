import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

fastify.get('/', async (request, reply) => {
  return { message: 'Hello, Fastify with CORS!' };
});

const trains = [
    {
      "train_id": 1,
      "global_route": "Ростов-на-Дону->Москва",
      "startpoint_departure": "25.10.2024 11:07:00",
      "endpoint_arrival": "26.10.2024 13:09:00",
      "detailed_route": [
        {
          "name": "Ростов-на-Дону",
          "num": 1,
          "arrival": null,
          "departure": "25.10.2024 11:07:00"
        },
        {
          "name": "Москва",
          "num": 2,
          "arrival": "26.10.2024 13:09:00",
          "departure": null
        }
      ],
      "wagons_info": [
        {
          "wagon_id": 2,
          "type": "COUPE"
        },
        {
          "wagon_id": 1,
          "type": "PLATZCART"
        }
      ],
      "available_seats_count": 0
    },
    {
      "train_id": 2,
      "global_route": "Краснодар->Ростов-на-Дону->Воронеж->Рязань->Москва",
      "startpoint_departure": "25.10.2024 11:07:00",
      "endpoint_arrival": "26.10.2024 13:09:00",
      "detailed_route": [
        {
            "name": "Краснодар",
            "num": 1,
            "arrival": null,
            "departure": "25.10.2024 08:07:00"
        },
        {
          "name": "Ростов-на-Дону",
          "num": 2,
          "arrival": null,
          "departure": "25.10.2024 12:07:00"
        },
        {
          "name": "Воронеж",
          "num": 3,
          "arrival": "26.10.2024 16:09:00",
          "departure": null
        },
        {
          "name": "Рязань",
          "num": 4,
          "arrival": "26.10.2024 20:09:00",
          "departure": null
        },
        {
          "name": "Москва",
          "num": 5,
          "arrival": "26.10.2024 23:09:00",
          "departure": null
        }
      ],
      "wagons_info": [
        {
          "wagon_id": 3,
          "type": "PLATZCART"
        },
        {
          "wagon_id": 4,
          "type": "COUPE"
        }
      ],
      "available_seats_count": 20
    }
  ]

fastify.get('/info/trains', async (request, reply) => {
    const fromCity = request.query?.start_point || null;
    const toCity = request.query?.end_point || null;
    const stopPoints = request.query?.stop_points || null;
    const bookingAvailable = request.query?.booking_available || null;


  return { trains };
});

const start = async () => {
  try {
    const PORT = 3001;
    await fastify.listen({ port: PORT });
    console.log('Server is running on http://localhost:' + PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
