import { drizzle } from 'drizzle-orm/d1';
import { products, contacts } from './schema';

export class Database {
  constructor(d1) {
    this.db = drizzle(d1);
  }

  async getProducts() {
    return await this.db.select().from(products);
  }

  async addProduct(product) {
    return await this.db.insert(products).values(product);
  }

  async submitContact(contact) {
    return await this.db.insert(contacts).values(contact);
  }
}