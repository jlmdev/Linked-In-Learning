//  Async with Fetch

const gitHubRequest = async(loginName) => {
  try {
    var response = await fetch(`https://api.github.com/users/${loginName}/followers`);
    var json = await response.json();
    var followerList = json.map(user => user.login);
    console.log(followerList);
  }
  catch(error) {
    console.log("Data didn't load", error);
  }
};

gitHubRequest('eveporcello');



