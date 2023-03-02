module.exports = (content, maxLength) => {
  if (!content || typeof content !== 'string') return 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
