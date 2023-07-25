import { DataSource } from 'typeorm';
import { CoffeeRefactor1690208342338 } from './src/migrations/1690208342338-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { Flavor1690211998445 } from './src/migrations/1690211998445-Flavor';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [],
});
