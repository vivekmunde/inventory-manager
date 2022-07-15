import { TCategory, TInventoryItem } from '../types';

export type TState = {
  categories: TCategory[];
  inventoryItems: TInventoryItem[];
}

export type TAction = {
  type: 'ACTION';
  payload: TState;
};
