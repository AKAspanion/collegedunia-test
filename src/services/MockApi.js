import { colleges } from "../assets/colleges.json";

export const getColleges = (pageNumber = 1, limit = 10) => {
  return new Promise((resolve, reject) => {
    const offset = (pageNumber - 1) * limit;
    setTimeout(() => {
      try {
        resolve({
          hasNext: colleges.length > offset + limit,
          colleges: colleges.slice(offset, offset + limit),
        });
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
};
