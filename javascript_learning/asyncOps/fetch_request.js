async function fetchData(search_user_name) {
  let response = await fetch("https://ecomm-nodejs-backend.vercel.app/users");
  let user = await response.json();

  // console.log("user ==> ", user.data[7]);
  // console.log(user.data.length);

  let no_matched_list = [];
  let matched_list = [];
  for (let i = 0; i < user.data.length - 1; i++) {
    // console.log(user.data[i].name);
    if (user.data[i].name == search_user_name) {
      matched_list.push(user.data[i].name);
    }
    no_matched_list.push(user.data[i].name);
  }
  console.log("matched_list =>", matched_list);
  console.log("no_matched_list =>", no_matched_list);
  // return user_name_list;
}

fetchData("jdx");
