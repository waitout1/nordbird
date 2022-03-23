import { all, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import { 
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from '../reducers/post';
import axios from 'axios'

function addPostAPI(data){
    return axios.post("/api/post", data);
}

function* addPost(action){
    try{
        //fork는 비동기 함수 호출, call 동기 함수 호출
        // await 과 비슷 하게 
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: action.data,
        })
    }
    catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        })
    }
}


function addCommentAPI(data){
    return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action){
    try{
        //fork는 비동기 함수 호출, call 동기 함수 호출
        // await 과 비슷 하게 
        // const result = yield call(addCommentAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
        })
    }
    catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        })
    }
}


function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchCommentPost(){
    yield takeLatest(ADD_COMMENT_REQUEST, addPost);
}


export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchCommentPost),
    ])
}