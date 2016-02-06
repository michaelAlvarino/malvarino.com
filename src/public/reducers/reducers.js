import trainShunting from '../dataStructures/trainShunting'
import calcaulate from '../actions/calcActions'

const defState = {
  solution: 0,
  prefixQueue: [],
  operators: [],
  prefixes: []
}

window.trainShunting = trainShunting;

function reducer(state = defState, action) {
  switch (action.type){
    case "CALCULATE":
      return {calculator: trainShunting.calculate(action.expression)}
    default:
      return state
  }
}

export default reducer;
