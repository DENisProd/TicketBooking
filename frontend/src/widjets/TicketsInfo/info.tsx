import React from 'react';
import TripCard from './ticket';
import { Train } from '../../app/store/ticket.store';
import Title from 'antd/es/typography/Title';

interface TicketInfoProps {
  trains: Train[];
  onPurchase?: (trainNumber: string) => void;
  onWaitlist?: (trainNumber: string) => void;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ trains, onPurchase, onWaitlist }) => {
  return (
    <div style={{
      position: 'relative',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}>
      <Title level={3}>Доступные поезда:</Title>

      {trains.length > 0 && (
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '800px',
          marginTop: 'auto',
        }}>
          {trains.map((train) => (
            <TripCard
              key={train.train_id}
              train={train}
              // onPurchase={() => onPurchase && onPurchase(departure.trainNumber)}
              // onWaitlist={() => onWaitlist && onWaitlist(departure.trainNumber)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketInfo;