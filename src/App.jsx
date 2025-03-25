import axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const API_KEY = String(import.meta.env.VITE_WEATHER_API_KEY)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if( e.key ==="Enter"){
      axios.get(url)
        .then((response) => {
          setData(response.data)
          console.log(response.data);
      })
      setLocation("")
    }
  }

  return (
    <>
      <div className=" w-full h-full ">
        <div className="text-center p-2 py-4 px-6 relative">
          <input
            type="text"
            placeholder="Search Location"
            className="text-gray-600 py-3 px-6 w-[55%] text-lg rounded-3xl
            border border-gray-200 placeholder:text-gray-400 
            focus:outline-none bg-white-600/100 shadow-md"
            value={location}
            onChange={(e) => {
              e.preventDefault()
              setLocation(e.target.value)
            }}
            onKeyDownCapture={searchLocation}
          />
           <div className="absolute inset-y-0 left-[71%] right-[20%] pl-10
                    flex items-center 
                    pointer-events-none">
           
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 4a7 7 0 017 7 7 7 0 01-1.49 4.39l4.32 4.32a1 1 0 01-1.41 1.41l-4.32-4.32A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z" />
            </svg>

        </div>
        </div>
        
        <Weather weatherData={data} />

      </div>
    </>
  );
}

export default App;
