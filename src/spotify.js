export function createURLArtist(track, artist) {
  // Build Spotify fetch URL

  // replace spaces with %20
  artist = replaceSpaces(artist);
  track = replaceSpaces(track);

  const BASE_URL = "https://api.spotify.com/v1/search?";
  const FETCH_URL = BASE_URL + "q=" + artist + "&type=artist&limit=1";
  const accessToken =
    "BQBaNwNcZJXaedron-mJUFHoDqPuT_cN2wkQ2ugh0E2nLTZM3It2T_UX2OVomzF4_c-E5fddYqywS3IIgDtxphh7rdyPMzd4fbJqQBOg31zep6tDJacIHMiUEEGTlaDByeG84iESAY6nKGPX_v0-vovWaYex_Jr9FHF4PCM&refresh_token=AQDs3ckB-Zc2hWUDqNIl-UQsAzwv8dOKisoaBi3sxA5c0gU0H9JK58kx7k08DoT--rm8oXgdRhf0KnWfT7nsh87ACyDGbBgaJp_6J3wwhXj1YzaDX47rVGsNdarHWduXa_4-CQ";

  const headers = {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      Authorization: "Bearer " + accessToken
    }),
    mode: "cors",
    cache: "default"
  };

  return { FETCH_URL, headers };
}

function replaceSpaces(str) {
  const reg = /\s+/;
  return reg.test(str) && str.replace(reg, "%20");
}
