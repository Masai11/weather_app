var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var nme = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=d9d505a70cf1cb7ec2bf2a9e82cd0704")
    .then( response  => response.json() )
    .then( data => {
        var nameValue = data["name"];
        var tempValue  = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];

        nme.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

        
    } )

    

.catch(err => alert("Sorry, That's not a city!"))
})

