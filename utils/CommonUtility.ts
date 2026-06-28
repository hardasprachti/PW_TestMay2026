import * as mysql from 'mysql2/promise';

export class CommonUtility {

   static async connectDatabase(queryStr: string) {
      const config = {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'practice',
        port: 3306,
      };

      const pool = mysql.createPool(config);
      try {
        const [rows] = await pool.query(queryStr);
        return rows;
      } finally {
        await pool.end();
      }

   }

   static async convertExcelToJSON(path:string){
      const XLSX = require("xlsx");
      const fs = require("fs");

      const workbook = XLSX.read

   }
}





    
    

