import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [{
            id: 0,
            name: 'MVMT Watch',
            description: 'Best watch ever',
            price: 140,
            condition: 'new',
            category: 'Watch'
        },{
            id: 1,
            name: 'iPhone 6s',
            description: 'Good smart phone',
            price: 1000,
            condition: 'new',
            category: 'Phone'
        },
            {
                id: 2,
                name: 'iPhone 7',
                description: 'Pretty smart phone',
                price: 1100,
                condition: 'used',
                category: 'Phone'
            },
            {
                id: 3,
                name: 'iPhone 7s',
                description: 'Large smart phone',
                price: 1300,
                condition: 'discontinued',
                category: 'Phone'
            },
            {
                id: 4,
                name: 'Macbook Pro early 2015',
                description: 'Wonderful laptop tool for developer',
                price: 1500,
                condition: 'new',
                category: 'Laptop'
            },
            {
                id: 5,
                name: 'eSaver',
                description: 'Unlimited power bank',
                price: 30,
                condition: 'new',
                category: 'Technology'
            },
            {
                id: 6,
                name: 'Mitsubishi',
                description: 'Good car',
                price: 10000,
                condition: 'used',
                category: 'Car'
            },
            {
                id: 7,
                name: 'Domehouse',
                description: 'Ancient house',
                price: 85000,
                condition: 'discontinued',
                category: 'House'
            },
            {
                id: 8,
                name: 'Mentos',
                description: 'Who says no to mentos?',
                price: 2,
                condition: 'new',
                category: 'Candy'
            },
            {
                id: 9,
                name: 'Red pen',
                description: 'Good pen',
                price: 1,
                condition: 'used',
                category: 'Pen'
            },
            {
                id: 10,
                name: 'Phone case',
                description: 'Suitable for your smart phone',
                price: 15,
                condition: 'new',
                category: 'Case'
            }];

        const carts = [
            {
                id: 1,
                amount: 1
            }
        ];

        return {products, carts};
    }

}