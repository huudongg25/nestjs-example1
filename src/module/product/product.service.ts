import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    // public productRepo: ProductRepository;
    constructor(private productRepo : ProductRepository) {
        
        // this.productRepo = new ProductRepository(); // tránh khai báo các instance bên trong class vì nó sẽ vi phạm pattern IOC
    }

    getAll() {
        return this.productRepo.getAll();
    }
    createProduct(data: any) {
        return this.productRepo.createProduct(data);
    }
    deleteProduct(id: string) {
        return this.productRepo.deleteProduct(id);
    }
}