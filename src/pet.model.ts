import { Document, Schema, model } from 'mongoose';
import IPet from './pet.interface';

const options = {
  toJSON: {
    transform(doc: Document, obj: Document) {
      delete obj.__v;
      delete obj._id;
      return obj;
    },
  },
};

const petSchema = new Schema<IPet>(
  {
    id: { type: Number, required: true },
    category: { type: Number, required: true },
    name: { type: String, required: true },
    status: String,
  },
  options,
);

const PetModel = model<IPet>('Pet', petSchema);

export default PetModel;
