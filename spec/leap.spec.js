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

    describe('When i pass a number divisible by 100', function (){
        
        it('Then the number 1800 should won´t be leap', function (){
            //Arrange
            let number = 1800;
            
            //Act
            let result = isLeap(number);

            //Assert
            expect(false).toBe(result);
        })
    })

    describe('When i pass a number divisible by 400', function (){
        
        it('Then the number 2000 should be leap', function (){
            //Arrange
            let number = 2000;
            
            //Act
            let result = isLeap(number);

            //Assert
            expect(true).toBe(result);
        })
    })


})

