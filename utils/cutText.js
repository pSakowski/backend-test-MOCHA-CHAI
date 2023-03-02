module.exports = (content, maxLength) => {
  if (!content || typeof content !== 'string') return 'Error';
  if (typeof maxLength !== 'number' || maxLength <= 0) return 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};