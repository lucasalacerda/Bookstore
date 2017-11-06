import axios from 'axios';

/**
 * Create a book
 * 
 * @param {Object} user
 * @param {string} user.name
 * @param {string} user.lasName
 * @param {string} user.email
 * @param {string} user.senha
 * @param {string} user.picture
 *
 * @returns {Promise}
 */
export const create = ({ 
  title, description, author, publiser, pages, image_url, buy_url 
}) => axios.post('http://localhost:3000/api/user', {
  title, description, author, publiser, pages, image_url, buy_url 
});
