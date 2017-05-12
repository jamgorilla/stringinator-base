const _ = require('./underbar');

const first = function(str, n) {
  return !n || n === 1 ? _.first(str.split('')) : _.first(str.split(''), n).join('');
};

const last = function(str, n) {
  return !n || n === 1 ? _.last(str.split('')) : _.last(str.split(''), n).join('');
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return _.reject(str.split(''), (item) => item === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str.split(''), (item) => item === target);
};

const isOnlyDigits = function(str) {
  let regex = /[0-9]/;
  return _.every(str.split(''), (item) => item.match(regex));
};

const filterToOnlyDigits = function(str) {
  let regex = /[0-9]/;
  if (str.match(regex) === null) {return ''
  } else {
  return _.filter(str.split(''), (item) => item.match(regex)).join('');
  };
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  let keys = Object.keys(obj);
  return _.map(obj, (Value, keys, obj) => truncateString(obj[keys], maxLength))

};

const countChars = function(str) {

  let array = str.split('');
  return _.reduce(array, function (obj, letter) {
    if (obj[letter] === undefined){
      obj[letter] = 1;
    } else {
      obj[letter]++;
    } 
    return obj;
    }, {});
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
};


module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};