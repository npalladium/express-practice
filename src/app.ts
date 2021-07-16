import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import IPet from './pet.interface';
import PetModel from './pet.model';
import config from './config';
import IController from './controller.interface';

class App {
  public application: express.Application;
  public port: Number;

  constructor(port: Number, controllers: IController[]) {
    this.application = express();
    this.port = port;
    this.initializeDbConnection();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeDbConnection(): void {
    mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB Connection error'));
  }
  private initializeMiddlewares() {
    this.application.use(morgan('tiny'));
    this.application.use(express.json());
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach(controller => {
      this.application.use('/', controller.router);
    });
  }

  public listen() {
    this.application.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
