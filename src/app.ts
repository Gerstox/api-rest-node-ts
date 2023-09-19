import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from './config/mongo.config';

const PORT = process.env.PORT || 3001;
const app = express();
// app.use(cors({origin: ['http://localhost:4200']}));
app.use(cors());
app.use(express.json());
app.use(router);
db()
  .then(() => console.log('Connection ready.'))
  .catch(() => console.log('Ha ocurrido un error al intentar establecer la conexion con la base de datos.'))
app.listen(PORT, () => console.log(`running app on port ${PORT}`));
