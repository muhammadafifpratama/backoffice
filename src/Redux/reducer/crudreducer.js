const initial_state = { id: 1 }
const App = (asd = initial_state, action) => {
    switch (action.type) {
        case 'click':
            console.log(action.payload);
            return action.payload
        default:
            return asd
    }
}

export default App;