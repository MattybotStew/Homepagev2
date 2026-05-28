// WordPress API Configuration
// Update with your Local WordPress URL
const WP_URL = import.meta.env.VITE_WP_URL || 'https://cma-wordpress.local';
const API_URL = `${WP_URL}/wp-json/wp/v2`;
const CMA_API_URL = `${WP_URL}/wp-json/cma/v1`;

// Fetch pages from WordPress
export const getPage = async (slug) => {
  try {
    const response = await fetch(`${API_URL}/pages?slug=${slug}&_embed`);
    const pages = await response.json();
    return pages[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
};

// Fetch exhibits from custom endpoint
export const getExhibits = async () => {
  try {
    const response = await fetch(`${CMA_API_URL}/exhibits`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching exhibits:', error);
    return [];
  }
};

// Fetch events from custom endpoint
export const getEvents = async () => {
  try {
    const response = await fetch(`${CMA_API_URL}/events`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export default {
  getPage,
  getExhibits,
  getEvents,
};
