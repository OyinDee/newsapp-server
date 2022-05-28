const changename=(newusername)=>{
    return{
        type: 'CHANGE',
        payload: newusername
    }
}

export {changename}