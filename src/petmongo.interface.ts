enum PetAnimals {
  Dog = 1,
  Cat,
  GoldFish,
}

interface IPetDocument {
  _id?: any;
  __v?: Number;
  id: number;
  name: string;
  category: PetAnimals;
  status?: 'available' | 'unavailable';
}

export default IPetDocument;
