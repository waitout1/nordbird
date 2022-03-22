import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

// const initialState = {
//     user: {
//     },
//     post: [],
// }
//동적으로 액션을 만들어주는 액션 크리에이터
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// };

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogicho',
// }

//(이전상태, 액셔) => 다음상태
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type){
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;