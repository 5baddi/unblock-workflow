import { GET_DEFINITION } from '../actions/constants'

const definitionReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_DEFINITION:
            return payload;
        default:
            return state;
    }
};

export default definitionReducer;