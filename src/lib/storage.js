// localStorage-backed storage utility.
// Mirrors the shape of the previous `window.storage` API (async get/set
// returning { value }) so all reads/writes persist in the browser via
// window.localStorage instead.

const PREFIX = "aat:"; // Aesthetic Ascension Trakd

export const storage = {
  async get(key) {
    try {
      const raw = window.localStorage.getItem(PREFIX + key);
      return raw !== null ? { value: raw } : null;
    } catch (e) {
      return null;
    }
  },
  async set(key, value) {
    try {
      window.localStorage.setItem(PREFIX + key, value);
      return { value };
    } catch (e) {
      return null;
    }
  },
  async remove(key) {
    try {
      window.localStorage.removeItem(PREFIX + key);
      return true;
    } catch (e) {
      return false;
    }
  },
};
