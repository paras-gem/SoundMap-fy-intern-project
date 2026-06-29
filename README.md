# 🎵 SoundMap

SoundMap is an interactive music discovery platform that lets users explore popular music from around the world through a clickable map. Instead of relying on personalized recommendation algorithms, users can discover the musical culture of different countries in real time.

## Features

* 🌍 Interactive world map powered by Leaflet.js
* 🎶 Country-based music discovery
* 🎧 Track previews and Spotify links
* ❤️ Save favorite tracks to your Musical Passport
* 👤 User authentication and profiles
* 📊 Personal discovery history and statistics
* ⚡ Fast and responsive UI

## Tech Stack

### Frontend

* Next.js
* Leaflet.js
  

### Backend

* Django
* Django REST Framework
* Spotipy (Spotify API Integration)

### Database

* PostgreSQL

## Architecture

```text
Next.js → Django REST API → PostgreSQL → Spotify API
```

## Installation

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Environment Variables

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
DATABASE_URL=your_postgresql_url
```

## Future Enhancements

* Genre heatmaps
* Global music trends
* AI-powered recommendations
* Achievement badges
* Social sharing
  

```
```
