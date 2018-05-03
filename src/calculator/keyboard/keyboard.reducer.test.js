import allReducers from '../../store/root.reducer';
import { INITIAL_STATE } from '../../modules/constants/ui.constants'

it('reducers', () => {
  let state;
  state = allReducers(undefined, {});
  // expect(state).toDeepEqual(INITIAL_STATE);
});
