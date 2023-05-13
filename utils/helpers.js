module.exports = {
  // format a date string to MM/DD/YYYY format
  formatDate: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },

  // format a word to its plural form based on the given amount
  formatPlural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  }
};
