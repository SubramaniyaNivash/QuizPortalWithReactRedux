const markUpdateAction = (payload) => {
    return {
        type: 'MARK_UPDATE',
        payload,
    }
}
const gradeUpdateAction = (payload) => {
    return{
        type: 'STATUS_UPDATE',
        payload,
    }
}