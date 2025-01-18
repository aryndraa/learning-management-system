/**
 * Helper untuk menyimpan data di localStorage atau sessionStorage
 *
 * @param {string} key - Kunci penyimpanan.
 * @param {any} value - Nilai yang akan disimpan.
 * @param {boolean} useSession - Gunakan sessionStorage jika true, localStorage jika false (default: false).
 */
export const saveToStorage = (key, value, useSession = false) => {
  const storage = useSession ? sessionStorage : sessionStorage;
  storage.setItem(key, value);
};

/**
 * Helper untuk mengambil data dari localStorage atau sessionStorage
 *
 * @param {string} key - Kunci penyimpanan.
 * @param {boolean} useSession - Gunakan sessionStorage jika true, localStorage jika false (default: false).
 * @returns {any} - Data yang diambil atau null jika tidak ditemukan.
 */
export const getFromStorage = (key, useSession = false, parse = false) => {
  const storage = useSession ? sessionStorage : sessionStorage;
  const data = storage.getItem(key);

  if (data) {
    return parse ? JSON.parse(data) : data
  }

  return null;
}

/**
 * Helper untuk menghapus data dari localStorage atau sessionStorage
 *
 * @param {string} key - Kunci penyimpanan.
 * @param {boolean} useSession - Gunakan sessionStorage jika true, localStorage jika false (default: false).
 */
export const removeFromStorage = (key, useSession = false) => {
  const storage = useSession ? sessionStorage : localStorage;
  storage.removeItem(key);
};

/**
 * Helper untuk memeriksa apakah kunci ada di localStorage atau sessionStorage
 *
 * @param {string} key - Kunci penyimpanan.
 * @param {boolean} useSession - Gunakan sessionStorage jika true, localStorage jika false (default: false).
 * @returns {boolean} - True jika kunci ada, false jika tidak ada.
 */
export const hasInStorage = (key, useSession = false) => {
  const storage = useSession ? sessionStorage : localStorage;

  return storage.getItem(key) !== null;
};