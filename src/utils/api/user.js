export const login = (params) => {
  try {
      const res = await fetch(
       " http://localhost:5000/api/auth/login${params}"
      ).then((r) => r.json());
      return res;
    } catch (error) {
      console.warn(error);
    }
};

export const register = (params) => {
  try {
      const res = await fetch(
        "http://localhost:5000/api//auth/register${params}"
      ).then((r) => r.json());
      return res;
    } catch (error) {
      console.warn(error);
    }
};

//http://jsonplaceholder.typicode.com/posts${params}