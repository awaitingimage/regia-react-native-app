import { all, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import DebugConfig from "../Config/DebugConfig";
import FixtureAPI from "../Services/FixtureApi";
import {createAPI, GithubApi} from "../Services/GithubApi";

/* ------------- Types ------------- */

import { GithubActions } from "../Reducers/GithubReducers";
import { StartUpActions } from "../Reducers/StartupReducers";
import { EventActions } from "../Reducers/EventReducers";

/* ------------- Sagas ------------- */

import { getUserAvatar } from "./GithubSagas";
import { startup } from "./StartupSagas";
import { fetchEvents } from "./EventSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : createAPI();

/* ------------- Connect Types To Sagas ------------- */

export default function * root() {
  yield all([
    // some sagas only receive an action
    takeLatest(getType(StartUpActions.startup), startup),

    takeLatest(getType(EventActions.fetchEvents), fetchEvents)
  ]);
}
