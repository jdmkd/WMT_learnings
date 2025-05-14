// Fetch the products from the API at https://fakestoreapi.com/products.
// Implement pagination, enable search functionality on all fields (excluding ID and rating count),
// add filtering by category, and include sorting by title, price, and rating.

const fetchAPI = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let productsData = await response.json();
  try {
    if (response.status === 200) {
      return await productsData;
    }
  } catch (e) {
    console.log("Fetching error!!", e);
  }
  // return null;
};
const data = null;

const searchAndPaginate = async (
  search = null,
  category = null,
  sortByTitle = false,
  sortByPrice = false,
  sortByRating = true,
  page = 1,
  limit = 10
) => {
  let filtered = {};
  const productData = data ? data : await fetchAPI();
  // console.log("x data ==>>", productData);

  if (search !== null && typeof search === "string") {
    if (Number(search.trim())) {
      console.log("search price:", Number(search.trim()));
      const search_num = Number(search.trim());
      filtered = await productData.filter(
        (p) => Math.floor(p.price) === Math.floor(search_num)
      );
    } else {
      console.log("search string:", search.trim());
      filtered = await productData.filter(
        (p) =>
          p.title.toLowerCase().includes(search.trim().toLowerCase()) ||
          p.description.toLowerCase().includes(search.trim().toLowerCase()) ||
          p.category.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
  } else {
    filtered = await productData;
  }

  if (category !== "" && category !== null && typeof category === "string") {
    console.log("filter by :", category);
    filtered = await filtered.filter(
      (p) => p.category.toLowerCase() === category
    );
  }

  let sortedData = {};
  if (sortByTitle || sortByPrice || sortByRating) {
    sortedData = sort(filtered, sortByTitle, sortByPrice, sortByRating);
    filtered = sortedData;
  }

  const total = await filtered.length;
  const totalPages = total ? Math.ceil(total / limit) : 1;
  const currentPage = totalPages ? Math.min(Math.max(1, page), totalPages) : 1;
  const result = await filtered.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  console.log("result:", result);
  console.log("pageInfo:", [
    { records: total, totalPages, currentPage, perPage: limit },
  ]);
  return {
    result: await result,
    pageInfo: [
      {
        records: await total,
        totalPages,
        currentPage,
        perPage: limit,
      },
    ],
  };
};

const sort = (filtered, sortByTitle, sortByPrice, sortByRating) => {
  let sorted = {};
  if (sortByTitle) {
    console.log("sorted by title :", sortByTitle);
    sorted = filtered.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortByPrice) {
    console.log("sorted by price :", sortByPrice);
    sorted = filtered.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  if (sortByRating) {
    console.log("sorted by ratings :", sortByRating);

    sorted = filtered.sort(function (a, b) {
      return a.rating.rate - b.rating.rate;
    });
  }
  return sorted;
};

const sortByTitle = true;
const sortByPrice = false;
const sortByRating = false;

console.log(
  searchAndPaginate("", "", sortByTitle, sortByPrice, sortByRating, 1, 6)
);
