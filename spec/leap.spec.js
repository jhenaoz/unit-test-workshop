var isLeap = require('../src/yearLeap');

describe('Given a year leap function', function (){
    
    describe('When i pass a number divisible by 4', function (){
        
        it('Then the number 1984 should be leap', function (){
            //Arrange
            let number = 1984;
            
            //Act
            let result = isLeap(number);

            //Assert
            expect(true).toBe(result);
        })
    })
})