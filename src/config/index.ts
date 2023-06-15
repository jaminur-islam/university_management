import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.NODE_ENV
    ? process.env.DATABASE_URL
    : process.env.DATABASE_URL_LOCAL,
  default_password: process.env.DEFAULT_PASSWORD,
  node_env: process.env.NODE_ENV,
};
