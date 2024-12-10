type Size=''|'S'|'M'|'xl';

class Product {
    constructor(
        
        public name:string='',
        public price:number=0,
        public size:Size='',
    
    ){}

    isProductReady():boolean{
        for ( const key in this)
            {
                console.log(key, typeof this[key]);
                switch (typeof this[key]) {
                    case 'string': //Esto no debe hacerse <string><unknown>
                        if( (<string><unknown>this[key]).length <=0) throw new Error(`${key} is empty`);
                
                        break;
                    case 'number':
                        if( (<number><unknown>this[key]) <=0) throw new Error(`${key} is zero`);
                
                        break;
                    default:
                        throw new Error(`${typeof this[key]} is not valid`);
                        
                        break;
                }
            }

            return true;
    }

    toString()
    {
        /* if(this.name.length <=0) throw new Error("name is empty");
        if(this.price <=0) throw new Error("price is empty");
        if(this.size.length <=0) throw new Error("size is empty");
         */
        if(!this.isProductReady) return ;

        return `${this.name} (${this.price}), ${this.size}`
    }
}

(()=> {


    const bluePants =new Product('Blue pants', 10, 'M');
    console.log(bluePants.toString());

})();