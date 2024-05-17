"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   response();
  // }, []);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const FeatchWeather = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err, "data kota ada"));
    setCity("");
    setLoading(false);
  };
  return (
    <div>
      <h1>Hello</h1>
      <Image
        src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="fill"
        className="object-cover"
      />
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[1]">
        <input
          className="border rounded-md"
          placeholder="Input city..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button onClick={FeatchWeather}>search</button>
      </div>
      {/* overlay */}
    </div>
  );
}
