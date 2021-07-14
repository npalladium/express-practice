import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URL, PORT } from './config';
import { PetAnimals, IPet, PetModel } from './models';

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  PetModel.find()
    .lean()
    .exec(function (err, pets) {
      if (err) {
        return console.log(err);
      }
      return res.send(JSON.stringify(pets));
    });
});

app.post('/', (req, res) => {
  PetModel.create(req.body, function (err: any, pet: any) {
    if (err) {
      return console.log(err);
    }
    return res.send(JSON.stringify(pet));
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
