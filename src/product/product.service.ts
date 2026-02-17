import { Injectable } from '@nestjs/common';

@Injectable()  // the tell its injectable service
export class ProductService {
    private products=[ 
        
          {  id: 1,name:"Mobail", price:20000},
          {  id: 2,name:"Laptop", price:40000},
          {  id: 3,name:"Tablet", price:60000},
          

        
    ];
    getAllProducts(){
        return this.products;
    }
    getProductById(id:number){
        return this.products.find((product)=>product.id==id)
    }
 }
