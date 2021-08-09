import { combineReducers } from 'redux'
import listsReducer from './lists/listsReducer'
import cardsReducer from './cards/cardsReducer'
import boardsReducer from './boards/boardsReducer'
import boardOrderReducer from './boards/boardOrderReducer'
import activeBoardReducer from './boards/activeBoardReducer'

export const rootReducer = combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer,
})
