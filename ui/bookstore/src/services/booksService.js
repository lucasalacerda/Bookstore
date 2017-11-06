import axios from 'axios';

/**
 * Create a book
 * 
 * @param {Object} book
 * @param {string} book.title
 * @param {string} book.description
 * @param {string} book.author
 * @param {string} book.publiser
 * @param {string} book.pages
 * @param {string} book.image_url
 * @param {string} book.buy_url
 *
 * @returns {Promise}
 */
export const create = ({ 
  title, description, author, publiser, pages, image_url, buy_url 
}) => axios.post('http://localhost:3000/api/books', {
  title, description, author, publiser, pages, image_url, buy_url 
});
