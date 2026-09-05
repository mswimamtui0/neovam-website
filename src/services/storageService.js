const STORAGE_KEY = 'neovam_blog_data';

class StorageService {
  save(key, data) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    storageData[key] = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
  }

  load(key) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return storageData[key] || null;
  }

  remove(key) {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    delete storageData[key];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
  }

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export default new StorageService();