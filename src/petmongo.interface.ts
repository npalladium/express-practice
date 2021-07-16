import { ObjectId } from 'mongoose';

enum PetAnimals {
  Dog = 1,
  Cat,
  GoldFish,
}

interface IPetDocument {
  _id?: ObjectId;
  __v?: number;
  id: number;
  name: string;
  category: PetAnimals;
  status?: 'available' | 'unavailable';
}

export default IPetDocument;
