# 🌦️ Weather App (React + Vite)

> A modern and responsive weather forecast web app built with **React** and **Vite**.  
> Developed by **Fırat Karataşoğlu** — a Software Engineering student passionate about frontend development and API integration.

---

## ✨ Features
- 🔍 Search for weather by city name  
- 🌡️ Displays temperature, condition, and weather icons  
- 🕒 Shows hourly forecast for the current day  
- 🌍 Supports Turkish (`lang=tr`)  
- 🔒 Environment variables for secure API key handling  
- ⚡ Fast and lightweight Vite + React setup  

---

## 🧠 Technologies Used

| Category | Tools |
|-----------|-------|
| **Frontend** | React 18, Vite |
| **Styling** | CSS |
| **API** | [WeatherAPI.com](https://www.weatherapi.com/) |
| **Language** | JavaScript (ES6+) |

---

## 🧩 Installation & Setup

### 1️⃣ Clone the Project
```bash
git clone https://github.com/<your-username>/weather-app.git](https://github.com/frat-karatasoglu/react-weather-app.git
cd weather-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Your WeatherAPI Key
1. Create a free account at [WeatherAPI.com](https://www.weatherapi.com/).  
2. Get your API key from the dashboard.  
3. In your project root, create a file called `.env.local` and add:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

> ⚠️ Don’t worry — `.env.local` is ignored by Git, so your API key is safe.

---

## ▶️ Run the App
```bash
npm run dev
```

Then open your browser at 👉 [http://localhost:5173](http://localhost:5173)

Type a city name, click **Search**, and view live weather data.

---

## 📁 Project Structure
```
weather-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.local
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```

---

## 🖼️ Preview

<img width="1886" height="894" alt="image" src="https://github.com/user-attachments/assets/1d6066c8-9f75-4295-a96c-248e718f016a" />


---

## 💡 Future Improvements
- 🌤️ 3-day and 7-day forecast  
- 🌙 Dark mode  
- 📍 “Use My Location” (Geolocation API)  
- 🧭 Autocomplete city suggestions  

---

## 👨‍💻 Author
**Fırat Karataşoğlu**  
🎓 Software Engineering Student  
---

## 📝 License
MIT License — free to use, modify, and share.

---
