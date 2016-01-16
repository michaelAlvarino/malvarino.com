import React, {Component, PropTypes} from 'react'

export default class CalculatorDescription extends Component{
  render(){
    return(
      <div className="CalculatorDescription">
        <p>
          {"Hey there and welcome to my calculator. I know it seems silly, because a calculator is so simple, but mine is a little different. You see most calculators give you a solution, mine gives you the intermediate steps that computers go through to calculate expressions. What it does is go through the "}<a href="https://en.wikipedia.org/wiki/Shunting-yard_algorithm">{"Shutnting Yard Algorithm"}</a>{" to break down an expression, then reconstruct its solution."}
        <br/><br/>
          {"If you look below I also display the intermediary arrays/stacks/queues that I use."}
        </p>
      </div>
    );
  }
}
