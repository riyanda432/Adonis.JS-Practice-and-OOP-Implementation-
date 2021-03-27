import Cart  from './Cart'

jest.mock('./Cart'); // SoundPlayer is now a mock constructor

it('We can check if the cart called the class constructor', () => {
    const cart = new Cart();
    expect(Cart).toHaveBeenCalledTimes(1);
});

it('The consumer should be able to call new() on Cart', () => {
    const cart = new Cart();
    // Ensure constructor created the object:
    expect(cart).toBeTruthy();
});

describe ('Add new product success ', () => {
    it('should return an object with data properties', async () => {
        const cart = new Cart();
        const res = cart.addNewProduct('kursi makan', 1)
        expect(res).toEqual('object')
      } 
    )
}) 

describe ('Delete product success ', () => {
    it('should return an object with data properties', async () => {
        const cart = new Cart();
        const res = cart.deleteProduct('kursi makan')
        expect(res).toEqual('object')
      } 
    )
}) 

describe ('Show product success ', () => {
    it('should return an object with data properties', async () => {
        const cart = new Cart();
        expect(cart.showAllProduct()).toEqual('object')
      } 
    )
}) 




