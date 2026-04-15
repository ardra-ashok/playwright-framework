import * as dotenv from 'dotenv';


dotenv.config();
export type Env = 'qa' | 'staging';

export const CONFIG: {
  env: Env;
  baseUrl: Record<Env, string>;
} = {
  env: (process.env.ENV as Env) || 'qa',
  baseUrl: {
    qa: 'https://practicesoftwaretesting.com/',
    staging: 'https://staging.example.com',
  },
};