import { Action } from '@ngrx/store';
import { Tutorial } from '../model/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Github API',
  url: 'https://api.github.com/users/ma-9'
};

export const reducer = (
  state: [Tutorial] = [initialState],
  action: TutorialActions.Actions
) => {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      let newState;
      newState = state.filter((data, index) => index !== action.payload);
      return newState;

    default:
      return state;
  }
};
