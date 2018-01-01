import { APP_LOAD, USER_SELECTED, MARK_ALBUM_AS_SELECTED, MARK_ALBUM_AS_NOT_SELECTED } from 'constants/action-types';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  loaded: false,
  users: [
    { id: '1', name: 'user1', site: 'http://...', image: 'image url' },
    { id: '2', name: 'user2', site: 'http://...', image: 'image url' },
    { id: '3', name: 'user3', site: 'http://...', image: 'image url' },
    { id: '4',  name: 'user4', site: 'http://...', image: 'image url' },
  ],
  selectedUser: null,
  userAlbums: {
    1 : [
      {id: '1', title: 'Album 1', artist: 'artist 1', image: 'album title image', selected: false},
      {id: '2', title: 'Album 2', artist: 'artist 2', image: 'album title image', selected: true},
      {id: '3', title: 'Album 3', artist: 'artist 3', image: 'album title image', selected: false},
      {id: '4', title: 'Album 4', artist: 'artist 4', image: 'album title image', selected: false}
    ],

    2 : [
      {id: '1', title: 'Album 1', artist: 'artist 1', image: 'album title image', selected: false},
      {id: '2', title: 'Album 2', artist: 'artist 2', image: 'album title image', selected: true},
      {id: '3', title: 'Album 3', artist: 'artist 3', image: 'album title image', selected: false},
      {id: '4', title: 'Album 4', artist: 'artist 4', image: 'album title image', selected: false}
    ]
  }
});

export default function app(state = initialState, action) {
  let clonedState = Object.assign({}, state);
  switch (action.type) {
    case APP_LOAD:
      return state.set('loaded', true);
    case USER_SELECTED:
      return state.set('selectedUser', action.id);
    case MARK_ALBUM_AS_SELECTED:
      return markAlbumSelection(state, action.userId, action.albumId, true);
    case MARK_ALBUM_AS_NOT_SELECTED:
      return markAlbumSelection(state, action.userId, action.albumId, false);
    default:
      return state;
  }

  function markAlbumSelection(state, userId, albumId, selected){
    let index = (state.getIn(['userAlbums', userId])).findIndex((album)=>{return album.get('id') === albumId});
    return state.setIn(['userAlbums', userId, index, 'selected'], selected);      
  }
}
