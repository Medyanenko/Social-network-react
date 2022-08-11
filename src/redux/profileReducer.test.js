import profileReducer, {addPostActionCreator} from './profileReducer'


let state = {
    posts: [{
            id: 1,
            message: 'Hi',
            like: '15'
        },
        {
            id: 2,
            message: 'Hola',
            like: '20'
        }
    ],
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('aaa')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)

})

test('message of posts should be correct', () => {
    let action = addPostActionCreator('aaa')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('aaa')
})


// test('after deleting length of message should be decrement', () => {
//    let action = deletePost(1)
//    let newState = profileReducer(state, action)
//    expect(newState.posts.length).toBe(2)
// })

// test(`after deleting length shouldn't be decrement if id incorrect`,
//    () => {
//       let action = actions.deletePost(555)
//       let newState = profileReducer(state, action)
//       expect(newState.posts.length).toBe(3)
//    })