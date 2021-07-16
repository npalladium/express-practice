import { Document, Schema, model } from 'mongoose';

import Supplies from './interface';

const options = {
  toJSON: {
    transform(doc: Document, obj: Document) {
      delete obj.__v;
      delete obj._id;
      return obj;
    },
  },
};

const petSchema = new Schema<Supplies>(
  {
    id: { type: Number, required: true, unique: true, dropDups: true },
    name: { type: String, required: true },
    description: String,
  },
  options,
);

const SuppliesModel = model<Supplies>('Supplies', petSchema);

export default SuppliesModel;
