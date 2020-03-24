const User = require('./models/user');
const Group = require('./models/group');
require('./config/database')
const users_list = [
    {
        name : "John",
        limitOfExpense : 10 ,
        limitOfCoffee : 3,
    
    },
    {
        name : "Mark",
        limitOfExpense : 12,
        limitOfCoffee : 5
    },
    {
        name : "Rose",
        limitOfExpense : 5 ,
        limitOfCoffee :2
    },
    {
        name : "Niki",
        limitOfExpense : 10,
        limitOfCoffee :2
    },
    {
        name : "Ana",
        limitOfExpense : 8 ,
        limitOfCoffee :2
    },
    {
        name : "Bob",
        limitOfExpense :15 ,
        limitOfCoffee :5
    },

];

const groups_list = [
    {
        name : "Coffee lovers"
    },
    {
        name : "Water"
    },
    {
        name : "Work out"
    },
    {
        name : "No to Coffee"
    },
    {
        name : "Coffee & code"
    },
];


Group.deleteMany({}, (err, authors)=> {
    console.log('removed all Groups');
    Group.create(groups_list, (err, groups)=>{
      if (err) {
        console.log(err);
        return;
      }
      console.log('recreated all Groups');
      console.log(`created ${groups.length} groups`);
  
  
      User.deleteMany({}, (err)=>{
        console.log('removed all users');
        users_list.forEach((userData)=> {
          const user = new User({
            name : userData.name,
            limitOfExpense : userData.limitOfExpense ,
            limitOfCoffee : userData.limitOfCoffee
          })
        });
      });
      User.create(users_list, (err, users) => {
        if (err) {
            console.log(err);
            return;
          }
          console.log('recreated all Users');
          console.log(`created ${users.length} users`);
      })
    });
  });