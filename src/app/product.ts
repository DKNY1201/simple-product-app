type conditionType = 'new' | 'used' | 'discontinued';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    condition: conditionType;
    category: string;

    constructor(id: number, name: string, description: string, price: number, condition: conditionType, category: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.condition = condition;
        this.category = category;
    }
}