import type { GetterTree } from 'vuex';
import type { ProfileState } from '.';
import type { Profile } from './types';

type RootState = any;
type ExampleState = any;

export type Getters = {
  profile(state: ExampleState): Profile | undefined;
};

export const profileGetters: GetterTree<ExampleState, RootState> & Getters = {
  profile(state: ProfileState) {
    return state.profile;
  },
};
