//

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001))

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
    }

};
user.printPlacesLived()