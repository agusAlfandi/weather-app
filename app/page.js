"use client";

import Spinner from "@/components/Spinner";
import Weather from "@/components/Weather";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const FetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => console.log(err, "data kota ada"));
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return (
      <div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          layout="fill"
          className="object-cover"
        />
        <Spinner />
      </div>
    );
  } else {
    return (
      <div>
        {/* overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[1]" />

        {/* background image */}
        <Image
          src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          layout="fill"
          className="object-cover"
        />

        {/* search */}
        <div className="relative flex justify-between items-center max-w-xl w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={FetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            <div>
              <input
                type="text"
                className="bg-transparent border-none text-white focus: outline-none text-2xl placeholder-white"
                placeholder="Search city..."
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button onClick={FetchWeather}>
              <BsSearch size={23} />
            </button>
          </form>
        </div>

        {/* weather */}

        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
