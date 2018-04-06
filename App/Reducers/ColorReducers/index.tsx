import { Action, AnyAction, Reducer } from "redux";
import * as SI from "seamless-immutable";
import { createAction, PayloadAction } from "ts-redux-actions";
import { Color, Colors } from "../../Lib/Colors";
import { mapReducers, ReducerMap } from "../../Lib/ReduxHelpers";

interface ColorSuccessParams {colors: Color[]; }

const actionCreators = {
    fetchColors: createAction("COLORS_FETCH"),
    successFetchingColors: createAction("COLORS_FETCH_SUCCESS", (payload: Colors) => ({type: "COLORS_FETCH_SUCCESS", payload})),
    failureFechingColors: createAction("COLORS_FETCH_FAILURE"),
    rehydrate: createAction("persist/REHYDRATE", (payload: any) => ({type: "persist/REHYDRATE", payload})),
};

export const ColorActions = actionCreators;

export interface ColorState {
    Colors: Color[];
    fetching?: boolean;
    error?: boolean | null;
  }

export type ImmutableColorState = SI.ImmutableObject<ColorState>;

export const INITIAL_STATE: ImmutableColorState = SI.from({
    fetching: false,
    error: null,
    Colors: [],
});

export const fetchColors: Reducer<ImmutableColorState> =
    (state: ImmutableColorState) => state.merge({ fetching: true });

export const successFetchingColors: Reducer<ImmutableColorState> =
    (state: ImmutableColorState, action: AnyAction & {payload?: ColorSuccessParams}) => {
        if (!action.payload) {
            return failureFechingColors(state, action);
        }
        return state.merge({ fetching: false, Colors: action.payload.colors });
    };

export const rehydrate: Reducer<ImmutableColorState> =
(state: ImmutableColorState, action: AnyAction & {payload?: any}) => {
    if (typeof action.payload.Color !== "undefined") {
        return state.merge({ fetching: false, Colors: action.payload.Color.Colors, error: false });
    }
    return failureFechingColors(state, action);
};

export const failureFechingColors: Reducer<ImmutableColorState> =
    (state: ImmutableColorState) => state.merge({ fetching: false, error: true });

const reducerMap: ReducerMap<typeof actionCreators, ImmutableColorState> = {
    fetchColors,
    successFetchingColors,
    failureFechingColors,
    rehydrate,
  };

export const ColorReducer = mapReducers(INITIAL_STATE, reducerMap, actionCreators);
export default ColorReducer;
