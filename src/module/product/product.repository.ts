//tương tác vs database
//truy vấn , chỉnh sửa dữ liệu

import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';


@Injectable()
export class ProductRepository {
    async getAll() {
        const data = await readFile('src/module/product/db/product.json', 'utf-8');
        const dataConvert = JSON.parse(data);
        return {
            products: dataConvert,
        };
    }

    async createProduct(data: any) {
        const dataProduct = await readFile(
            'src/module/product/db/product.json',
            'utf-8',
        );
        const dataConvert: any = JSON.parse(dataProduct);
        dataConvert.push(data);
        await writeFile(
            'src/module/product/db/product.json',
            JSON.stringify(dataConvert),
            'utf-8',
        );

        return {
            message: 'create successfully',
        };
    }

    async deleteProduct(id: string) {
        const dataProduct = await readFile(
            'src/module/product/db/product.json',
            'utf-8',
        );
        let dataConvert = JSON.parse(dataProduct);
        dataConvert = dataConvert.filter((item: any) => item._id !== id);
        await writeFile(
            'src/module/product/db/product.json',
            JSON.stringify(dataConvert),
            'utf-8',
        );
        return {
            message: 'delete successfully'
        };
    }
}