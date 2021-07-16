import express from 'express';
import { Document, CallbackError } from 'mongoose';
import PetDocument from './petmongo.interface';
import PetModel from './pet.model';

class PetsController {
  public path = '/';

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.getAllPets);
    this.router.post(this.path, this.addAPet);
  }

  getAllPets = (req: express.Request, res: express.Response): void => {
    PetModel.find()
      .lean()
      .exec((err: CallbackError, pets: PetDocument[]) => {
        if (err) {
          console.log(err);
          return res.status(500).send({ error: 'Query failed' });
        }
        for (const pet of pets) {
          delete pet.__v;
          delete pet._id;
        }
        return res.send(JSON.stringify(pets));
      });
  };

  addAPet = (req: express.Request, res: express.Response): void => {
    PetModel.create(req.body, (err: CallbackError, pet: Document) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ error: 'Failed insert' });
      }
      return res.status(201).send(JSON.stringify(pet));
    });
  };
}

export default PetsController;
