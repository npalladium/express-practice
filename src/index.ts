import App from './app';
import config from './config';
import PetController from './pet.controller';

const app = new App(config.PORT, [new PetController()]);

app.listen();
