import { type InjectionKey } from 'vue';
import { Store, createStore } from 'vuex';

type AuthenState = any;
export type TState = {
  coachId: string;
};

export const key: InjectionKey<Store<TState>> = Symbol();

export const store = createStore({
  modules: {},
});
