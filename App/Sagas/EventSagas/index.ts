import { Action, AnyAction } from "redux";
import { buffers, END, eventChannel, SagaIterator } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { Event, Events } from "../../Lib/Events";
import { EventActions } from "../../Reducers/EventReducers";
import { fetchEventsAPI, getLocalData } from "../../Services/RegiaApi";

export function* fetchEvents(action: AnyAction): SagaIterator {
    let data: Events | undefined;
    try {
        data = yield call(fetchEventsAPI);
    } catch (err) {
        console.warn(err);
    }
    if (data) {
        yield put(EventActions.successFetchingEvents(data));
    } else {
        yield put(EventActions.failureFechingEvents());
    }
  }
