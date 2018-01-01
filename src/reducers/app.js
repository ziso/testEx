import { APP_LOAD, USER_SELECTED, MARK_ALBUM_AS_SELECTED, MARK_ALBUM_AS_NOT_SELECTED } from 'constants/action-types';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  loaded: false,
  users: [
    { id: '1', name: 'Aharon', site: 'http://sheker-kolshehu.com', image: 'TBD' },
    { id: '2', name: 'Abe', site: 'http://...', image: 'TBD' },
    { id: '3', name: 'Zaratustra', site: 'http://...', image: 'TBD' },
    { id: '4', name: 'Shoval', site: 'http://...', image: 'TBD' }
  ],
  selectedUser: null,
  userAlbums: {
    1 : [
      {id: '1', title: 'ABBA gold', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '2', title: 'LALA land', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '3', title: 'Yomtov', artist: 'Arik', image: 'TBD', selected: false},
      {id: '4', title: 'ABBA silver', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '5', title: 'LALA sea', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '6', title: 'Yomra', artist: 'Arik', image: 'TBD', selected: false},
      {id: '7', title: 'ABBA platinum', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '8', title: 'LALA air', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '9', title: 'Yomkaha kaha', artist: 'Arik', image: 'TBD', selected: false},
      {id: '10', title: 'Shuv', artist: 'Einstein', image: 'TBD', selected: false}
    ],

    2 : [
      {id: '1', title: 'ABBA gold', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '2', title: 'LALA land', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '3', title: 'Yomtov', artist: 'Arik', image: 'TBD', selected: false},
      {id: '4', title: 'ABBA silver', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '5', title: 'LALA sea', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '6', title: 'Yomra', artist: 'Arik', image: 'TBD', selected: false},
      {id: '7', title: 'ABBA platinum', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '8', title: 'LALA air', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '9', title: 'Yomkaha kaha', artist: 'Arik', image: 'TBD', selected: false},
      {id: '10', title: 'Shuv', artist: 'Einstein', image: 'TBD', selected: false}
    ],

    3: [
      {id: '1', title: 'ABBA gold', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '2', title: 'LALA land', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '3', title: 'Yomtov', artist: 'Arik', image: 'TBD', selected: false},
      {id: '4', title: 'ABBA silver', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '5', title: 'LALA sea', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '6', title: 'Yomra', artist: 'Arik', image: 'TBD', selected: false},
      {id: '7', title: 'ABBA platinum', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '8', title: 'LALA air', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '9', title: 'Yomkaha kaha', artist: 'Arik', image: 'TBD', selected: false},
      {id: '10', title: 'Shuv', artist: 'Einstein', image: 'TBD', selected: false}
    ],

    4: [
      {id: '1', title: 'ABBA gold', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '2', title: 'LALA land', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '3', title: 'Yomtov', artist: 'Arik', image: 'TBD', selected: false},
      {id: '4', title: 'ABBA silver', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '5', title: 'LALA sea', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '6', title: 'Yomra', artist: 'Arik', image: 'TBD', selected: false},
      {id: '7', title: 'ABBA platinum', artist: 'ABBA', image: 'TBD', selected: false},
      {id: '8', title: 'LALA air', artist: 'Eliyahu', image: 'TBD', selected: false},
      {id: '9', title: 'Yomkaha kaha', artist: 'Arik', image: 'TBD', selected: false},
      {id: '10', title: 'Shuv', artist: 'Einstein', image: 'TBD', selected: false}
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
