'use stirct '

let url = "https://reqres.in/api/users?"






  fetch(url)
  .then(res =>{

    return res.json() 

  })

  .then(function(data) {
    let authors = data.data; // Get the results
   
    console.log(data.data)

    for(x in authors ){
        var sel = document.createElement("option");
        sel.innerHTML = authors[x].first_name;
        sel.value  = authors[x].first_name;
        document.getElementById("contact").appendChild(sel);
      }
      
  })