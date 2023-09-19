import 'dotenv/config';
import { connect } from 'mongoose';

const createConnection = async (): Promise<void> => {
  const DB_URI = <string> process.env.DB_URI;
  await connect(DB_URI);
};

export default createConnection;
