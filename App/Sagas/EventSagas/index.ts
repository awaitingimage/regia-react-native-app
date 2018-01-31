import { Action, AnyAction } from "redux";
import { buffers, END, eventChannel, SagaIterator } from "redux-saga";
import { Events, Event } from "../../Lib/Events";
import { call, put, take } from "redux-saga/effects";
import { EventActions } from "../../Reducers/EventReducers";
import { asd } from "../../Services/RegiaApi";



export function* fetchEvents(action: AnyAction): SagaIterator {
    let data: Events | undefined;
    try {
      data = yield call(asd);
      console.log(data);
    } catch (err) {
      console.warn(err);
    }
    if (data) {
      yield put(EventActions.successFetchingEvents(data));
    } else {
      yield put(EventActions.failureFechingEvents());
    }
  }