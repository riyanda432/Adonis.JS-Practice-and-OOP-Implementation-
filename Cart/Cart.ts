export interface Product {
    name: string;
    qty: number;
}

export default class Cart implements Product {

    name: string;
    qty: number; 
    products: any[];
   
    constructor () {
        this.products = []
    }

    public addNewProduct(name:string, qty:number): Product[] {
        this.products.push({name, qty});
        return this.products; 
    }

    public showAllProduct() {
        return this.products.map(el =>  el.name + " (" + el.qty + ")")
    }

    public deleteProduct(name: string) {
        const errMsg = 'Failed to delete product ';
        this.products.map(el => el.name === name ? this.products.splice(el, 1) : errMsg )
    }
   
}

export const cart = new Cart()

cart.addNewProduct('kursi tamu', 4)
cart.addNewProduct('Meja Makan', 4)
cart.addNewProduct('Meja Belajar', 4)

cart.deleteProduct('kursi tamu')

console.log(cart.showAllProduct())
