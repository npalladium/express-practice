import express from 'express';

interface Controller {
  path: string;
  router: express.Router;
  initializeRoutes(): void;
}

export default Controller;
