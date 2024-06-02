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

export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const transact = jateDb.transaction('jate', 'readwrite');
  const store = transact.objectStore('jate');
  const result = await store.put({ value: content})
  console.log('Changes saved to database', result)
};

export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const transact = jateDb.transaction('jate', 'readonly');
  const store = transact.objectStore('jate');
  const result = await store.getAll();
  return result[result.length - 1].value;
};

initdb();
