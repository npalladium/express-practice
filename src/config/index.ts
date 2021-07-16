import dotenv from 'dotenv';

dotenv.config({ path: process.env.PWD + '/.env' });

const config = {
  PORT: 8080,
  MONGO_URL: process.env.MONGO_URL!,
  BASE_URL: '/petstore',
  PETS_URL: '/pets',
  SUPPLIES_URL: '/supplies',
};

export default config;
