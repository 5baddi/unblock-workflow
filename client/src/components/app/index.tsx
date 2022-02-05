import * as React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import Editor from "../editor";

class App extends React.Component
{
    render()
    {
        return (
            <Provider store={ store }>
                <Editor/>
            </Provider>
        );
    }
}

export default App;