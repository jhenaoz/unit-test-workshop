const isLeap = require('../src/yearLeap');

describe('Given a year leap function', () => {
  describe('When i pass a number divisible by 4', () => {
    it('Then the number 1984 should be leap', () => {
      // Arrange
      const number = 1984;

      // Act
      const result = isLeap(number);

      // Assert
      expect(true).toBe(result);
    });
  });

  describe('When i pass a number divisible by 100', () => {
    it('Then the number 1800 should won´t be leap', () => {
      // Arrange
      const number = 1800;

      // Act
      const result = isLeap(number);

      // Assert
      expect(false).toBe(result);
    });
  });

  describe('When i pass a number divisible by 400', () => {
    it('Then the number 2000 should be leap', () => {
      // Arrange
      const number = 2000;

      // Act
      const result = isLeap(number);

      // Assert
      expect(true).toBe(result);
    });
  });
});

