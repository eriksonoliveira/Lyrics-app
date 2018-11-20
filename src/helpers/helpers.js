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
