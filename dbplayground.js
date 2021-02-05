//we are going to play around with our db in here

//require
const db = require('./models')

// db.user.create({
//     firstName: 'Scott',
//     lastName: 'Sherwood',
//     age: 40
// }).then( (data)=> {
//     console.log(data)
// })

// db.user.create({
//     firstName: 'Brian',
//     lastName: 'Krabec',
//     age: 27
// }).then((user)=> {
//     //in this callback we have access to the user
// })

// db.user.create({
//     firstName: 'Nick',
//     lastName: 'Schmitt',
//     age: 28
// }).then((user)=>{

// })

// db.user.findOne({
//     where: {firstName: 'Nick'}
// }).then(function(user) {
//     console.log(user.get())
//     //user will be an instance of User
// })
// .catch(err=> {
//     console.log(err)
// })

// db.user.findAll()
// .then((users)=> {
//     users.forEach( user=> {
//         console.log(user.firstName + ' ' + user.lastName)
//     })
// })