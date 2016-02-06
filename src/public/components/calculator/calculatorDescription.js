import React, {Component, PropTypes} from 'react'

export default class CalculatorDescription extends Component{
  render(){
    return(
      <div className="CalculatorDescription">
        <p>
          {"Hey there and welcome to my calculator. I know it seems silly, because a calculator is so simple, but mine is a little different. You see most calculators give you a solution, mine gives you the intermediate steps that computers go through to calculate expressions. This implements the "}<a href="https://en.wikipedia.org/wiki/Shunting-yard_algorithm">{"Shunting Yard Algorithm"}</a>{" to break down an expression into prefix notation, then evaluate the prefix notation to find the solution."}
        <br/><br/>
          {"Right now unfortunately all it handles is the basic operators * + - / ^, since it was more of a science project and I got the algorithm going, I don't have any plans at the moment to expand it to include more operators. You can find my code for the shunting yard algorithm "}<a href="https://github.com/michaelAlvarino/malvarino.com/blob/master/src/dataStructures/trainShunting.js">{"here"}</a>{"."}
        <br/><br/>
          {"If you look below I also display the intermediary arrays/stacks/queues that I use. In fact, on loading my javascript application I made the shunting yard object and associated functions available from the window object, so if you open the console and type trainShunting, you can go ahead and play with, or edit the object. Changes made to the global object won't be reflected in the calculator though."}
        </p>
      </div>
    );
  }
}
