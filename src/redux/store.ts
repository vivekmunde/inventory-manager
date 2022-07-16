import { createStore } from 'redux';

// import data from '../db/data.json';
import reducer from './reducer';
import { TState } from './types';

const PERSISTENT_STATE = 'PERSISTENT_STATE';

export function getDefaultState(): TState {
  // return data as TState;
  return {
    categories: [],
    inventoryItems: [],
  };
}

function saveToLocalStorage(state: TState) {
  try {
    const stateToPersist = state;
    const serializedState = JSON.stringify(stateToPersist);
    localStorage.setItem(PERSISTENT_STATE, serializedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem(PERSISTENT_STATE);
    if (serializedState === null) {
      return undefined;
    }
    const localStorageState: TState = JSON.parse(serializedState);
    return {
      ...getDefaultState(),
      ...localStorageState,
    };
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const getInitialState = (): TState => loadFromLocalStorage() ?? getDefaultState();

const store = createStore(reducer, getInitialState());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
