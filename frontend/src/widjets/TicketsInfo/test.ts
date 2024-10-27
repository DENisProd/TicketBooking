export interface SeatInfo {
     type: string;
     count: number;
     price: number;
   }
   
   export interface Departure {
     trainNumber: string;
     origin: string;
     destination: string;
     date: string;
     departureDate: string;
     arrivalDate: string;
     seatsAvailable: SeatInfo[];
   }
   
   export const mockDepartures: Departure[] = [
     {
       trainNumber: '100A',
       origin: 'Москва',
       destination: 'Санкт-Петербург',
       date: '2024-11-01',
       departureDate: '2024-11-01',
       arrivalDate: '2024-11-01',
       seatsAvailable: [
         { type: 'Плацкарт', count: 20, price: 1500 },
         { type: 'Купе', count: 10, price: 2500 },
       ],
     },
     {
       trainNumber: '200B',
       origin: 'Москва',
       destination: 'Нижний Новгород',
       date: '2024-11-02',
       departureDate: '2024-11-02',
       arrivalDate: '2024-11-02',
       seatsAvailable: [
         { type: 'Плацкарт', count: 0, price: 1200 },
         { type: 'Купе', count: 5, price: 2200 },
       ],
     },
   ];
   