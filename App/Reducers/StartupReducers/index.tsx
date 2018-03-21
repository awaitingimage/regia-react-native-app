import { Action, AnyAction, Reducer } from "redux";
import * as SI from "seamless-immutable";
import { createAction, PayloadAction } from "ts-redux-actions";
import { mapReducers, ReducerMap } from "../../Lib/ReduxHelpers";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import PrivateConfig from "../../Config/PrivateConfig";

/* ------------- Types and Action Creators ------------- */

const actions = {
  startup: createAction("startup"),
  setTracker: createAction("setTracker")
};

export const StartUpActions = actions;

export interface StartUpState {
  gaTracker: GoogleAnalyticsTracker
}

export type ImmutableStartUpState = SI.ImmutableObject<StartUpState>;

export const INITIAL_STATE: ImmutableStartUpState = SI.from({
  gaTracker: null
})

export const setTracker: Reducer<ImmutableStartUpState> = 
  (state: ImmutableStartUpState) => state.merge({ gaTracker:  new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber) });

export const startup: Reducer<ImmutableStartUpState> = 
  (state: ImmutableStartUpState) => state;


const reducerMap: ReducerMap<typeof actions, ImmutableStartUpState> = {
  startup,
  setTracker
};

export const StartUpReducer = mapReducers(INITIAL_STATE, reducerMap, actions);
