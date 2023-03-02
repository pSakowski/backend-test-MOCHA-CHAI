module.exports = (content, maxLength) => {
  if (!content || typeof content !== 'string') return 'Error';
  if (typeof maxLength !== 'number') return 'Error';
  if (typeof maxLength <= 0 || -6) return 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
