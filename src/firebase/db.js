// @flow

import { db } from "./firebase";

export const doCreateUser = (id: number, username: string, email: string) => {
  return db.ref(`users/${id}`).set({
    username,
    email
  });
};

export const onceGetUser = (id: number) => {
  return db.ref(`users/${id}`).once("value");
};

export const doDeleteUser = (uid: number) => {
  return db
    .ref("users")
    .child(uid)
    .remove();
};

export const doSaveTrack = (
  uid: number,
  track_id: number,
  track_name: string,
  artist_name: string,
  album_name: string
) => {
  return db.ref(`favourites/${uid}`).push({
    track_id,
    track_name,
    artist_name,
    album_name
  });
};

export const onceGetFavourites = (uid: number) => {
  return db.ref(`favourites/${uid}`).once("value");
};

export const doRemoveTrack = (uid: number, track_key: number) => {
  return db
    .ref(`favourites/${uid}`)
    .child(track_key)
    .remove();
};
