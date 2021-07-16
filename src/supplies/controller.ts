import express from 'express';
import { Document, CallbackError } from 'mongoose';

import config from '../config';
import SuppliesModel from './model';
import SuppliesDocument from './mongo.interface';

class SuppliesController {
  public path = config.SUPPLIES_URL;

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.getAllSupplies);
    this.router.post(this.path, this.addSupplies);
  }

  getAllSupplies = (req: express.Request, res: express.Response): void => {
    SuppliesModel.find()
      .lean()
      .exec((err: CallbackError, pets: SuppliesDocument[]) => {
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

  addSupplies = (req: express.Request, res: express.Response): void => {
    SuppliesModel.create(req.body, (err: CallbackError, pet: Document) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ error: 'Failed insert' });
      }
      return res.status(201).send(JSON.stringify(pet));
    });
  };
}

export default SuppliesController;
