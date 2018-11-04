const initialVolumes = {
  category: '',
  width: 0,
  depth: 0,
  waterfalls: 0,
}

export default (state=initialVolumes, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...initialVolumes,
        category: action.category
      }
    case 'SET_VOLUME':
      return {
        ...state,
        width: action.width,
        depth: action.depth,
        waterfalls: action.waterfalls || 0
      }
    case 'RESET_PRICING_INPUT':
      return initialVolumes
    default:
      return state
  }
}
