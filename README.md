# Spotify Data Analytics Dashboard (Spotlytics) 🎶📊  
**A React-based dashboard for visualizing Spotify data and gaining insights into listening habits, most played songs, and trends.**

---

## 📖 Project Overview  
This project is a data visualization dashboard that leverages Spotify data, presenting detailed insights into user listening patterns, most played tracks, and related statistics. The app uses a Spotify data export in JSON format and features several sections to explore various music-related trends.

---

## 🚀 Key Features  
- **Trendy Songs**: Displays the most played songs within a specific date range.  
- **Tracks Analytics**: Provides detailed data about total plays, individual tracks, listening time, daily averages, and peak listening hours.  
- **Playlists**: Visualizes the most played artists, tracks, and albums over a given period.  
- **Broadcast Episodes**: Displays insights on top episodes based on the total listen count.

Each section features smooth transitions and interactive components to enhance the user experience.

---

## 📸 Screenshots

Explore the features of the **Spotify Data Analytics Dashboard** with these screenshots:

### 1. **Artist Page**
![artistPage](https://github.com/user-attachments/assets/63198265-33b5-4893-81bf-4d0545a3b660)  
*View the artist analytics, showcasing top tracks and total play data.*

---

### 2. **Trendy Songs Dashboard**
![Spotlytics (3)](https://github.com/user-attachments/assets/1ac4b0c8-231e-491f-9716-0ab23dc1e2b3)  
*Display of the most played songs within a specific date range.*

---

### 3. **Tracks Analytics**
![Spotlytics (2)](https://github.com/user-attachments/assets/0c4fc315-6885-48ff-b56a-b3c59ae9e2a5)  
*Detailed analytics about tracks, including plays, listening time, and peak hours.*

---

### 4. **Broadcast Episode Insights**
![Spotlytics (1)](https://github.com/user-attachments/assets/9c330b33-aa42-438f-b2d3-662d5ad492d6)  
*Insights into top podcast episodes, based on play count.*


---
## 🛠️ Installation

1. Clone the repository to your local machine:  
   ```bash
   git clone https://github.com/kameldeeb/Spotlytics.git
   ```

2. Navigate to the project folder:  
   ```bash
   cd spotify-dashboard
   ```

3. Install the dependencies:  
   ```bash
   npm install
   ```

4. Run the development server:  
   ```bash
   npm start
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

- **src/**
  - **components/**
    - `Trendy.js`: Component for displaying the most trendy songs.
    - `Tracks.js`: Component for displaying track analytics and total play data.
    - `Playlist.js`: Component for displaying playlists, top artists, tracks, and albums.
    - `Broadcast.js`: Component for displaying broadcast episode analytics.
    - `Loading.js`: Loading spinner while data is being fetched.
    - `Accordion.js`: Accordion component used in the Playlist section to display detailed info.
  - **data/**: Contains `spotify_data.json` (replace this with your actual Spotify data export).
  - **App.js**: Main entry point of the React application.

---

## 🧩 Technologies Used  
- **React**: For building the interactive UI.  
- **Tailwind CSS**: For styling and layout.  
- **JavaScript (ES6)**: For data processing and logic.

---

## 🧑‍💻 How to Use  

1. Once the app is running, navigate through the different sections to explore insights:
   - **Trendy Songs**: Displays the most played songs in a specific date range.
   - **Tracks Analytics**: Shows general statistics about the tracks, such as total plays and daily listening averages.
   - **Playlists**: Lists the most played artists, tracks, and albums for all time or for the last year.
   - **Broadcast Episodes**: Provides detailed analytics for podcast episodes based on their play count.

2. Use the dropdowns and interactive cards to filter data by time periods (e.g., "All Time" vs. "Last Year") to see detailed breakdowns of the most played content.

---

## 📜 License  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Customizations and Future Enhancements  
You can further customize the dashboard by replacing the sample `spotify_data.json` file with your own Spotify export data. Additionally, future updates might include new features like:
- Advanced filtering options based on genres or specific playlists.
- Enhanced analytics for listening patterns over different time spans.

