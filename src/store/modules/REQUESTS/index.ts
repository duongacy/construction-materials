import type { TRequest } from '@/types/request';

export type RequestState = {
  requests: TRequest[];
};
export const REQUESTS = {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  actions: {
    async addAction(context: any, request: TRequest) {
      const response = await fetch(
        `https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${request.coachId}/${request.id}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(request),
        },
      );
      const responseJson = await response.json();
      if (!response.ok) {
        const error = new Error(responseJson?.message || 'Somethings went wrong');
        throw error;
      }
      context.commit({ type: 'addMutation', request });
    },
    async loadAllAction(context: any) {
      const token = context.rootGetters['AUTHEN/token'];
      const results: TRequest[] = [];
      const response = await fetch(
        `https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/requests.json?auth=${token}`,
      );
      const responseJson = await response.json();
      if (!response.ok) {
        const error = new Error(responseJson?.error || 'Something went wrong');
        throw error;
      }
      for (const coachId in responseJson) {
        const requestsJson = responseJson[coachId];
        for (const requestId in requestsJson) {
          results.push(requestsJson[requestId]);
        }
      }
      context.commit({ type: 'loadAllMutation', payload: results });
    },
  },
  mutations: {
    addMutation(state: RequestState, action: { payload: TRequest }) {
      state.requests.push(action.payload);
    },
    loadAllMutation(state: RequestState, action: { payload: TRequest[] }) {
      state.requests = action.payload;
    },
  },
};
