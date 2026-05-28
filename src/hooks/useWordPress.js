import { useState, useEffect } from 'react';
import { getPage, getExhibits, getEvents } from '../config/wordpress';

export const useWordPressPage = (slug) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const data = await getPage(slug);
        setPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchPage();
    }
  }, [slug]);

  return { page, loading, error };
};

export const useWordPressExhibits = () => {
  const [exhibits, setExhibits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExhibits = async () => {
      try {
        setLoading(true);
        const data = await getExhibits();
        setExhibits(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchExhibits();
  }, []);

  return { exhibits, loading, error };
};

export const useWordPressEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  return { events, loading, error };
};
