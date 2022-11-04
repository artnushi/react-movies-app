export const ACTION_INCREMENT_TYPE = "INCREMENT_TYPE";

export const handleActionIncrementType = () =>  ({
    type: ACTION_INCREMENT_TYPE
})

const initialState = {
    countValue: 1,
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_INCREMENT_TYPE:
            return {
                countValue: state.countValue + 1
            }
        default:
            return state
    }
}

export default counterReducer;