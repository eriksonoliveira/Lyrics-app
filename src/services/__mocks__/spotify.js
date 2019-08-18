const fakeToken = "fakeToken";

const fakeData = {
  tracks: {
    items: [{ artists: "Artist", album: "Album" }]
  }
};

export function getSpotifyToken() {
  return new Promise(resolve => resolve(fakeToken));
}

export function getArtistInfoFromSpotify(track_name, artist_name, token) {
  return new Promise(resolve => resolve(fakeData));
}
