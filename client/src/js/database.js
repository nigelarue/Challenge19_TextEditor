import { openDB } from 'idb';

// create a new database named 'jate'. Upgrade(db) will add our database schema if it isn't initialized.
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Export a function we will use to POST to the database
export const putDb = async (content) => {
  console.log('PUT to database');
  // connects to the db & version we wanna use
  const jateDb = await openDB('jate', 1);
  // new transaction and specify the database and data privleges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store
  const store = tx.objectStore('jate');
  // use the .put() method on the store and adds in the content.
  const request = store.put({ id: 1, value: content });
  // gets confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  console.log('🚀 - Transmission Received, Commander');
  return result;
};

// Export a function we will use to GET data/content from the database
export const getDb = async () => {
  console.log('GET from database');
  // connects to db & version we wanna use
  const jateDb = await openDB('jate', 1);

  // Create a new transaction & specify the db and data privledges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Opens desired object store
  const store = tx.objectStore('jate');
  // use the .add() method on the store and passes in the content.
  const request = store.get(1);

  // get confirmation of the request.
  const result = await request;
  if (result) {
    console.log('🚀 - Transmission Received, Commander', result.value);
    return result.value;
  } else {
    console.log('🚀 - Transmission ERROR, data not found, Commander');
    return undefined;
  };
};

initdb();
