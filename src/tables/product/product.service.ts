import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { ProductInterface } from './interfaces/product.interface';

// @Injectable()
// export class ProductService {
//     product: Promise<ProductInterface[]>;

//     constructor(@InjectModel('product') private readonly productModel: Model<ProductInterface & Document>){}
//         findAll(): Promise<ProductInterface[]>{
//             return this.product;
//         }

//         async findOne(Id_product: string): Promise<ProductInterface> {
//             return await this.productModel.findOne({ _Id_product: Id_product });
//         }

//         async create(prod: ProductInterface): Promise<ProductInterface> {
//             const newPro = new this.productModel(prod);
//             return await newPro.save();
//         }
        
//         async delete(Id_product: string): Promise<ProductInterface> {
//             return await this.productModel.findByIdAndRemove(Id_product);
//         }

//         async update(Id_product: string, pro: ProductInterface ): Promise<ProductInterface> {
//             return await this.productModel.findByIdAndUpdate(Id_product, pro, {new: true});
//         }

// }



/////////////////////////////////////////////////////test2
// @Injectable()
// export class ProductService {
//     private readonly products: ProductInterface[] = [
//         {
//             Id_product: "111111",
//             Id_cattegory: "22222",
//             Name_product: "ONE",
//             Description_product: "mot"
//         },
//         {
//             Id_product: "10101010",
//             Id_cattegory: "20202020",
//             Name_product: "Two",
//             Description_product: "Hai"
//         }

//     ];

//     findAll(): ProductInterface[] {
//         return this.products;
//     }

//     findOne(id: string): ProductInterface {
//         return this.products.find(product => product.Id_product === id);
//     }

// }


/////////////////////////////////////////////////////test3
@Injectable()
export class ProductService {
   constructor(@InjectModel('ProductInterface') private readonly productModel:Model<ProductInterface & Document>) {}

    async findAll(): Promise<ProductInterface[]> {
        return await this.productModel.find();
    }

    async findOne(Id_product: string):  Promise<ProductInterface> {
        return await this.productModel.findOne({ _Id_product: Id_product});
    }
}


