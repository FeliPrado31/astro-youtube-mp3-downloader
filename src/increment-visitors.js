import db from './db.js';

export async function incrementVisitors() {
    await db.read();
    db.data.visitors += 1;
    await db.write();
}