const initialState = {
    mark : 0,
    status: "fail",
}
const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'MARK_UPDATE':
            return {
                ...state,
                mark: action.payload,
            }
        case 'STATUS_UPDATE':
            return{
                ...state,
                status: action.payload,
            }
        default:
            return{
                ...state
            }
    }
}
export default reducer;