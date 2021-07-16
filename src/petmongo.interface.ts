import { ObjectId } from 'mongoose';
import IPet from './pet.interface';

interface IPetDocument extends IPet {
  _id?: ObjectId;
  __v?: number;
}

export default IPetDocument;
