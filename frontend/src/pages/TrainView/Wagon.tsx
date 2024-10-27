import { Card, Flex, Typography } from "antd";
import React from "react";
import { WagonInfo } from "../../app/store/ticket.store";
import Title from "antd/es/typography/Title";
import Seat from "./Seat";

const wagonTypeNames = {
    PLATZCART: "Плацкарт",
    COUPE: "Купе",
    LOCAL: "Локальный",
};

interface Props {
    wagon: WagonInfo;
}

const Wagon: React.FC<Props> = ({ wagon }) => {
    return (
        <Card style={{ width: '100%' }}>
            <Title level={3}>{wagonTypeNames[wagon.type]}</Title>
            <Typography>Мест: {wagon.seats.length}</Typography>

            <Flex gap={"small"}>
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
            </Flex>
        </Card>
    );
};

export default Wagon;
