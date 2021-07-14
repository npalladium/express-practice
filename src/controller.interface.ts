import express from 'express';

interface IController {
  path: String;
  router: express.Router;
  initializeRoutes(): void;
}

export default IController;
