function arrayManipulator(array, commands) {

    for (let i = 0; i < commands.length; i++) {
        let split = commands[i].split(' ');
        let command = split[0];

        if (command === 'add') {
            add();
        } else if (command === 'addMany') {
            addMany();
        } else if (command === 'contains') {
            contains();
        } else if (command === 'remove') {
            remove();
        } else if (command === 'shift') {
            shift();
        } else if (command === 'sumPairs') {
            sumPairs();
        } else if (command === 'print') {
            print();
            break;
        }

        function add() {
            let i = parseInt(split[1]);
            let el = parseInt(split[2]);
            array.splice(i, 0, el);
        }

        function addMany() {
            let i = parseInt(split[1]);
            for (let k = split.length - 1; k >= 2; k--) {
                let el = parseInt(split[k]);
                array.splice(i, 0, el);
            }
        }

        function contains() {
            let el = parseInt(split[1]);
            console.log(array.indexOf(el));
        }

        function remove() {
            let i = parseInt(split[1]);
            array.splice(i, 1);
        }

        function shift() {
            let position = parseInt(split[1]);
            for (let j = 0; j < position; j++) {
                let firstPosition = array.shift();
                array.push(firstPosition);
            }
        }

        function sumPairs() {
            array = array.map((e, i, arr) => i < arr.length - 1 ? (arr[i] += arr[i + 1]) : array[i] = array[i]).filter((e, i) => i % 2 === 0);
        }

        function print() {
            console.log(`[ ${array.join(', ')} ]`);
        }
    }
}