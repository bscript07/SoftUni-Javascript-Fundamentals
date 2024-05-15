function formString(array) {
    array.pop();
    
    let arr = [];
    for (const token of array) {
     let [char, index] = token.split(':');
     index = index.split('/');
     for (const i of index) {
         arr[i] = char;
     }
    }
    return arr.join('');
 }