interface Product {
    name: string;
    qty: number;
}

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

    deleteProduct(name: string) {
        const errMsg = 'Failed to remove product !';
        this.products.map(el => el.name === name ? this.products.splice(el, 1) : errMsg )
    }

}