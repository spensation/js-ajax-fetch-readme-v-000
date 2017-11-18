const app = "I don't do much.";

const token = 'c0212bf4abf4e57b6bc7ca809f60ab3c67f413b3'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
