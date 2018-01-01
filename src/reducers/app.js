import { APP_LOAD, USER_SELECTED } from 'constants/action-types';

const initialState = {
  loaded: false,
  users: [
    { id: "1", name: 'user1', site: 'http://...', image: 'image url' },
    { id: "2", name: 'user2', site: 'http://...', image: 'image url' },
    { id: "3", name: 'user3', site: 'http://...', image: 'image url' },
    { id: "4",  name: 'user4', site: 'http://...', image: 'image url' },
  ],
  selectedUser: null
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case USER_SELECTED:
      return Object.assign({}, state, {selectedUser: action.id });
    default:
      return state;
  }
}
