import Reactotron from "reactotron-react-native";
import { applyMiddleware, compose, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sagaMiddlewareFactory, { Monitor, SagaIterator } from "redux-saga";
import Config from "../Config/DebugConfig";
import RehydrationServices from "../Services/RehydrationServices";
import ScreenTracking from "./ScreenTrackingMiddleware";

// creates the store
export default (rootReducer: Reducer<any>, rootSaga: () => SagaIterator) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Analytics Middleware ------------- */
  if (Config.useReactotron) {
    middleware.push(ScreenTracking);
  }
  /* ------------- Saga Middleware ------------- */

  let opts = {};
  if (Config.useReactotron) {
    const sagaMonitor: Monitor = Reactotron.createSagaMonitor();
    opts = { sagaMonitor };
  }
  const sagaMiddleware = sagaMiddlewareFactory(opts);
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? Reactotron.createStore : createStore;

  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createAppropriateStore(rootReducer, composeWithDevTools(...enhancers));
  RehydrationServices.updateReducers(store);

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};
