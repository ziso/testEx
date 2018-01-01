import { APP_LOAD, USER_SELECTED, MARK_ALBUM_AS_SELECTED } from 'constants/action-types';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export function selectUser(id) {
  return {
    type: USER_SELECTED,
    id
  };
}

export function addAlbumToSelectedList(userId, albumId) {
  return {
    type: MARK_ALBUM_AS_SELECTED,
    userId,
    albumId
  };
}
