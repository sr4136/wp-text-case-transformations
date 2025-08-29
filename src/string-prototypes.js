const titleCapsExceptions = [
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "for",
  "from",
  "in",
  "into",
  "is",
  "it",
  "no",
  "not",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "with",
];

/**
 * Converts a string to title case.
 *
 * @returns {string} The string in title case.
 */
function toTitleCaps() {
  return this.toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0 || !titleCapsExceptions.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join(" ");
}

// Export the function
export default toTitleCaps;
