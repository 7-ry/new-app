const Product = require("./model/product")

class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage: '../../../assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingtext1: 'sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext ',
                headingtext2: 'SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT ',
                headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultriciesvehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodocursus magna.'
            },
            {
                coverImage: '../../../assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingtext1: 'sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext ',
                headingtext2: 'SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT ',
                headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultriciesvehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodocursus magna.'
            },
            {
                coverImage: '../../../assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingtext1: 'sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext ',
                headingtext2: 'SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT ',
                headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultriciesvehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodocursus magna.'
            },
            {
                coverImage: '../../../assets/img/phone-cover.jpg',
                name: 'Phone PRO',
                price: 1199,
                description: '',
                heading1: 'sample text',
                heading2: 'sample text',
                heading3: 'sample text',
                headingtext1: 'sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext sampletext ',
                headingtext2: 'SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT SAPLETEXT ',
                headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultriciesvehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodocursus magna.'
            }
        ]
    }

    // async initDb() {
    //     await this.cleanDb()
    //     this.pushProductsToDb()
    // }

    async initDb() {
        console.log('Cleaning DB...');
        await this.cleanDb();
        console.log('DB Cleaned. Inserting products...');
        await this.pushProductsToDb();
        console.log('Products inserted.');
    }

    async cleanDb() {
        await Product.deleteMany({});
        console.log('Existing products removed.');
    }

    async pushProductsToDb() {
        for (const product of this.products) {
            try {
                const newProduct = new Product(product);
                await newProduct.save();
                console.log(`Saved product: ${newProduct.name}`);
            } catch (err) {
                console.error(`Error saving product: ${err.message}`);
            }
        }
    }
    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb;