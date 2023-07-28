function evenNumberFilter(array){
return array%2==0;
}

var array=[12,34,45,23,6,78,54,90]
console.log(array.filter(evenNumberFilter))