import App from './app';
import config from './config';
import PetController from './pets/controller';

const app = new App(config.PORT, [new PetController()]);

app.listen();
