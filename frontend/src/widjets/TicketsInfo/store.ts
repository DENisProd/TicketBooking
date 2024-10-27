import { create } from 'zustand';
import axios from 'axios';

interface SeatInfo {
  type: string;
  count: number;
  price: number;
}

export interface Departure {
  trainNumber: string; //id
  origin: string; //start
  destination: string; //end
}

enum WagonTypes {
  PLATZCART = "PLATZCART",
  COUPE = "COUPE",
  LOCAL = "LOCAL"
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

interface TrainStore {
  departures: Departure[];
  trains: Train[];
  isLoading: boolean;
  error: string | null;

  fetchTrainData: (origin: string, destination: string, date: string) => Promise<void>;
  fetchTrains: (fromCity: string, toCity: string, date: Date) => void;
}

export const useTrainStore = create<TrainStore>((set) => ({
  departures: [],
  trains: [],
  isLoading: false,
  error: null,
  
  fetchTrainData: async (origin, destination, date) => {
    set({ isLoading: true, error: null });
    
    try {
      const { data } = await axios.get<{ departures: Departure[] }>(`/api/trainData`, {
        params: { origin, destination, date },
      });
      
      set({
        departures: data.departures || [],
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error("Не удалось загрузить данные о поездах", error);
      set({ isLoading: false, error: "Ошибка при загрузке данных о поездах" });
    }
  },
  fetchTrains: (fromCity: string, toCity: string, date: Date) => {
    set({ isLoading: true, error: null });
    
    try {
      axios.get<{ trains: Train[] }>(`/api/trains`, {
        params: { fromCity, toCity, date: date.getDate() },
      }).then(data => {
        set({
          trains: data?.trains || [],
          isLoading: false,
          error: null,
        });
      })
    } catch (error) {
      console.error("Не удалось загрузить список поездов", error);
      set({ isLoading: false, error: "Ошибка при загрузке списка поездов" });
    }
  }
}));

