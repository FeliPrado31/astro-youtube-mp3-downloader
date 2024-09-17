import db from './db.js';

async function initDB() {
    await db.read();
    db.data ||= { visitors: 0 };
    await db.write();
}

initDB();