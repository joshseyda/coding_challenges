function calculator(operator, num0ne, numTwo) {
    switch (operator) {
        case "add":
            return (num0ne + numTwo);
            break;
        case "Add":
            return (num0ne + numTwo);
            break;
        case "+":
            return (num0ne + numTwo);
            break;
        case "subtract":
            return (num0ne - numTwo);
            break;
        case "Subtract":
            return (num0ne - numTwo);
            break;
        case "-":
            return (num0ne - numTwo);
            break;
        case "divide":
            return (num0ne / numTwo);
            break;
        case "Divide":
            return (num0ne / numTwo);
            break;
        case "/":
            return (num0ne / numTwo);
            break;
        case "multiply":
            return (num0ne * numTwo);
            break;
        case "Multiply":
            return (num0ne * numTwo);
            break;
        case "*":
            return (num0ne * numTwo);
            break;
        case "x":
            return (num0ne * numTwo);
            break;
        case "X":
            return (num0ne * numTwo);
            break;
        default:
            alert("enter valid operation: add, subtract, multiply or divide");
            break;
    }
}

calculator("add", 5, 12);