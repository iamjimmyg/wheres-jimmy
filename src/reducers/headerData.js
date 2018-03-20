export default function(state = {
  headerSelected: 'home'
}, action) {
  if(action.type === 'HEADER_SELECT'){
    state.headerSelected = action.payload
  }

  return state
}
