function postfixCalculator(instructions) {
    const stack = [];

    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i];

        if (typeof instruction === 'number') {
            stack.push(instruction);
        } else if (typeof instruction === 'string' && '+-*/'.includes(instruction)) {
            if (stack.length < 2) {
                return 'Error: not enough operands!';
            }
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;

            switch (instruction) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }
            stack.push(result);
        } else {
            return 'Error: Invalid instruction!';
        }
    }

    if (stack.length !== 1) {
        return 'Error: too many operands!';
    }
    return stack[0];

}