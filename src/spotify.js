export function createURLArtist(track, artist) {
  // Build Spotify fetch URL

  // replace spaces with %20
  artist = replaceSpaces(artist);
  console.log(artist);
  track = replaceSpaces(track);

  const BASE_URL = "https://api.spotify.com/v1/search?";
  const FETCH_URL = `${BASE_URL}q=track%3A${track}%20artist%3A${artist}&type=track&limit=1`;
  const accessToken =
    "BQC4MWTKnuuzkqlssz8VLMEz098m5B8iO83I0LVnWPlcOUSuuEEbmwlbk6ZrCu-JxvOpgGMF_h_S_D_RkmcvjXNBetu9OBL6tKNRUqIW-BBSTgphfmcn612TjlMZJSan29FMZi2NkcpkELdsLkpjBwQw4adluuZcn3ZSJtE&refresh_token=AQDIO_T9iOYynyfLjRJX-JuLQ1U0Pcu1jS4Exqj4vgms7UqehjR1Guv_BVY2VyBi8i7YwKFilXHCmolznBYBxYDMPlmskJrmnHrw7LWpBPJrcXQOmQtlPaVMcJFJIitzpM8vig";

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

// Remove 'feat.' from artist string (Spotify does not recognize if it's present)
function prepareString(str) {
  const reg = /feat./;
  let newStr;

  if (reg.test(str)) {
    str = str.split(" ");
    const featIndex = str.findIndex(elem => reg.test(elem));
    newStr = str.slice(0, featIndex);
    newStr = newStr.join(" ");

    return newStr;
  }

  return str;
}

function replaceSpaces(str) {
  str = prepareString(str);

  const reg = /\s+/g;

  // Resolver problema com '&' na string

  return reg.test(str) ? str.replace(reg, "%20") : str;
}

// ("https://api.spotify.com/v1/search?q=track%3AI%20Love%20It%20(&%20Lil%20Pump)%20artist%3AKanye%20West&type=track&limit=1");
// ("https://api.spotify.com/v1/search?q=track%3AI%20Love%20It%20(%26%20Lil%20Pump)%20artist%3AKanye%20West&type=track&limit=1");
