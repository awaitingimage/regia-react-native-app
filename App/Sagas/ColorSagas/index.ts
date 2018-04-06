import { Action, AnyAction } from "redux";
import { SagaIterator } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { Color, Colors } from "../../Lib/Colors";
import { ColorActions } from "../../Reducers/ColorReducers";
import { getLocalColorData } from "../../Services/RegiaApi";

export function* fetchColors(action: AnyAction): SagaIterator {
    let data: Colors | undefined;
    try {
        data = getLocalColorData();
    } catch (err) {
        // tslint:disable-next-line
        console.warn(err);
    }
    if (data) {
        yield put(ColorActions.successFetchingColors(data));
    } else {
        yield put(ColorActions.failureFechingColors());
    }
  }
