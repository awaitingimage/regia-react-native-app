import { Action, AnyAction, Reducer } from "redux";
import * as SI from "seamless-immutable";
import { createAction, PayloadAction } from "ts-redux-actions";
import { Events, Event } from "../../Lib/Events";
import { mapReducers, ReducerMap } from "../../Lib/ReduxHelpers";

interface EventSuccessParams {diary: Event[]}

const actionCreators = {
    fetchEvents: createAction("EVENTS_FETCH"),
    successFetchingEvents: createAction("EVENTS_FETCH_SUCCESS", (payload: Events) => ({type: "EVENTS_FETCH_SUCCESS", payload})),
    failureFechingEvents: createAction("EVENTS_FETCH_FAILURE"),
    rehydrate: createAction("persist/REHYDRATE", (payload: any) => ({type: "persist/REHYDRATE", payload}))
}

export const EventActions = actionCreators;

export interface EventState {
    events: Event[];
    fetching?: boolean;
    error?: boolean | null;
  }

export type ImmutableEventState = SI.ImmutableObject<EventState>;

export const INITIAL_STATE: ImmutableEventState = SI.from({
    fetching: false,
    error: null,
    events: []
})

export const fetchEvents: Reducer<ImmutableEventState> = 
    (state: ImmutableEventState) => state.merge({ fetching: true });

export const successFetchingEvents: Reducer<ImmutableEventState> = 
    (state: ImmutableEventState, action: AnyAction & {payload?: EventSuccessParams}) => {
        if (!action.payload) {
            return failureFechingEvents(state, action);
        }
        return state.merge({ fetching: false, events: action.payload.diary });
    };

export const rehydrate: Reducer<ImmutableEventState> = 
(state: ImmutableEventState, action: AnyAction & {payload?: any}) => {
    if (!action.payload) {
        return failureFechingEvents(state, action);
    }
    return state.merge({ fetching: false, events: action.payload.event.events, error: false });
};
    

export const failureFechingEvents: Reducer<ImmutableEventState> = 
    (state: ImmutableEventState) => state.merge({ fetching: false, error: true });


const reducerMap: ReducerMap<typeof actionCreators, ImmutableEventState> = {
    fetchEvents,
    successFetchingEvents,
    failureFechingEvents,
    rehydrate
  };

export const EventReducer = mapReducers(INITIAL_STATE, reducerMap, actionCreators);
export default EventReducer;