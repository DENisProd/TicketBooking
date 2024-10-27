import axios from "axios";
import { create } from "zustand";

enum WagonTypes {
    PLATZCART = "PLATZCART",
    COUPE = "COUPE",
    LOCAL = "LOCAL",
}

interface Wagon {
    wagon_id: number;
    type: WagonTypes;
}

interface Route {
    name: string;
    num: number;
    arrival: string;
    departure: string;
}

export interface Train {
    train_id: number;
    global_route: string;
    startpoint_departure: string;
    endpoint_arrival: string;
    available_seats_count: number;
    wagons_info: Wagon[];
    detailed_route: Route[];
}

const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

interface TicketStore {
    from: string;
    to: string;
    date: Date;
    trains: Train[];

    isLoading: boolean;
    error: string | null;

    fetchTrains: (fromCity: string, toCity: string, date: Date) => void;
}

const useTicketStore = create<TicketStore>((set, get) => ({
    from: "",
    to: "",
    date: new Date(),
    trains: [],

    isLoading: false,
    error: null,

    fetchTrains: (fromCity: string, toCity: string, date: Date) => {
        set({ isLoading: true, error: null });

        try {
            axios
                .get<{ trains: Train[] }>(`${SERVER_URL}tickets/trains`, {
                    params: { from: fromCity, to: toCity, date: date.getDate() },
                })
                .then((data) => {
                    console.log(data.data?.data)
                    set({
                        from: fromCity,
                        to: toCity,
                        date: date,
                        trains: (data?.data?.data as unknown as Train[]) || [],
                        isLoading: false,
                        error: null,
                    });
                });
        } catch (error) {
            console.error("Не удалось загрузить список поездов", error);
            set({ isLoading: false, error: "Ошибка при загрузке списка поездов" });
        }
    },
}));

export default useTicketStore;