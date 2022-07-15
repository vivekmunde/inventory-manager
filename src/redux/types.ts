import { TCategory } from '../types';

export type TState = {
  categories: TCategory[];
}

export type TAction = {
  type: 'ACTION';
  payload: TState;
};
