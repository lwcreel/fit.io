import { ExerciseModel } from "../ExerciseModel";

export type EntryModel = {
  id: number;
  exercises: ExerciseModel[];
  notes: string;
  createdDate: Date;
  updatedDate: Date;
};
