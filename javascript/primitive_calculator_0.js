function calculator(methodType, num1, num2) {
    if (methodType == "add" || methodType == "Add" || methodType == "+") {
        return num1 + num2;
    } else if (methodType == "subtract" || methodType == "Subtract" || methodType == "-") {
        return num1 - num2;
    } else if (methodType == "divide" || methodType == "Divide" || methodType == "/") {
        return num1 / num2;
    } else if (methodType == "multiply" || methodType == "Multiply" || methodType == "*" || methodType == "x" || methodType == "X") {
        return num1 * num2;
    } else {
        console.log("Only input basic arithmetic paired with two numbers please!");
    }
}

calculator("multiply", 2, 5);