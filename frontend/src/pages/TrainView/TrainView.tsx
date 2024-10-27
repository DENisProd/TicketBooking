import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useTicketStore, { WagonInfo } from '../../app/store/ticket.store';
import Wagon from './Wagon';

const TrainView = () => {
    let params = useParams();
    const [ data, setData] = useState<WagonInfo[]>();
    const { fetchWagonInfo, wagons } = useTicketStore();

    useEffect(() => {
        const trainId = params?.trainId;
        if (trainId) {
            console.log(trainId)
            fetchWagonInfo(+(trainId))
        }
    }, [])

    useEffect(() => {
        console.log(wagons);
    }, [wagons])

  return (
    <>
      {wagons.map(wagon => (
        <Wagon wagon={wagon}/>
      ))}
    </>
  )
}

export default TrainView
