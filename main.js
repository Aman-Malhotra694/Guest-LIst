
    
function submit()
{

    for (var j = 1; j <= 10; j++) 
    {
        var name_of_the_guest = document.getElementById("name_of_the_guest_"+j).value;
        console.log(name_of_the_guest);
        name_of_the_guest.push(name_of_the_guest);
    }
