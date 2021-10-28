import feathers from '@feathersjs/client'

const url = 'http://localhost:3030'


const rest = feathers.rest
const auth = feathers.authentication

const restClient = rest(url);

const client = feathers()
client.configure(restClient.fetch(window.fetch));
client.configure(auth())

console.log(client)



// client.authenticate({
//     "email":"893227186@qq.com",
// 	"password":"12345678",
// 	"strategy": "local"
//   }).then((r) => {
//     // Logged in
//     console.log('authentication attempt', r)


//   const commentsService = client.service('comment')
//   console.log(commentsService)
//   commentsService.find()
//   .then(function(r) { console.log(r)})
//   }).catch(e => {
//     // Show login page (potentially with `e.message`)
//     console.error('Authentication error', e);
//   });





  
  
  
  // import client from './client'



  export default client