import { Document, Schema, model } from 'mongoose';
import Pet from './interface';

const options = {
  toJSON: {
    transform(doc: Document, obj: Document) {
      delete obj.__v;
      delete obj._id;
      return obj;
    },
  },
};

const petSchema = new Schema<Pet>(
  {
    id: { type: Number, required: true, unique: true, dropDups: true },
    category: { type: Number, required: true },
    name: { type: String, required: true },
    status: String,
  },
  options,
);

const PetModel = model<Pet>('Pet', petSchema);

export default PetModel;
