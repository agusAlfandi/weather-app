import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log("🚀 ~ Weather ~ data:", data);
  const convert = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[80vh] m-auto p-4 text-gray-700 z-10">
      {/* top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{convert(data.main.temp).toFixed(0)}&#176;</p>
      </div>

      {/* bottom */}

      <div className="relative rounded-lg bg-black/45 text-white p-4">
        <p className="text-center text-2xl pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <div>
              <p className="font-bold text-2xl">
                {convert(data.main.feels_like).toFixed(0)}&#176;
              </p>
              <p className="text-xl">Feels Like</p>
            </div>
          </div>
          <div>
            <div>
              <p className="font-bold text-2xl">
                {data.main.humidity.toFixed(0)}%
              </p>
              <p className="text-xl">Humidity</p>
            </div>
          </div>
          <div>
            <div>
              <p className="font-bold text-2xl">
                {data.wind.speed.toFixed(0)} MPH
              </p>
              <p className="text-xl">Winds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
