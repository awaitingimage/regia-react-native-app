/// <reference types="@types/webpack-env" />
import { combineReducers } from "redux";
import root from "../Sagas";
import { ColorReducer, ColorState } from "./ColorReducers";
import configureStore from "./CreateStore";
import { EventReducer, EventState } from "./EventReducers";
import { GithubReducer, ImmutableGithubState } from "./GithubReducers";
import { NavigationReducer, NavigationState } from "./NavigationReducers";
import { StartUpReducer, StartUpState } from "./StartupReducers";

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: NavigationReducer,
  github: GithubReducer,
  event: EventReducer,
  setup: StartUpReducer,
  color: ColorReducer,
});

export interface RootState {
  github: ImmutableGithubState;
  nav: NavigationState;
  event: EventState;
  setup: StartUpState;
  color: ColorState;
}

export default () => {
  // tslint:disable-next-line:prefer-const
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, root);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require("../Sagas").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
