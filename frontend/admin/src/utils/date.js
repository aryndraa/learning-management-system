// dateUtils.js

/**
 * Format tanggal menjadi string yang dapat dibaca
 * @param {string|Date} date - Date to format
 * @returns {string} - Formatted date
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

/**
 * Dapatkan perbedaan waktu dari sekarang dalam format yang dapat dibaca
 * @returns {string} - Time difference (e.g., '2 hours ago')
 * @param timestamp
 */
export const timeAgo = (timestamp) => {
  const now = new Date();
  const createdAt = new Date(timestamp);
  const diff = Math.floor((now - createdAt) / 1000);

  if (diff < 60) {
    return `${diff} seconds ago`;
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minutes ago`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(diff / 86400);
    return `${days} days ago`;
  }
};
