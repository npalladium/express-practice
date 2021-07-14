import express from 'express';
import IPet from './pet.interface';
import PetModel from './pet.model';
import { Document, CallbackError } from 'mongoose';

class PetsController {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPets);
    this.router.post(this.path, this.addAPet);
  }

  getAllPets = (req: express.Request, res: express.Response) => {
    PetModel.find()
      .lean()
      .exec(function (err: CallbackError, pets: IPet[]) {
        if (err) {
          console.log(err);
          return res.status(500).send({ error: 'Query failed' });
        }
        return res.send(JSON.stringify(pets));
      });
  }

  addAPet = (req: express.Request, res: express.Response) => {
    PetModel.create(req.body, function (err: CallbackError, pet: Document) {
      if (err) {
        console.log(err);
        return res.status(500).send({ error: 'Failed insert' });
      }
      return res.status(201).send(JSON.stringify(pet));
    });
  }
}

export default PetsController;
