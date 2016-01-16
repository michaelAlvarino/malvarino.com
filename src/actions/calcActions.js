/*
* Calculate action
*/
function calculate(expression){
	return {
		type: "CALCULATE",
		expression: expression
	}
}

export default calculate;
