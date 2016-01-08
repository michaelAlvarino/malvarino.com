
var trainShunting = {
	isReallyNaN: function(x){
		return x!==x;
	},
	hashCode: function(x){
		var hash = 0, i, chr, len;
		if (x.length === 0) return hash;
		for (i = 0, len = x.length; i < len; i++) {
			chr   = x.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	},
	toPreFix: function(str){
		// algo: https://en.wikipedia.org/wiki/Shunting-yard_algorithm
		var output = [], stack = [];
			// take out the digits and operators then use the train shunting algo
			str.match(/\d+\.+\d+|\d+|[\^+\*\-()/]/g).map((val) => {
				console.log("output");
				console.log(output);
				console.log("stack");
				console.log(stack);
				if(val != "undefined"){
					let isNaN = this.isReallyNaN(parseFloat(val));
					// console.log(val); console.log(this.hashCode(val));
					var isOperator = (val === "+" || val === "-" || val === "/" || val === "*" || val === "(" || val === ")" || val === "^");
					// push numbers to the output stack
					if(!isNaN && !isOperator){
						output.push(val);
					} else if(isNaN && isOperator) {
						// if we're at an operator
						let topOfStack = stack[stack.length-1];
						// at parenthases, we push everything from the stack to the output queue
						if(val === ")"){
							while(topOfStack != "("){
								output.push(stack.pop());
								topOfStack = stack[stack.length-1];
							}
							// get rid of trailing paren from the stack
							stack.pop();
						// dealing with left associative operators
						} else if(
							((val === "+" || val === "-") && (topOfStack === "*" || topOfStack === "/"))
							|| ((val === "*" || val === "/") && (topOfStack === "/" || topOfStack === "*"))
							|| (val === "^" && topOfStack != "^" && topOfStack != "(" && topOfStack != ")")// just added && topOfStack
						){
							output.push(stack.pop());
							stack.push(val);
						} else {
							stack.push(val);
						}
				}
			}
		});
		while(stack.length > 0){
			output.push(stack.pop());
		}
		return output;
	}

}
// 3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3

export default trainShunting;
