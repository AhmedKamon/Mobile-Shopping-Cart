export const Reducer = (state, action) => {
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            item: state.item.filter((currElm) => {
                return currElm.id !== action.payload;
            }),
        }
    }


    if (action.type === 'CLEAR_CART') {
        return { ...state, item: [] };
    }

    if (action.type === 'INCREMENT') {
        let updatedCart = state.item.map((currElm) => {
            if (currElm.id === action.payload) {
                return {
                    ...currElm, quantity: currElm.quantity + 1
                };
            }
            return currElm
        })
        return { ...state, item: updatedCart }
    }

    if (action.type === 'DECREMENT') {
        let updatedCart = state.item.map((currElm) => {
            if (currElm.id === action.payload) {
                return {
                    ...currElm, quantity: currElm.quantity - 1
                };
            }
            return currElm
        }).filter((currElm) => {
            return currElm.quantity !== 0
        })
        return {
            ...state, item: updatedCart
        };
    }


    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
            (accum, curVal) => {
                let { price, quantity } = curVal;

                let updatedTotalAmount = price * quantity;
                accum.totalAmount += updatedTotalAmount;

                accum.totalItem += quantity;
                return accum;
            },
            {
                totalItem: 0,
                totalAmount: 0,
            }
        );
        return { ...state, totalItem, totalAmount };
    }

    return state;
};