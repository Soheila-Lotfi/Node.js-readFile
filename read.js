var fs=require('fs');

fs.readFile("movie.txt", "utf8", function(error, data){

    if (error){
        return console.log()
    }
    else{
        console.log(data);
        var dataArr=data.split(',');
        console.log(dataArr);
    }
})