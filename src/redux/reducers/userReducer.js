import { USER_DATA} from '../actions/config';



const initialState = {
    userData : '',
};


const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USER_DATA:
            return { ...state, userData:  action.payload };

        default:
            return state;
    }
}
