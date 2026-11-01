export * from './user.entity';
export * from './role.entity';
export * from './post.entity'; // dang ki entity Post de su dung trong TypeOrmModule.forFeature() trong PostModule.
export * from './task.entity';

const entities = [__dirname + '/*.entity{.ts,.js}'];
export default entities;
