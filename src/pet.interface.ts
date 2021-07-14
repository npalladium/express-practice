enum PetAnimals {
  Dog = 1,
  Cat,
  GoldFish,
}

interface IPet {
  id: number;
  name: string;
  category: PetAnimals;
  status?: 'available' | 'unavailable';
}

export default IPet;
