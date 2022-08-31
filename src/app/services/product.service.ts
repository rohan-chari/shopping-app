import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(0, 'iPhone X','This is the iPhone X product description',750,"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg"),
    new Product(1, 'iPhone 11','This is the iPhone 11 product description',800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-black-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169026000"),
    new Product(2, 'iPhone 12','This is the iPhone 12 product description',950,"https://www.att.com/idpassets/global/devices/phones/apple/apple-iphone-12/carousel/blue/64gb/6861C-1_carousel.png"),
    new Product(3, 'iPhone 13','This is the iPhone 13 product description',1250,"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_colors_09142021_big.jpg.large.jpg"),
    new Product(4, 'iPhone 14','The iPhone 14 is only available for preorders',1499,"https://images.macrumors.com/t/418_COGCwYQe4n_PIiF6hT_quKo=/2531x/article-new/2022/05/iPhone-14-Pro-Lineup-Feature-Purple.jpg")

  ]
  

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
