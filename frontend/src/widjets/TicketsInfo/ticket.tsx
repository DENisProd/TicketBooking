import React from 'react';
import { Card, Button, Row, Col, Typography, Tag } from 'antd';
import { Train } from './store';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;
dayjs.extend(duration);

interface TripCardProps {
  train: Train;
  onPurchase?: (seatType: string) => void;
  onWaitlist?: (seatType: string) => void; 
}

const TripCard: React.FC<TripCardProps> = ({
  train,
  onPurchase,
  onWaitlist,
}) => {

  const startTime = dayjs(train.startpoint_departure, "DD.MM.YYYY HH:mm:ss");
  const endTime = dayjs(train.endpoint_arrival, "DD.MM.YYYY HH:mm:ss");
  const diff = endTime.diff(startTime);
  const travelTime = dayjs.duration(diff);
  const formattedTravelTime = `${travelTime.hours()} ч ${travelTime.minutes()} мин`;

  return (
    <Link to={"/train/"+train.train_id}>
    <Card bordered style={{ marginBottom: 16, borderRadius: 8, maxWidth: 600 }}>
      <Row align="middle" justify="space-between">
        <Col>
          <Row gutter={8} align="middle">
            <Tag color="blue">#{train.train_id}</Tag>
          </Row>
          <Title level={4}>{train.global_route}</Title>
          <Title level={5}>{train.startpoint_departure} → {train.endpoint_arrival}</Title>
          <Typography>Время в пути: {formattedTravelTime}</Typography>
          {/* <Text type="secondary">Дата отправления: {departureDate}</Text><br /> */}
          {/* <Text type="secondary">Дата прибытия: {arrivalDate}</Text> */}
        </Col>
      </Row>

      <Row style={{ marginTop: 16 }}>
        <Col>
          <Text type="secondary">Доступные места: {train.available_seats_count}</Text>
          <Row gutter={300} style={{ marginTop: 10 }}>
            {/* {seatsAvailable.map((seat) => (
              <Col 
                key={seat.type} 
                span={14} 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', whiteSpace: 'nowrap' }} 
              >
                <Text>{seat.type}</Text>
                <Text style={{ fontWeight: 'bold' }}>
                  {seat.count > 0 ? `${seat.count} мест` : 'Нет мест'}
                </Text>
              </Col>
            ))} */}
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: 16, justifyContent: 'space-between' }}>
        {/* {seatsAvailable.map((seat) => (
          seat.count > 0 ? (
            <Button 
              key={seat.type}
              type="primary" 
              onClick={() => onPurchase(seat.type)} 
              style={{ flex: 1, margin: '0 10px' }} 
            >
              Цена на {seat.type}: {seat.price.toLocaleString()}₽
            </Button>
          ) : (
            <Button 
              key={seat.type}
              type="default" 
              onClick={() => onWaitlist(seat.type)} 
              style={{ flex: 1, margin: '0 10px' }} 
            >
              Встать в очередь на {seat.type}
            </Button>
          )
        ))} */}
      </Row>
    </Card>
    </Link>
  );
};

export default TripCard;
