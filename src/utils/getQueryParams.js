import queryString from "query-string";

const getQueryParams = (query) => {
  return queryString.parse(query);
};

export default getQueryParams;
