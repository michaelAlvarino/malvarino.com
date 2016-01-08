
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
	evaluate: function(str){
		var val = 0;
		var stack = [];
		var left, right;
		while(str.length > 0){
			val = str.shift();
			let isOperator = (val === "+" || val === "-" || val === "/" || val === "*" || val === "(" || val === ")" || val === "^");
			if(isOperator){
				right = stack.pop();
				left = stack.pop();
				str.unshift(eval(String.concat(left,val,right)));
			} else {
				if(str.length === 0)
					return val;
				stack.push(val);
			}
		}
	},
	toPreFix: function(str){
		// algo: https://en.wikipedia.org/wiki/Shunting-yard_algorithm
		let prefixQueue = [], operatorStack = [], timeOperatorStack = [], prefixQueueStack = [], ret = {}, vals = [] ;
			// take out the digits and operators then use the train shunting algo
			// for each value in the string, I'm running the function... basically running it N times

			str.match(/\d+\.+\d+|\d+|[\^+\*\-()/]/g).map((val) => {
				if(val != "undefined"){
					let isNaN = this.isReallyNaN(parseFloat(val));
					// console.log(val); console.log(this.hashCode(val));
					let isOperator = (val === "+" || val === "-" || val === "/" || val === "*" || val === "(" || val === ")" || val === "^");
					// push numbers to the prefixQueue
					if(!isNaN && !isOperator){
						prefixQueue.push(val);
					} else if(isNaN && isOperator) {
						// if we're at an operator
						let nextOperator = operatorStack[operatorStack.length-1];
						// at parenthases, we push everything from the operatorStack to the prefixQueue
						if(val === ")"){
							while(nextOperator != "("){
								prefixQueue.push(operatorStack.pop());
								nextOperator = operatorStack[operatorStack.length-1];
							}
							// get rid of trailing paren from the operatorStack
							operatorStack.pop();
						// dealing with left associative operators
						} else if(
							((val === "+" || val === "-") && (nextOperator === "*" || nextOperator === "/"))
							|| ((val === "*" || val === "/") && (nextOperator === "/" || nextOperator === "*"))
						){
							prefixQueue.push(operatorStack.pop());
							operatorStack.push(val);
						} else {
							operatorStack.push(val);
						}
				}
				prefixQueueStack.push(Array.from(prefixQueue));
				timeOperatorStack.push(Array.from(operatorStack));
			}
		});
		while(operatorStack.length > 0){
			prefixQueue.push(operatorStack.pop());
		}
		timeOperatorStack.push(Array.from(operatorStack));
		ret = {prefixQueue: prefixQueue, operators: timeOperatorStack, prefixes: prefixQueueStack }
		return ret;
	}

}
// 3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3

export default trainShunting;
