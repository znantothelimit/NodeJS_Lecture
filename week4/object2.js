var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
const oldObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es+6] : 'Fantastic',
};

oldObject.sayNode(); // Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); // Fantastic