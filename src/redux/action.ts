import { TState } from './types';

const action = (payload: TState) => ({
  type: 'ACTION',
  payload,
});

export default action;
