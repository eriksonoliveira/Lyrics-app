## Lyrics App

This app was built with ReactJS and allows users to search for lyrics in the Musixmatch database.
When the user gets the result, besides the lyrics, the app also presents a spotify player that users can use to listen to the full song or a part of it, depending on the song. 
Users can also redirect to spotify and add the song to their playlists.

The app makes calls to Musixmatch's API for a list of 10 tracks with the name specified by the user. When the user selects one, the app calls the API again the get the lyrics and information about the artist. 

This info is used to call Spotify's API that returns with the track's ID, that's then used to build the preview player.
