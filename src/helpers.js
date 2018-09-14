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

export function replaceSpaces(str) {
  str = prepareString(str);

  const reg = /\s+/g;

  // Resolver problema com '&' na string

  return reg.test(str) ? str.replace(reg, "%20") : str;
}
