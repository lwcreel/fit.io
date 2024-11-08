import { ExerciseModel } from "./ExerciseModel";

export type EntryModel = {
  id: number;
  exercises: string;
  notes: string;
  createdDate: Date;
  updatedDate: Date;
};
