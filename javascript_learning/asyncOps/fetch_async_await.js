async function fetchData(search_user_name) {
  let response = await fetch("https://ecomm-nodejs-backend.vercel.app/users");
  let user = await response.json();
  
  console.log("user ==> ", user);
}

fetchData("jdx");
