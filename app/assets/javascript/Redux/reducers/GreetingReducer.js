import Axios from 'axios';

const ADDGREETINGS = 'react-app/redux/ADDGREETINGS';

const addGreetings = (greetings) => ({
    type: ADDGREETINGS,
    greetings,
});


const initialState = [];

export const fetchGreetings = () => async (dispatch) => {
    const response = await Axios.get('/api/v1/greetings');
    dispatch(addGreetings(response.data));
};

const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDGREETINGS:
            return action.greetings;
        default:
            return state;
    }
}

export default greetingReducer;