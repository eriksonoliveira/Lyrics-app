const fakeData = {
  track: {
    track_name: "Track",
    artist_name: "Artist",
    album_name: "Album",
    first_release_date: "Date"
  },
  lyrics: {
    text: "Some text"
  }
};

export function getTrackDataFromMusixmatch(type, song_id) {
  return new Promise(resolve => resolve(fakeData));
}
