const a = 200001
console.log(a);

const Farid = {
    name: "Farid",
    age: 16
}

const Ilham = {
    name: "Ilham",  
    age: 18
}

function print (name) {
    if(name === "farid") {
        console.log(Farid.name + ' ' + Farid.age);
    }
    else{
        console.log(Ilham.name + ' ' + Ilham.age);
    } 
}


print("farid")

// filter

const numbers = [
    1,2,3,4,5,6,7,8,9,10
]

const even = numbers.filter(x=> (x%2)==0)

console.log(even);

// find

console.log(numbers.find(x=> x===10))


// forEach loop

const arr1 = [1,2,3]

for(var i =0; i< arr1.length; i++){
    console.log(arr1[i]);
}

console.log();

function print (value) {
    console.log(value);
}

arr1.forEach(print)

