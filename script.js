const api_url = 
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        <ul>
          <li>id</li>
          <li>date</li>
          <li>title</li>
          <li>content</li>
          <li>thumbnail</li>
          <li>author</li>
          
         </ul>;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += <ul> 
    <li>${r.id} </li>
    <li>${r.date}</li>
    <li>${r.title}</li> 
    <li>${r.content}</li>
    <li>${r.thumbnail}</li>
    <li>${r.autho}</li>          
</ul>;
    }
    // Setting innerHTML as tab variable
    document.getElementById("root").innerHTML = tab;
}
$(".media-object1").hover(function() {
    $("this").html("this text has changed!");
})