import shortId from 'shortid';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'zerocho',
        },
        content: 'firest #해시태그 #익스프레스',
        Images: [
            {
                src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
            },
            {
                src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYW5nZXxlbnwwfHwwfHw%3D&w=1000&q=80'
            },
            {
                src: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
            },
        ], 
        Comments: [
            {
                User: {
                    userId: 2,
                    nickname: 'nero',
                },
                content: '우오앙',
            },
            {
                User: {
                    userId: 3,
                    nickname: 'mzoq',
                },
                content: 'gooD 1!',
            }
        ]
    }],
    imagePaths: [],
    postAdded: false, 
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const ADD_POST = 'ADD_POST';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});


const dummyPost = (data) => ({
    id: shortId.generate() ,
    content: data,
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate() ,
    content: data,
    User: {
        id: 1,
        nickname: '제로초',
    },
});


const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST:
            return{
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            }
        case ADD_POST_FAILURE:
            return{
                ...state,
                addPostLoading: false,
                addPostError: action.error, 
            }
        case ADD_COMMENT_REQUEST:
            return{
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            }
        case ADD_COMMENT_SUCCESS:
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = { ...state.mainPosts[postIndex] };
            console.log(`JSON.stringify(post) : ${JSON.stringify(post)}`);
            console.log(`{console.log(typeof postData)} : ${(typeof post)}`);
            // console.log(mainPosts);
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;

            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            }
        case ADD_COMMENT_FAILURE:
            return{
                ...state,
                addCommentLoading: false,
                addCommentError: action.error, 
            }

        default:
            return {
                ...state
            };
    }
}

export default reducer;