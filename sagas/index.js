import { all,  fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';


//* 제네레이터 
export default function* rootSage() {
    yield all([
        //fork와 call명확하게 알기
        //fork는 비동기 함수 호출, call 동기 함수 호출
        fork(postSaga),
        fork(userSaga),
    ]);
} 