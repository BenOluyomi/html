  
// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }
//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data) 

//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });


  // fetch('https://petstore.swagger.io/v2/store/inventory')
  // .then(
  //   function(response) {
  //     if (response.status !== 200) {
  //       console.log('Looks like there was a problem. Status Code: ' +
  //         response.status);
  //       return;
  //     }
  //     // Examine the text in the response
  //     response.json().then(function(data) {
  //       console.log("invv",data) 

  //     });
  //   }
  // )
  // .catch(function(err) {
  //   console.log('Fetch Error :-S', err);
  // });



  fetch("http://localhost:8080/subject/read", {
    method: 'put',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body:JSON.stringify(data)
  })
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

  function postData( title,body){
fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'put', //post, put,delete
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body:{
        "title":title,
        "body": body
    }
  })
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);


  })
  .catch(function (error) {
    console.log('Request failed', error);
  })

}