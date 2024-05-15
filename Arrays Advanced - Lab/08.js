function arrayManipulation(input) {
    let array = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
     let [operation, arg1, arg2] = input[i].split(' ');
     arg1 = Number(arg1);
     arg2 = Number(arg2);

     switch(operation) {
         case 'Add':
             add(arg1);
         break;
         case 'Remove':
             remove(arg1);
         break;
         case 'RemoveAt':
             removeAt(arg1);
         break;
         case 'Insert':
             insert(arg1, arg2);
         break;
     }
 }
 function add(el) {
     array.push(el);
 }
 function remove(num) {
     array = array.filter(number => number !== num);
 }
 function removeAt(index) {
     array.splice(index, 1);
 }
 function insert(num, index) {
     array.splice(index, 0, num);
 }
 console.log(array.join(' '));
}