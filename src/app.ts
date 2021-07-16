import fs from 'fs';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import Controller from './controller.interface';

class App {
  public application: express.Application;

  public port: number;

  constructor(port: number, controllers: Controller[]) {
    this.application = express();
    this.port = port;
    this.initializeDbConnection();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeDbConnection(): void {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB Connection error'));
  }

  private initializeMiddlewares(): void {
    const requestLogStream = fs.createWriteStream(path.join(__dirname, 'requests.log'), {
      flags: 'a',
    });
    const options = { stream: requestLogStream };
    this.application.use(morgan('tiny', options));
    this.application.use(express.json());
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach(controller => {
      this.application.use(config.BASE_URL, controller.router);
    });
  }

  public listen(): void {
    this.application.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
