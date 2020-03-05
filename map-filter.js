const numbers = [3, 5, 7, 8, 9, 10];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

function square(element) {
    return element * element;
}
const result = numbers.map(function(element) {
    return element * element;
});
console.log(result);
const result2 = numbers.map(x => x * x);
console.log(result2);

const result3 = numbers.filter(x => x > 7);
console.log(result3);
const result4 = numbers.find(x => x > 8);
console.log(result4);

numbers.map(function(element, index, array) {
    console.log(element, index, array);
})