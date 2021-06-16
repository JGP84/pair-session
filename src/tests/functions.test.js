import { getFoodById } from "../functions";
import foods from "../data/foods"

describe('one unit test that FAILS for the right reasons (return null) & one unit test that PASSES for the right reasons (getFoodById):', () => {

test("TEST FAILS --> should return null if food don´t exist", () => {

    const id = 40;
    
    const food = getFoodById( id );
    
    expect( food ).toBe( null );

});
    
test('TEST PASS --> should return an food for id', () => {
    
    const id = 3;

    const food = getFoodById( id );

    const foodData = foods.find( (food) => food.id === id );

    expect( food ).toEqual( foodData );

})





})
