import { openDB } from 'idb';

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

// TODO: Add logic to a method that accepts some content and adds it to the database
// small wrapper that makes IndexedDB that is referenced above in import.
export const putDb = async (content) => {
  console.log('putDb implemented');
  const jateDatabase = await openDB('jate', 1);
  const jateText = jateDatabase.transaction('jate', 'readwrite');
  const jateStore = jateText.objectStore('jate');
  const jateRequest = jateStore.put({ id: 1, value: content });
  const result = await jateRequest;
  console.log('Transmission Received', result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('getDb implemented');
  const jateDatabase = await openDB('jate', 1);
  const jateText = jateDatabase.transaction('jate', 'readonly');
  const jateStore = jateText.objectStore('jate');
  const jateRequest = jateStore.get(1);
  const result = await jateRequest;
  console.log('Transmission Received', result.value);
};

initdb();
