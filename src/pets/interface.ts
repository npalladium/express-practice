enum PetAnimals {
  Dog = 1,
  Cat,
  GoldFish,
}

interface Pet {
  id: number;
  name: string;
  category: PetAnimals;
  status?: 'available' | 'unavailable';
}

export default Pet;
