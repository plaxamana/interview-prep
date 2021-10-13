const reverseStringStack = function(str) {
    const stack = []
    for (const char of str) {
        stack.push(char)
    }

    let reversed = ""
    // let size = stack.length
    while (stack.length) {
        reversed += stack.pop()
    }

    return reversed
}

let myStr = "abcde"
console.log(reverseStringStack(myStr))