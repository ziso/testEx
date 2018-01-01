import { APP_LOAD, USER_SELECTED } from 'constants/action-types';

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
