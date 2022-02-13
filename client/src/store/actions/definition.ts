import { GET_DEFINITION } from './constants';
import {PUBLIC_URL} from "../../../../src/settings";
import {DEFINITION_ID_KEY} from "../../global";

export const getDefinition = () => dispatch => {
    let id = window.sessionStorage.getItem(DEFINITION_ID_KEY);
    if (! id) {
        return;
    }

    return fetch(`${PUBLIC_URL}/api/definitions/${id}`)
        .then(res => {
            console.log(res.json());
        })
        .then(definition => dispatch({type: GET_DEFINITION, payload: definition}));
}