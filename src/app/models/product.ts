export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id:number, name:string, description = '', price = 0, imageUrl='https://1000logos.net/wp-content/uploads/2016/10/Apple_logo_grey.png'){
        this.id =id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
    }
}
