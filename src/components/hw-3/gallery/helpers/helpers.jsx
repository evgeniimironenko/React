import axios from "axios";

export const fetchData = async (SearchQuery, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${encodeURIComponent(
      SearchQuery
    )}&page=${page}&key=40904503-50aacf3ffc7803337528aac62&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};

const api = { fetchData };

export default api;
