module.exports = (fullName) => {
  if (!fullName || typeof fullName !== 'string') return 'Error';
  const nameArr = fullName.split(' ');
  if (nameArr.length !== 2) return 'Error';
  const [ firstName, lastName ] = nameArr;
  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
