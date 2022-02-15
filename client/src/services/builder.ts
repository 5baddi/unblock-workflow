import { IEditorProperties } from "../interfaces";
import { DEFAULT_EDITOR_PROPERTIES } from '../global';

function mergeProperties(element: string, config?: IEditorProperties): IEditorProperties
{
    if (! config) {
        config = DEFAULT_EDITOR_PROPERTIES;
    }

    let properties = Object.assign({}, JSON.parse(JSON.stringify(config)));
    properties.element = document.getElementById(element);

    return properties as IEditorProperties;
}

export {
    mergeProperties,
}