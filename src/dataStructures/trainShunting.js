
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
			str.match(/\d+\.+\d+|\d+|[+\*\-()]/g).map((val) => {
				if(val != "undefined"){
					let isNaN = this.isReallyNaN(parseFloat(val));
					// console.log(val); console.log(this.hashCode(val));
					var isOperator = (val === "+" || val === "-" || val === "/" || val === "*");
					// push numbers to the output stack
					if(!isNaN){
						output.push(val);
					} else if(isNaN && isOperator) {
						// if it's an operator of "equal precedence"
						// if it's + or -
						let topOfStack = output[output.length-1];
						if(val === ")"){
							while(topOfStack != "("){
								output.push(stack.pop());
								topOfStack = output[output.length-1];
							}
						} else if(
							((val === "+" || val === "-") && (topOfStack === "+" || topOfStack === "-"))
							|| ((val === "*" || val === "/") && (topOfStack === "/" || topOfStack === "*"))
						){
							output.push(stack.pop());
							output.push(val);
						}
						stack.push(val);
					// when we encounter a paren...
				} else if(hashCode(val) === hashCode("(")) {

				}
			}
		});
	}

}

export default trainShunting;
