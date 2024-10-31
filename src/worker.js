import { Database } from './db';
import { error, json } from 'itty-router';
import { Router } from 'itty-router';

const router = Router();

router.get('/api/products', async (request, env) => {
  const db = new Database(env.DB);
  const products = await db.getProducts();
  return json(products);
});

router.post('/api/contact', async (request, env) => {
  const db = new Database(env.DB);
  const contact = await request.json();
  
  try {
    await db.submitContact(contact);
    return json({ success: true });
  } catch (e) {
    return error(500, 'Failed to submit contact form');
  }
});

// Serve static assets
router.get('*', async () => {
  return fetch('https://gkorchids.pages.dev');
});

export default {
  fetch: router.handle
};