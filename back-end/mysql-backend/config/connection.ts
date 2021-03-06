import 'reflect-metadata';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

// Entities
import { _plumberEntity } from '../src/entities/plumbers.entity';
import { _scheduleEntity } from '../src/entities/schedules.entity';

let connection: MysqlConnectionOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'x[,>G>JQq2W{taNBl1:K',
    database: 'innogy2017',
    entities: [
        _plumberEntity,
        _scheduleEntity
    ],
    synchronize: true,
};

export default connection;