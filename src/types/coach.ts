export type TArea = 'frontend' | 'backend' | 'fullstack';
export type TCoach = {
  id: string;
  firstName: string;
  lastName: string;
  areas: TArea[];
  description: string;
  hourlyRate: number;
};
export type TCoachAdd = Omit<TCoach, 'id'>;
