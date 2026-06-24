SoundMap: A web application that lets users discover music from around the world through an interactive map instead of relying on personalized algorithms 





Users open an interactive world map.

clicking the country sends backend request.

the backend fetches music data from spotify using the spotify API



Users can:



* View top tracks from the world map.
* listen to available 30 second previews.
* Open tracks directly on spotify.



Registered users can save favourites discoveries to a personal Musical Passport organized by the country.



Backend: Django (python)

Spotify Api: spotipy

Database: Portgesql

Interactive Map: leaflet.js

Frontend/Ui: tailwind css 

media handling: pillow      // for profile pictures and artwork.

environment management: dotenv

deployment: Vercel

database management: Neon  // database to live online

backend: render // deployment to backend

frontend and backend connection: DRF: Django Rest framework: give serialization, auth support, requesting, API testing interface

Postman: during development API testing



