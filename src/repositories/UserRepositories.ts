import { User } from  "../models/user";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export { UserRepository }