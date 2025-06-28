export const useFetch = (url) => {
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
    } catch (error) {
      console.error('Ошибка при получении данных:', error.message);
    }
  };
};
