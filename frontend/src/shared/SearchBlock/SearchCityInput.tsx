import React, { useState } from 'react'
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

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

async function searchCity (value: string): Promise<UserValue[]> {
    const cities: City[] = await axios.get(SERVER_URL+'city?value='+value)
    console.log(cities)
    const mappedData = cities.data.map(city => ({ label: `${city.name}, ${city.region.name}`, value: city.name}))
    console.log(mappedData)
    return mappedData;
}

const SearchCityInput = () => {
    const [data, setData] = useState<UserValue[]>([]);
    const [value, setValue] = useState<string>("");
  
    const handleSearch = (newValue: string) => {
        if (value?.length > 0) searchCity(value).then(cities => setData(cities));
    };
  
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

  return (
    <Select
    style={{width: 200}}
      showSearch
      value={value}
      placeholder={"Название города"}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={<div>Города с таким названием не найдено :/</div>}
      options={data}
    />
  )
}

export default SearchCityInput
