import type { TCoach } from '@/types/coach';

export type CoachesState = {
  coaches: TCoach[];
  selectedCoach: TCoach | null;
};
export const COACHES = {
  namespaced: true,
  state() {
    return {
      coaches: [],
      selectedCoach: null,
    } as CoachesState;
  },
  actions: {
    async addAction(context: any, payload: TCoach) {
      const response = await fetch(
        `https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${payload.id}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(payload),
        },
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.message || 'Something went wrong');
        throw error;
      }
      context.commit({ type: 'addMutation', payload });
    },
    async loadAllAction(context: any) {
      const convertedData: TCoach[] = [];
      const originData = await fetch(
        'https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json',
      );
      const jsonData = await originData.json();
      if (!originData.ok) {
        const error = new Error(jsonData.message || 'Something went wrong');
        throw error;
      }
      for (const key in jsonData) {
        convertedData.push(jsonData[key]);
      }
      context.commit({ type: 'loadAllMutation', payload: convertedData });
    },
    async loadByIdAction(context: any, coachId: string) {
      const response = await fetch(
        `https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${coachId}.json`,
      );
      const responseJson = await response.json();
      if (!response.ok) {
        const error = new Error(responseJson?.message || 'Something went wrong');
        throw error;
      }
      context.commit({ type: 'loadByIdMutation', payload: responseJson as TCoach });
    },
    async deleteAction(context: any, id: string) {
      const originData = await fetch(
        `https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${id}.json`,
        {
          method: 'DELETE',
        },
      );
      if (!originData.ok) {
        const error = new Error('Something went wrong');
        throw error;
      }
      context.commit({ type: 'deleteMutation', payload: id });
    },
  },
  mutations: {
    addMutation(state: CoachesState, action: { payload: TCoach }) {
      state.coaches.push(action.payload);
    },
    loadAllMutation(state: CoachesState, action: { payload: TCoach[] }) {
      state.coaches = action.payload;
    },
    loadByIdMutation(state: CoachesState, action: { payload: TCoach }) {
      state.selectedCoach = action.payload;
    },
    deleteMutation(state: CoachesState, action: { payload: string }) {
      state.coaches = state.coaches.filter((item) => item.id !== action.payload);
    },
  },
};
