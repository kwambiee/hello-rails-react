import Axios from 'axios';

const SETGREETINGS = 'react-app/redux/SETGREETINGS';

const setGreetings = (greetings) => ({
    type: SETGREETINGS,
    greetings
});

const initialState = [];

export const getGreetings = () => async (dispatch) => {
    const { data } = await Axios.get('/api/v1/greetings/index');
    dispatch(setGreetings(data));
}

const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETGREETINGS:
            return action.greetings;
        default:
            return state;
    }
}

export default greetingReducer;