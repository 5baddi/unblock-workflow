import { GET_DEFINITION } from './constants';
import { loadDefaultDefinition } from "../../helpers";

export const getDefinition = () => dispatch => {
    return dispatch({type: GET_DEFINITION, payload: loadDefaultDefinition()});
    // return fetch('/api/definition')
    //     .then(res => res.json())
    //     .then(definition => dispatch({type: GET_DEFINITION, payload: definition}));
}