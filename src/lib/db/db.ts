import { PRIVATE_DB, PRIVATE_DB_HOST, PRIVATE_DB_PASSWORD, PRIVATE_DB_USER } from '$env/static/private';
import mysql from 'mysql2/promise';

// let mysqlconn: null | Connection = null;

export const createDBConnection = async () => {

  // if (!mysqlconn) {
    const mysqlconn = await mysql.createConnection({ 
      host: PRIVATE_DB_HOST,
      user: PRIVATE_DB_USER,
      password: PRIVATE_DB_PASSWORD,
      database: PRIVATE_DB
    });
  // }

  return mysqlconn;
}