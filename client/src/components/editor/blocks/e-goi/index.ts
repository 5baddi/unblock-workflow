import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "e-goi";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAApVBMVEX///8ArtoAqdgAptf9///8/v8BrtohsNsArNkksNscr9oRr9oAqtkesNsJrtoVr9oZr9v5/f4ApNb2/P7a7vfi8vnd8PgosdxywuPt9/vJ5vO73/B7xeRMuN7C4vGz3O6Z0OiAx+VfveBTut/x+vyq1+yk1Ot2xONrwOLm9PrW6/XP6PSOzOeHyebo9fqu2u2e0uqSzedavOBBtt1kv+Ewstw5td1Pz0fuAAADCUlEQVRIx+3V23aqMBAG4DAJECCE88Eqnq3aWnuw7fs/2p5AJSLddtd9679Wb9L5mGSMQm655bqwrxD2O2ay79d/prVkJNrvB4PlMolUTLWDf6OD4UtEMh76xcfnoaqqxdv8fVOOysnl3ur56c6PPyOSi4CrCAzUiUeX2xKSz4BKvkgQu5aU0qsTBGFYwOiyTaYArh3ww5Kk4BqdhFBiifkXy0h6oK5vGJJ/Ntjq4g1rB9q3YxCFgUJyZ0AewD/HbywaZ0iZ2bfDOGia4d8Wsd3FgaiiyIDNZK/an533jtpeU255RkYe6Rn2xCExFwKo8ZQ2m9c249Jrm/BcPUvDGnN/ySphO5LCLO82L+FYbBmuSPtYcmPAFuAZ0vZBvCStNnGXDqojhpSMe1gae4JYlfluXOVHzcgMh9t29uGhjy2PbxVuJlqAuENd20HILY1teCTDHg5ETt4gODaQtNHm2Qdj43oPq8M0uNEh55nSZluq8aSHffpA5oj1/sp6XljqdPCwXdFx8JHviFvt0Eek/c6Tb/GYbCA8LdsRhrh7nxz6TJ57uDjHAcxNgnxrSLQar8iqj+MhKcE9vbBVUp8aJ3EBt/tZn+JALCJlyf1prU3v9YLGuDo6xS6MSI1zCC1L4yliPUK9ihexsxWUKiNc1mWv5KWHfRzuEz25xZ6xJaxuneo7hmVPHaxXd+2qhQOcKtucOv44apfOyLSH1RFfqX20DnwsvzAjbIS64S6sscw/wyGuKlzPRhbA2y8l6mQdO/4XLsnuFNerAbzjfhxLSs93eFxlrVUbZy8AoRN6VggbHE3nd1t6gcPfyDQuAskFpcUq0bbuTR7WggK3bJh/YSt0bcex3YALgNhg95QL7i124yV2672p8lV5MAyYs5nCMgSgGOB+9T6bPpvJNk+zQfTdb3/zsGSfZYP6LnkS5uvX1eQOQcJ+fIPrl9EawsCjw7P/MWZefFc3BaSEgsO47qKC4BfZCC4e1cmuCCvjMMUZXJe5kV1pGYlmW7RXxkzQXh/2X/aWW3T+AFn9Nn7mvMLdAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "E-goi";
        }
    })
    export class Egoi extends NodeBlock
    {
    
    }