import express from 'express';
import path from 'path';

import { PUBLIC_PATH } from './utils/paths';
import allowCors from './middlewares/cors';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(allowCors);
    this.server.use(express.static('./public'));
    this.server.use('/public', express.static('./public'));
  }

  routes() {
    this.server.get('/home', (req, res) => {
      res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
    });

    this.server.get('/victor', (req, res) => {
      res.sendFile(path.resolve(PUBLIC_PATH, 'index_victor.html'));
    });

    this.server.get('/', (req, res) => {
      res.redirect('/home');
    });

    // this.server.use('/api/v1/SolarFlareTicket', solarFlareTicketRoutes);
  }
}

export default new App().server;
