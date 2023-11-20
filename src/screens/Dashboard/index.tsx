import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { useCity } from "@hooks/useCity";
import {
  CityProps,
  getCityByNameService,
} from "@services/getCityByNameService";
import {
  WeatherResponseProps,
  getWeatherByCityService,
} from "@services/getWeatherByCityService";
import { useNavigation } from "@react-navigation/native";

import { Loading } from "@components/Loading";
import { NextDays } from "@components/NextDays";
import { SelectList } from "@components/SelectList";
import { WeatherToday } from "@components/WeatherToday";
import { WeatherDetails } from "@components/WeatherDetails";
import { removeStorageCity } from "@libs/asyncStorage/cityStorage";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [isWeatherLoading, setWeatherIsLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherResponseProps>(
    {} as WeatherResponseProps
  );
  const navigation = useNavigation();

  const { city, handleChanceCity, cityIsLoading } = useCity();

  function handleSelect(value: CityProps) {
    handleChanceCity(value);
    setSearch("");
    setCities([]);
  }

  async function getWeatherDetails() {
    if (!city) {
      return;
    }

    setWeatherIsLoading(true);

    const { latitude, longitude } = city;
    const response = await getWeatherByCityService({ latitude, longitude });

    setWeather(response);
    setWeatherIsLoading(false);
  }

  async function getCities(city: string) {
    setIsSearching(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsSearching(false);
  }

  function handleRemoveCity() {
    removeStorageCity()
    navigation.navigate('search')
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    getCities(search);
    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  useEffect(() => {
    getWeatherDetails();
  }, [city]);

  if (isWeatherLoading || cityIsLoading || !city) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <SelectList
          data={cities}
          value={search}
          onChange={setSearch}
          onPress={handleSelect}
          isLoading={isSearching}
          placeholder="Buscar local"
        />
        <TouchableOpacity style={styles.button} onPress={handleRemoveCity}>
          <Text style={styles.textButton}>X</Text>
        </TouchableOpacity>
      </View>

      <WeatherToday city={city.name} weather={weather.today.weather} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <WeatherDetails data={weather.today.details} />
        <NextDays data={weather.nextDays} />
      </ScrollView>
    </View>
  );
}
