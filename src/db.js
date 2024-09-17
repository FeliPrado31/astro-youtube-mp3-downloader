import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');
const db = new Low(adapter, { visitors: 0 }); // Proporciona un valor predeterminado aquí

export default db;