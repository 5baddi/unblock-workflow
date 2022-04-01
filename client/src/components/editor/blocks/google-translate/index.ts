import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "googleTranslate";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACFlBMVEUAAADd3d3e3t5JifVSkPVVkPVQj/Xi4uJPjfZMjPXf399QivaLkslYsu5UYr5NjfVNmfdPivZKk/VsnOVLi/Xd3d1qdcLe3t5TkPRVkfVag99yfMdueMLo6OjO1uLq5+Pk5OTU1NRKifba2tpJivZLi/Xc3NxMjPVTkPVSj/VPjvVOjfVKivTe3d3f3t5JivTf39/i4eHj4uLb29tVkfXh4OBGiPZJifX69u/j4+Pl4+JEh/Zdd4dJjfn99+//+e7j4d3l5eROctZIV7pHifa5z/G9w8dmfo1ChvWKsvPY4fD08u/IzM+1vsJGVbpJVLefrLNyiJVuhZJhe4lZdINdlvVuofRlm/SUuPPE1fHj6PDW4PD39O/x8O/q7O/R1Ne4v8Sxur9bdYVGivh4pvRyo/OdvvK+0vHQ3PDs6ebO1eLm49/m4ty8wsartbxDUrg/TriKmqR/kZ1sg5FHivpalfU9g/V9qvRimfSCrPOoxPJ1o+2duee/zOPn5eDX2drLz9HCx8uGj8nAxceps7hIVLeXpq+SoauFl6GGlp1JivZSj/RQjvSFr/OsxvLZ4vDS3fDR3PDL2vBrnfBTju+MsOuUtOqHrOqpwelrmubp5uWyxeTFz+HW2d3L0dvU1tdXe9dIbtXV1dCpr9CztM9ThM6UnMyltMd5g8Y5SbZmirVXgLSSn6N7j5t4jJhfd4FWcYFcdH5U9/4yAAAAJXRSTlMA7e107e3tfeztfZVTCufgnlBIEfPx7ern5cyro4J/fn13aT4ne4RB0gAAAydJREFUSMft0VVXG0EYgOHSUsVL3W2zsJsJ2cBKkyVS4gGakODu7sUpUrzu7u7yDzszW0JpsmRzek5vynsxd8+Zb77ZsN5/VkLc/s24WNwWWIpinJyFSpNKR1HJivHmUJyUEBVOW4WpnYoxQqstFfc3eFuqQhwbipXPHRti0dxR4/QgpvcdOXps63I7cCfXxBTB8ySFo8nzExaL5TRMxzAMq4WBw/I4nU9rdF0pJniMuTsdLJK6X1aj0YDd4TAelqZK3JWCUNXciCx9sVilYZaxVsIb5TCdbhOMnqoqwVRWSEIM5zYDJjLegjBx1VhR2jBcXNJShC3N3e0AgMWYjYDJokrBRlgJnqN5mkTYegvAWLi0iNg6aiwrJCgK7g1+GMIE+dgMgKq6enJtDDfEN5tKeYoocrvLy903CgmaJA3jHUD7zFfg1UfC6lKTzUrxjUajscLjKeJJkuTG2vWWzAJxvtWiRzFh8TaIrTZTC0mTAy7XyGhF1TDCxOV3tbVd/f6+vJo8WO20Vha7hMohJ01yzkGbsRw+GJb96Zso+v3+Ooev3+EQF3RhMfrVrGtCWQNncBJNHqHJQKLqH8zY7fbOTnut74t92j6llcM0N+QRKm0lJTcrBHeWGllCndbWrtMzzMOawEKrTs8CGYz0SJnRBBNaijlsCcIw/vlrLgNAX12NDm5bDmNd2FRafr3ZRXOYItww+72X1XcFFjUqII9xvIGjaIOBQBbHX2pbquuacjhyWRXUYfF2Ugoj6ZRSO++/LHD4xFmdCgYiYUyDVu0ca63xi73QomSwjFVzWU97RdGXy0g64thBCsvIOPfxx6K3riBXujtGFmOy2kL8ZmlS7w1ALYsJWChFcberzYD1BvpnWIVYja2U4ZFZBRhvQOxkw+OkEIkpbvCeGa5ZO99XrQmPU3YFYZDWZ0vVDzwBUINMaBEO7dSJTX924IzUi+dtEEMuLUxZ8XNnUd1zr80qXDQ4ITE/Jycnv/vVxIrNhFhZh7qh7Xnb/ptVjuPhzT0XzGDFRoFTE/OxDVKMlXbww3uNJmijxPF7YjbGrGrv8Q3rrfdv+glmHSSwtlSRcgAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Google Translate";
        }
    })
    export class GoogleTranslate extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    