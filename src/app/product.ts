type conditionType = 'new' | 'used' | 'discontinued';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    condition: conditionType;
    category: string;
}