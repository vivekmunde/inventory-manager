import { TAction, TState } from './types';

const reducer = (state: TState | undefined, action: TAction) => ({
    ...(state ?? {}),
    ...action?.payload,
});

export default reducer;
