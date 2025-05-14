const { people } = require("./data");
console.log("people =>", people);

const searchAndPaginate = (search = null, page = 1, limit = 1) => {
  let filtered = {};
  if (search !== null && typeof search === "string") {
    filtered = people.filter((p) =>
      p.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  } else {
    filtered = people;
  }

  const total = filtered.length;
  const totalPages = total ? Math.ceil(total / limit) : 1;
  const currentPage = totalPages ? Math.min(Math.max(1, page), totalPages) : 1;
  const result = filtered.slice((currentPage - 1) * limit, currentPage * limit);

  return {
    result,
    pageInfo: [{ records: total, totalPages, currentPage, perPage: limit }],
  };
};

// names, current page , per page records
console.log(searchAndPaginate("mike", 1, 10));
// console.log(searchAndPaginate(null, 2, 7));
// console.log(searchAndPaginate("z", 1, 5));
