var sum = 0;
var array = [1, 2, 3, 4, 5];
for (var i=0; i <= array.length; i += 1){
	sum +=  array[i];
    if(i == array.length -1){
        console.log(sum);
    }
}