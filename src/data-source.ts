import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "192.168.1.100",
    username: "sa",
    password: "admin123",
    database: "dbtest",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
    options: {"trustServerCertificate": true} 
})
