import { createConnection } from 'mysql2/promise';

async function connectDatabase(query: string) {
    const connection = await createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'practice'
    });

    const [rows] = await connection.execute(query);
    await connection.end();
    return rows;
}

async function main() {
    try {
        const result = await connectDatabase("select * from dept");
        console.log(result);
        const jsonResult = result.json()
        for(let i=0;i<jsonResult.count();i++){
            
        }

    } catch (error) {
        console.error("Database error:", error);
    }
}

main();






    
    

