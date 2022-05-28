const initState = {
    name: '',
}

const forusername=(state=initState,action)=>{
    if(action.type=='CHANGE'){
        return{
            ...state,
            name: action.payload,
        }
    }
}

export default forusername;