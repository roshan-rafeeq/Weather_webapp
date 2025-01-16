import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div
          className="w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl
            m-auto relative px-6 top-[10%]"
        >
          <div className="flex justify-between w-full ">
            <div
              className="w-1/2 my-4 mx-auto flex 
                    justify-between items-center "
            >
              <div className="flex flex-col items-start justify-between h-full ">
                <div>
                  <p className="text-xl ">
                    {weatherData.name}, {""}
                    {weatherData.sys.country}
                  </p>
                  <p className="text-sm">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h2 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()}°C
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  className="w-[120px]"
                  alt="img"
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <div className="flex justify-between gap-x-8">
                    <p>Feels like</p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()} °C
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Humidity</p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity.toFixed()}%
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Wind speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed.toFixed()} kph
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Pressure</p>
                    <p className="font-bold w-20">
                      {weatherData.main.pressure.toFixed()} pa
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
