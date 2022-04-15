export const initialState = {
    accountInfo:[],
  };
  
  
  function reducer(state, action) {
    
    switch (action.type) {
     
        case "SEND_DATA":
            return { ...state, accountInfo: [...state.accountInfo, action.item] };

    default:
      return state;
    }
  }
  
  export default reducer;
  