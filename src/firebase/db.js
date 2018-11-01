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

export const doDeleteUser = uid => {
  return db.ref("users").child(uid).remove();
}

export const doSaveTrack = (
  uid,
  track_id,
  track_name,
  artist_name,
  album_name
) => {
  return db.ref(`favourites/${uid}`).push({
    track_id,
    track_name,
    artist_name,
    album_name
  });
};

export const onceGetFavourites = uid => {
  return db.ref(`favourites/${uid}`).once("value");
};

export const doRemoveTrack = (uid, track_key) => {
  return db
    .ref(`favourites/${uid}`)
    .child(track_key)
    .remove();
};
