import { Button, Card, DatePicker, Flex, Form, Input, Layout, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import httpService from "../../services/http.service";
import { DebounceSelect } from "./DebounceSelect";
import axios from "axios";
import useTicketStore from "../../app/store/ticket.store";
import TicketInfo from "../../widjets/TicketsInfo/info";

interface Region {
    regionId: number;
    name: string;
}

interface City {
    id: number;
    name: string;
    coordinates: string;
    region: Region;
}

interface UserValue {
    label: string;
    value: string;
}

const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

async function searchCity(value: string): Promise<UserValue[]> {
    const cities: City[] = await axios.get(SERVER_URL + "city?value=" + value);
    const mappedData = cities.data.map((city) => ({ label: `${city.name}, ${city.region.name}`, value: city.name }));
    return mappedData;
}

const SearchBlock = () => {
    const [fromValue, setFromValue] = useState<UserValue[]>([]);
    const [toValue, setToValue] = useState<UserValue[]>([]);
    const { fetchTrains, trains } = useTicketStore();

    const search = () => {
        fetchTrains(fromValue?.value, toValue?.value, new Date());
    };

    useEffect(() => {
        console.log(trains);
    }, [trains]);

    return (
        <>
            <Title level={3}>Бронировать Ж/Д билеты теперь легко!</Title>
            <Card>
                <Form>
                    <Flex gap={"middle"}>
                        <div style={{ width: 200 }}>
                            <Typography>Откуда</Typography>
                            <DebounceSelect
                                showSearch
                                value={fromValue}
                                placeholder="Откуда"
                                fetchOptions={searchCity}
                                onChange={(newValue) => {
                                    setFromValue(newValue as UserValue[]);
                                }}
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div style={{ width: 200 }}>
                            <Typography>Куда</Typography>
                            <DebounceSelect
                                showSearch
                                value={toValue}
                                placeholder="Куда"
                                fetchOptions={searchCity}
                                onChange={(newValue) => {
                                    setToValue(newValue as UserValue[]);
                                }}
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div>
                            <Typography>Когда</Typography>
                            <DatePicker placeholder="Когда" />
                        </div>
                        <Flex align="end">
                            <Button type="primary" form="true" onClick={search}>
                                Поиск
                            </Button>
                        </Flex>
                    </Flex>
                </Form>
            </Card>

            <section>
                {trains.length > 0 ? (
                    <TicketInfo trains={trains} />
                ) : (
                    <>
                        <Typography>Ничего не найдено :/</Typography>
                    </>
                )}
            </section>
        </>
    );
};

export default SearchBlock;
