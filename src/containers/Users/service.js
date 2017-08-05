export const fetchUsers = () => {
  return fetch('https://mysafeinfo.com/api/data?list=presidents&format=json')
    .then(res => {
      return res.json();
    })
    .then(result => result);
};
