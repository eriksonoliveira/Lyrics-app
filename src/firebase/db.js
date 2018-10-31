import { db } from "./firebase";

export const doCreateUser = (id, username, email) => {
  return db.ref(`users/${id}`).set({
    username,
    email
  });
};

export const onceGetUser = id => {
  return db.ref(`users/${id}`).once("value");
};

export const doSaveTrack = (uid, trackId, trackName, Artist, Album) => {
  return db.ref(`favourites/${uid}`).push({
    trackId,
    trackName,
    Artist,
    Album
  });
};

export const onceGetFavourites = uid => {
  return db.ref(`favourites/${uid}`).once("value");
};
