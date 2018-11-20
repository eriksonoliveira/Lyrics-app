// Remove 'feat.' from artist string (Spotify does not recognize if it's present)
export function prepareString(str) {
  const reg = /feat./;
  let newStr;

  if (reg.test(str)) {
    str = str.split(" ");
    // Get index of 'feat.' string in the array
    const featIndex = str.findIndex(elem => reg.test(elem));
    newStr = str.slice(0, featIndex).join(" ");

    return newStr;
  }

  return str;
}

export function replaceSpaces(str) {
  str = prepareString(str);

  const regSpace = /\s+/g;
  const regAmp = /&+/g;

  // improve this code
  str = regSpace.test(str) ? str.replace(regSpace, "%20") : str;
  str = regAmp.test(str) ? str.replace(regAmp, "%26") : str;

  return str;
}

export function formatRouteName(str) {
  const routeName = str.substr(1).replace("-", " ");
  const firstLetter = routeName.charAt(0).toUpperCase();
  return firstLetter + routeName.substr(1);
}

export function makeUrl(title, apiKey) {
  const url =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=" +
    title +
    "&page_size=10&page=1&s_track_rating=desc&apikey=" +
    apiKey;

  return url;
}
