export const displayButtonText = () => dispatch => {
 dispatch({
  type: 'DISPLAY_TEXT',
  payload: 'Coucou'
 })
}

export const displayTextarea = (input) => dispatch => {
  dispatch({
      type: 'CONVERT',
      input: input
  })
}

export const hideButtonText = () => dispatch => {
 dispatch({
  type: 'DISPLAY_TEXT',
  payload: ''
 })
}