import { renderNavigation } from './components/navigation.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderProducts } from './pages/products.js';
import { renderContact } from './pages/contact.js';

// Router
async function router() {
  const path = window.location.pathname;
  const main = document.querySelector('main');
  
  switch(path) {
    case '/':
      main.innerHTML = renderHome();
      break;
    case '/about':
      main.innerHTML = renderAbout();
      break;
    case '/products':
      const response = await fetch('/api/products');
      const products = await response.json();
      main.innerHTML = renderProducts(products);
      break;
    case '/contact':
      main.innerHTML = renderContact();
      initContactForm();
      break;
    default:
      main.innerHTML = renderHome();
  }
}

// Handle contact form
function initContactForm() {
  document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Render static components
  document.body.insertAdjacentHTML('afterbegin', renderNavigation());
  document.body.insertAdjacentHTML('beforeend', renderFooter());
  
  // Handle routing
  router();
  
  // Handle navigation
  document.addEventListener('click', (e) => {
    if (e.target.matches('.nav-link')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.history.pushState({}, '', href);
      router();
    }
  });
  
  // Handle browser back/forward
  window.addEventListener('popstate', router);
});