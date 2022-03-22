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
                    nickname: 'nero',
                },
                content: '우오앙',
            },
            {
                User: {
                    nickname: 'mzoq',
                },
                content: 'gooD 1!',
            }
        ]
    }],
    imagePaths: [],
    postAdded: false, 
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
    
}
const dummyPost = {
    id: 2,
    content: '더미데이터입니다',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return {
                ...state
            };
    }
}

export default reducer;