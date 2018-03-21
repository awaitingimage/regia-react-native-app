/// <reference types="@types/jest" />
import { put, select } from "redux-saga/effects";
import { EventActions } from "../../Reducers/EventReducers";
import { StartUpActions } from "../../Reducers/StartupReducers";
import { startup } from "./index";

const stepper = (fn) => (mock) => fn.next(mock).value;

test("watches for the right action", () => {
  const step = stepper(startup());
  expect(step()).toEqual(put(EventActions.fetchEvents()));
});
