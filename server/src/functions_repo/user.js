const fetchedUsers = [
  {
    firstname: 'Olije Favour',
    id: '222',
    password: '345feg',
    email: 'truelyfavoured@gmail.com',
    date_of_reg: new Date(),
    entries: 0,

  },

  {
    name: 'Don Joe',
    id: '252',
    password: '783hy',
    email: 'yourfav@gmail.com',
    date_of_reg: new Date(),
    entries: 0,
  },
];


const users = {

  getUser(id) {
    const verifiedUser = fetchedUsers.find(user => user.id === id);
    if (verifiedUser === null || verifiedUser === undefined) return null;

    return verifiedUser;
  },
};
