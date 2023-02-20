


export default (state,action)=>{
    if(action.type === "DELETE"){
        return {
            ...state,
        transactions: state.transactions.filter(item=> item.id  !== action.payload)

        }
    }
    if(action.type === "ADD"){
        return{
            ...state,
            transactions:[action.payload,...state.transactions]
        }
    }else{
        return state;
    }
}