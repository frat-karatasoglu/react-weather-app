import { useState } from "react";
import "./index.css";


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleSearch = async () => {
    const q = city.trim();
    if (q.length < 2) { setErr("Lütfen en az 2 karakter gir."); return; }

    setLoading(true); setErr(null); setWeatherData(null); setHourlyData([]);

    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY
        }&q=${encodeURIComponent(q)}&lang=tr&days=1`;

      const res = await fetch(url);
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson?.error?.message || `API ${res.status}`);
      }
      const data = await res.json();
      setWeatherData(data);
      setHourlyData(data?.forecast?.forecastday?.[0]?.hour || []);
    } catch (e) {
      setErr(e.message || "Bir şeyler yanlış gitti.");
    } finally { setLoading(false); }
  };


  const onKeyDown = (e) => e.key === "Enter" && handleSearch();

  return (
    <div className="container">
      <h1>Weather App</h1>

      <div className="search-box">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Şehir giriniz"
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {err && <div className="error-message">{err}</div>}

      {weatherData && (
        <div className="weather-card">
          <img
            src={`https:${weatherData.current.condition.icon}`}
            alt="icon"
          />
          <div style={{ fontSize: "40px", fontWeight: "bold" }}>
            {weatherData.current.temp_c}°C
          </div>
          <div style={{ fontSize: "22px", marginTop: "10px" }}>
            {weatherData.location.name}
          </div>
          <div style={{ fontSize: "18px", marginTop: "4px" }}>
            {weatherData.current.condition.text}
          </div>
        </div>
      )}

      {hourlyData.length > 0 && (
        <div className="hourly-container">
          {hourlyData.map((hour, i) => (
            <div className="hourly-box" key={i}>
              <div>{hour.time.split(" ")[1].slice(0, 5)}</div>
              <img src={`https:${hour.condition.icon}`} alt="icon" />
              <div style={{ fontWeight: "bold" }}>{hour.temp_c}°C</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
