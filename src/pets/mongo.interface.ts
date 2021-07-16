import { ObjectId } from 'mongoose';

import Pet from './interface';

interface PetDocument extends Pet {
  _id?: ObjectId;
  __v?: number;
}

export default PetDocument;
