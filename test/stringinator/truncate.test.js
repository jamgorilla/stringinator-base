const stringinator = require('../../stringinator');

describe('truncation functions', () => {

  describe('truncateString', () => {
    it('returns a blank string for a max length of 0', () => {
      const result = stringinator.truncateString('foodie', 0);
      expect(result).toEqual('');
    });

    it('truncates a string to a shorter length', () => {
      const result = stringinator.truncateString('foodie', 4);
      expect(result).toEqual('food');
    });

    it('returns the string when given a length longer than the actual string length', () => {
      const result = stringinator.truncateString('foodie', 7);
      expect(result).toEqual('foodie');
    });
  });

  describe('truncateLongItems', () => {
    it('truncates long object values', () => {
      const veryLongMiddleNameGuy = {
        firstName: 'Kiefer',
        middleName: 'William Frederick Dempsey George Rufus',
        lastName: 'Sutherland'
      };
      const expected = ['K', 'W', 'S'];
      const result = stringinator.truncateLongItems(veryLongMiddleNameGuy, 1);
  
      expect(result).toEqual(expected);
    });

    it('truncates long array elements', () => {
      const longMiddleNameGuy = [
        'Mel',
        'Colm-Cille Gerard',
        'Gibson'
      ];
      const expected = ['Mel', 'Col', 'Gib'];
      const result = stringinator.truncateLongItems(longMiddleNameGuy, 3);
      expect(result).toEqual(expected);
    });
  });

});
