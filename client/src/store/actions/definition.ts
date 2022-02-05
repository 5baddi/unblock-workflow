import { GET_DEFINITION } from './constants';

export const getDefinition = () => dispatch => {
    return fetch('/api/definition')
        .then(res => res.json())
        .then(definition => dispatch({type: GET_DEFINITION, payload: definition}));
}