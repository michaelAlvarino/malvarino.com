export default class Bst{
	constructor(expression){
		this.operation = [];
		this.values = [];
		this.output = [];
	}

	parse(str){
		// easier to treat these arrays like queues than to reverse them?
		this.values = str.match(/(?:\d*\.)?\d+/g).map((val) => {
			return val.trim();
		});
		this.operations = str.match(/[()+\-/*]/g).map((op) => {
			return op.trim();
		});
		console.log(this.values);
		console.log(this.operations);
		this.calc(this.operations,this.values);
	}
	calc(ops,vals){
		while(!ops.isEmpty()
			&& !vals.isEmpty()){
			this.output.push(ops.shift());
			this.output.push(vals.shift());
		}
		console.log(this.output);
	}
}
