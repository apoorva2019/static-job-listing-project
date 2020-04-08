fetch("./data.json")
  .then(function (response) {
    // The JSON data will arrive here
    return response.json();
  })
  .then(function(data){
  	appendData(data);
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
    console.log(err);
  });
  function appendData(data) {
  var mainContainer = document.getElementById("filters");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].company + ' ' + data[i].logo;
    mainContainer.appendChild(div);
  }
}