import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
});

fastify.get("/", async (request, reply) => {
    return { message: "Hello, Fastify with CORS!" };
});

const trains = [
    {
        train_id: 1,
        global_route: "Ростов-на-Дону->Москва",
        startpoint_departure: "25.10.2024 11:07:00",
        endpoint_arrival: "26.10.2024 13:09:00",
        detailed_route: [
            {
                name: "Ростов-на-Дону",
                num: 1,
                arrival: null,
                departure: "25.10.2024 11:07:00",
            },
            {
                name: "Москва",
                num: 2,
                arrival: "26.10.2024 13:09:00",
                departure: null,
            },
        ],
        wagons_info: [
            {
                wagon_id: 2,
                type: "COUPE",
            },
            {
                wagon_id: 1,
                type: "PLATZCART",
            },
        ],
        available_seats_count: 0,
    },
    {
        train_id: 2,
        global_route: "Краснодар->Ростов-на-Дону->Воронеж->Рязань->Москва",
        startpoint_departure: "25.10.2024 11:07:00",
        endpoint_arrival: "26.10.2024 13:09:00",
        detailed_route: [
            {
                name: "Краснодар",
                num: 1,
                arrival: null,
                departure: "25.10.2024 08:07:00",
            },
            {
                name: "Ростов-на-Дону",
                num: 2,
                arrival: null,
                departure: "25.10.2024 12:07:00",
            },
            {
                name: "Воронеж",
                num: 3,
                arrival: "26.10.2024 16:09:00",
                departure: null,
            },
            {
                name: "Рязань",
                num: 4,
                arrival: "26.10.2024 20:09:00",
                departure: null,
            },
            {
                name: "Москва",
                num: 5,
                arrival: "26.10.2024 23:09:00",
                departure: null,
            },
        ],
        wagons_info: [
            {
                wagon_id: 3,
                type: "PLATZCART",
            },
            {
                wagon_id: 4,
                type: "COUPE",
            },
        ],
        available_seats_count: 20,
    },
];

fastify.get("/info/trains", async (request, reply) => {
    const fromCity = request.query?.start_point || null;
    const toCity = request.query?.end_point || null;
    const stopPoints = request.query?.stop_points || null;
    const bookingAvailable = request.query?.booking_available || null;

    return { trains };
});

const wagons = [
    {
        wagon_id: 1,
        type: "PLATZCART",
        seats: [
            {
                seat_id: 12,
                seatNum: "3",
                block: "1",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 10,
                seatNum: "12",
                block: "2",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 11,
                seatNum: "2",
                block: "1",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 7,
                seatNum: "6",
                block: "1",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 3,
                seatNum: "1",
                block: "1",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 6,
                seatNum: "7",
                block: "2",
                price: 3000,
                bookingStatus: "CLOSED",
            },
            {
                seat_id: 9,
                seatNum: "5",
                block: "1",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 1,
                seatNum: "4",
                block: "1",
                price: 3000,
                bookingStatus: "CLOSED",
            },
            {
                seat_id: 8,
                seatNum: "8",
                block: "2",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 5,
                seatNum: "10",
                block: "2",
                price: 3000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 4,
                seatNum: "9",
                block: "2",
                price: 3000,
                bookingStatus: "FREE",
            },
            {
                seat_id: 2,
                seatNum: "11",
                block: "2",
                price: 3000,
                bookingStatus: "BOOKED",
            },
        ],
    },
    {
        wagon_id: 2,
        type: "COUPE",
        seats: [
            {
                seat_id: 17,
                seatNum: "1",
                block: "1",
                price: 6000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 14,
                seatNum: "4",
                block: "1",
                price: 6000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 18,
                seatNum: "8",
                block: "2",
                price: 6000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 20,
                seatNum: "7",
                block: "2",
                price: 6000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 15,
                seatNum: "5",
                block: "2",
                price: 6000,
                bookingStatus: "CLOSED",
            },
            {
                seat_id: 13,
                seatNum: "2",
                block: "1",
                price: 6000,
                bookingStatus: "BOOKED",
            },
            {
                seat_id: 19,
                seatNum: "3",
                block: "1",
                price: 6000,
                bookingStatus: "FREE",
            },
            {
                seat_id: 16,
                seatNum: "6",
                block: "2",
                price: 6000,
                bookingStatus: "FREE",
            },
        ],
    },
];

fastify.get("/info/wagons", async (request, reply) => {
    const trainId = request.params.trainId;

    return { wagons };
});

const start = async () => {
    try {
        const PORT = 3001;
        const host = '0.0.0.0';
        await fastify.listen({ host: host, port: PORT });
        console.log("Server is running on http://" + host + ":" + PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
