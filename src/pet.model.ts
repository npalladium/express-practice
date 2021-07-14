import { Document, Schema, model } from 'mongoose';
import IPet from './pet.interface';

const petSchema = new Schema<IPet>(
  {
    id: { type: Number, required: true },
    category: { type: Number, required: true },
    name: { type: String, required: true },
    status: String,
  },
);

const PetModel = model<IPet>('Pet', petSchema);

export default PetModel;
