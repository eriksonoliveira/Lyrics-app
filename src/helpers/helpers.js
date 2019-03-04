// @flow

// Remove 'feat.' from artist string (Spotify does not recognize if it's present)
export function prepareString(str: string) {
  const reg = /feat./;

  if (reg.test(str)) {
    let newStr: Array<string> = str.split(" ");
    // Get index of 'feat.' string in the array
    const featIndex: number = newStr.findIndex(elem => reg.test(elem));

    return newStr.slice(0, featIndex).join(" ");
  }

  return str;
}

export function replaceSpaces(str: string) {
  let newStr: string = prepareString(str);

  const regSpace = /\s+/g;
  const regAmp = /&+/g;

  // TODO improve this code
  if (regSpace.test(newStr)) {
    newStr = newStr.replace(regSpace, "%20").replace(regAmp, "%26");
  }

  return newStr;
}

export function formatRouteName(str: string) {
  const routeName: string = str.substr(1).replace("-", " ");
  const firstLetter: string = routeName.charAt(0).toUpperCase();
  return firstLetter + routeName.substr(1);
}

export function makeUrl(title: string, apiKey: string) {
  const url =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=" +
    title +
    "&page_size=10&page=1&s_track_rating=desc&apikey=" +
    apiKey;

  return url;
}
