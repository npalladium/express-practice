import { ObjectId } from 'mongoose';

import Supplies from './interface';

interface SuppliesDocument extends Supplies {
  _id?: ObjectId;
  __v?: number;
}

export default SuppliesDocument;
