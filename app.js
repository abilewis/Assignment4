var small = generateData(10000);
console.log(small);


function generateData(size) {
    var array = [];
    for (var i=0; i<size; i++) {
        var obj = {};
        obj.location = randomString(25);
        obj.motionStart = randomNumber();
        obj.motionEnd = randomNumber();
        obj.payload = randomString(20);
        obj.description = randomString(30);
        /*console.log(obj.location);
        console.log(obj.motionStart);
        console.log(obj.motionEnd);
        console.log(obj.payload);
        console.log(obj.description);*/
        array.push(obj);
    }
    return array;
}

function randomString(number) {
    var string = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i=0; i<number; i++) {
        string += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return string;
}

function randomNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}