import { Document, Schema, model } from 'mongoose';

export enum PetAnimals {
  Dog = 1,
  Cat,
  GoldFish,
}

export interface IPet {
  id: number;
  name: string;
  category: PetAnimals;
  status?: 'available' | 'unavailable';
}

const petSchema = new Schema<IPet>(
  {
    id: { type: Number, required: true },
    category: { type: Number, required: true },
    name: { type: String, required: true },
    status: String,
  },
);

export const PetModel = model<IPet>('Pet', petSchema);
