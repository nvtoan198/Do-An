import { combineReducers } from "redux";
import createStore from "./CreateStore";
import rootSaga from "Sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { reducer as AuthReducer } from "Reducers/AuthReducer";
import { reducer as MenuReducer } from "Reducers/MenuReducer";
import { reducer as ModelFieldReducer } from "Reducers/ModelFieldReducer";
import { reducer as OperatorReducer } from "Reducers/OperatorReducer";
import { reducer as UploadReducer } from "Reducers/UploadReducers";
import { reducer as LibraryReducer } from "Reducers/LibraryReducers";
import ImmutablePersistenceTransform from "Services/ImmutablePersistenceTransform";

export const reducers = combineReducers({
  auth: AuthReducer,
  menu: MenuReducer,
  modelField: ModelFieldReducer,
  operator: OperatorReducer,
  upload: UploadReducer,
  library: LibraryReducer
});

export default () => {
  const rootReducer = persistReducer(
    {
      key: "root",
      storage,
      whitelist: [""],
      transforms: [ImmutablePersistenceTransform]
    },
    reducers
  );
  let { store, sagasManager, sagaMiddleware } = createStore(
    rootReducer,
    rootSaga
  );
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);
      const newYieldedSagas = require("../Sagas").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }
  let persistor = persistStore(store);
  return { store, persistor };
};
