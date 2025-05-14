const fetchAPI = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response?.status === 200) {
      return await response?.json();
    }
  } catch (e) {
    console.log("Fetching error:", e);
    return [];
  }
};

const applySearch = (data, search) => {
  const fields = ["title", "description", "category", "price"];

  const term = search?.toLowerCase().trim();
  if (!term) return data;

  return data.filter((item) =>
    fields.some((field) => {
      const value = item[field];
      if (typeof value === "string") {
        return value.toLowerCase().includes(term);
      }
      if (typeof value === "number" && !isNaN(Number(term))) {
        return Math.floor(value) === Math.floor(Number(term));
      }
      return false;
    })
  );
};

const applyCategoryFilter = (data, categories) => {
  if (!categories || categories.length === 0) return data;

  return data.filter((p) =>
    categories.some((category) =>
      category === ""
        ? data
        : p?.category.toLowerCase() === category.toLowerCase()
    )
  );
};

const applySorting = (data, sortBy) => {
  const activeKey = sortBy?.key;
  const ord = sortBy?.ord;

  if (!activeKey || activeKey === "") return data;

  return [...data].sort((a, b) =>
    ord === 0
      ? typeof a[activeKey] === "string"
        ? a[activeKey].localeCompare(b[activeKey])
        : a[activeKey] - b[activeKey]
      : typeof a[activeKey] === "string"
      ? b[activeKey].localeCompare(a[activeKey])
      : b[activeKey] - a[activeKey]
  );
};

const applyPagination = (data, page, limit) => {
  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * limit;

  return {
    result: data.slice(start, start + limit),
    pageInfo: {
      total,
      totalPages,
      currentPage,
      perPage: limit,
    },
  };
};

const searchAndPaginate = async ({
  search = "",
  categories = [],
  sortBy = { key: "", ord: 0 },
  page = 1,
  limit = 10,
} = {}) => {
  const data = await fetchAPI();

  let filteredData = applySearch(data, search);

  filteredData = applyCategoryFilter(filteredData, categories);
  filteredData = applySorting(filteredData, sortBy);

  const paginatedData = applyPagination(filteredData, page, limit);

  console.log("Search value :", search ?? "");
  console.log("Filter applied :", categories ?? false);
  console.log(
    `Sorted by ${sortBy.key} and Order by ${sortBy.ord === 0 ? "Asc" : "Des"}`
  );
  console.log("Products:", paginatedData.result);
  console.log("Page Info:", paginatedData.pageInfo);

  return paginatedData;
};

searchAndPaginate({
  search: "Jacket",
  categories: ["women's clothing", "jewelery"],
  sortBy: { key: "title", ord: 0 },
  page: 1,
  limit: 7,
});
