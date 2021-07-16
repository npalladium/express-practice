import App from './app';
import config from './config';
import PetController from './pets/controller';
import SuppliesController from './supplies/controller';

const app = new App(config.PORT, [new PetController(), new SuppliesController()]);

app.listen();
