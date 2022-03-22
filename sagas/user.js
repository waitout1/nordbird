import { all, call, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import axios from 'axios';  

import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

function logInAPI(){
    return axios.post("/api/login")
}
 
function* logIn(action){
    try{
        //fork는 비동기 함수 호출, call 동기 함수 호출
        // await 과 비슷 하게 
        // const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        })
    }
    catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            data: err.response.data,
        })
    }
}
 
function* watchLogIn(){
    
    //LOG_IN 액션 될떄까지 기다리겠다
    
    //.next 는 yield 하고 멈추니까 이렇게도 가능하다 
    // while(true){
    //     yield takeEvery('LOG_IN_REQUEST', logIn);
    // }
    //하지만 의미하는바 이해하기 어려우므로 아래를 쓸수 있다
    // yield takeEvery('LOG_IN_REQUEST', logIn);

    //실수로 연속적인 이벤트가 2번 발생할떄 막아주느거 , 마지막꺼를 인정해줌
    //같은 기능이지만 다른거는 takeLeading은 처음꺼만 응답을 받는다
    //실제로 요청으 여러번 전달됨
    yield takeLatest(LOG_IN_REQUEST, logIn);

    //10초에 1번만 요청할수 있다 
    // yield throttle('LOG_IN_REQUEST', logIn, 1000*10);
}


function logOutAPI(data){
    return axios.post("/api/logout", data);
}

function* logOut(){
    try{
        console.log("saga logOut");
        //fork는 비동기 함수 호출, call 동기 함수 호출
        // await 과 비슷 하게 
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            // data: result.data,
        })
    }
    catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function signUpAPI(data){
    return axios.post("/api/signup", data);
}

function* signUp(){
    try{
        console.log("saga logOut");
        //fork는 비동기 함수 호출, call 동기 함수 호출
        // await 과 비슷 하게 
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            // data: result.data,
        })
    }
    catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}


function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}


function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, logOut);
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}

