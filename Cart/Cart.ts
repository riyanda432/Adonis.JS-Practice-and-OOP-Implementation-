

class Cart {
    /** define properties for cart */
    name: string;
    qty: number; 
    products: any[];

    constructor () {
        this.products = []

    }

    addNewProduct(name:string, qty:number) {
        this.products.push({name, qty});
        return this.products; 
    }

    showAllProduct() {
        return this.products.map(el =>  el.name + " (" + el.qty + ")")
    }

}