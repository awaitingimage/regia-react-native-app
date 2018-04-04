import { GoogleAnalyticsSettings, GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { Action, AnyAction, Reducer } from "redux";
import * as SI from "seamless-immutable";
import { createAction, PayloadAction } from "ts-redux-actions";
import PrivateConfig from "../../Config/PrivateConfig";
import { mapReducers, ReducerMap } from "../../Lib/ReduxHelpers";

/* ------------- Types and Action Creators ------------- */

interface GAOptOutParams {checked: boolean; }

const actions = {
  startup: createAction("startup"),
  setTracker: createAction("setTracker"),
  setGAOptOut: createAction("setGAOptOut", (params: GAOptOutParams) =>
  ({type: "setGAOptOut", payload: params})),
  rehydrate: createAction("persist/REHYDRATE", (payload: any) => ({type: "persist/REHYDRATE", payload})),
};

export const StartUpActions = actions;

export interface StartUpState {
  gaTracker: GoogleAnalyticsTracker;
  gaOptOut: boolean;
}

export type ImmutableStartUpState = SI.ImmutableObject<StartUpState>;

export const INITIAL_STATE: ImmutableStartUpState = SI.from({
  gaTracker: null,
  gaOptOut: false,
});

export const rehydrate: Reducer<ImmutableStartUpState> =
(state: ImmutableStartUpState, action: AnyAction & {payload?: any}) => {
    if (typeof action.payload.setup !== "undefined") {
        GoogleAnalyticsSettings.setOptOut(action.payload.setup.gaOptOut);
        return state.merge({ gaTracker: action.payload.setup.gaTracker, gaOptOut: action.payload.setup.gaOptOut });
    }
    return state;
};

export const setTracker: Reducer<ImmutableStartUpState> =
  (state: ImmutableStartUpState) =>
  state.merge({ gaTracker:  new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber) });

export const setGAOptOut: Reducer<ImmutableStartUpState> =
  (state: ImmutableStartUpState, { payload }: any) => {
    GoogleAnalyticsSettings.setOptOut(payload.checked);
    return state.merge({ gaOptOut: payload.checked });
  };

export const startup: Reducer<ImmutableStartUpState> =
  (state: ImmutableStartUpState) => state;

const reducerMap: ReducerMap<typeof actions, ImmutableStartUpState> = {
  startup,
  setTracker,
  setGAOptOut,
  rehydrate,
};

export const StartUpReducer = mapReducers(INITIAL_STATE, reducerMap, actions);
