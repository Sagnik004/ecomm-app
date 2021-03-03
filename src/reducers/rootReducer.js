const initialState = {
  productsWithCategory: [
    {
      category: "Sports",
      details: [
        {
          sku: 1001,
          price: "$49.99",
          description: "Football Size 5",
          image: "https://source.unsplash.com/_AOL4_fDQ3M/345*160"
        },
        {
          sku: 1002,
          price: "$19.99",
          description: "Baseball Ball Foam",
          image: "https://source.unsplash.com/gNYQxI5ufII/345*160"
        },
        {
          sku: 1003,
          price: "$9.49",
          description: "Basketball S500 Size 7",
          image: "https://source.unsplash.com/BfphcCvhl6E/345*160"
        },
        {
          sku: 1004,
          price: "$59.99",
          description: "Hiking Waterproof Shoes",
          image: 'https://source.unsplash.com/8iZvOp39rzw/345*160'
        }
      ]
    },
    {
      category: "Fashion",
      details: [
        {
          sku: 1050,
          price: "$49.79",
          description: "Run Dry T-Shirt",
          image: "https://source.unsplash.com/jXfpruvSHKk/345*160"
        },
        {
          sku: 1051,
          price: "$17.80",
          description: "Hat - Sweat Free",
          image: "https://source.unsplash.com/0PJZWB5RvwM/345*160"
        },
        {
          sku: 1052,
          price: "$115.65",
          description: "Blazer - Office Wear",
          image: "https://source.unsplash.com/jXzyR6tgd18/345*160"
        },
        {
          sku: 1053,
          price: "$17.80",
          description: "Tie with your blazer",
          image: "https://source.unsplash.com/Xy6FpnFyVjo/345*160"
        }
      ]
    },
    {
      category: "Electronics",
      details: [
        {
          sku: 1100,
          price: "$99.99",
          description: "iPod Music",
          image: "https://source.unsplash.com/ZM8DurjwH-8/345*160"
        },
        {
          sku: 1101,
          price: "$999.99",
          description: "iPhone 12 - Latest",
          image: "https://source.unsplash.com/2yIcl0B1LOw/345*160"
        },
        {
          sku: 1102,
          price: "$199.70",
          description: "Nexus 7 - Android",
          image: "https://source.unsplash.com/EAge0E9epX0/345*160"
        }
      ]
    }
  ],
  products: [
    { sku: 1001, price: 49.99, description: 'Football Size 5' },
    { sku: 1002, price: 19.99, description: 'Baseball Ball Foam' },
    { sku: 1003, price: 9.49, description: 'Basketball S500 Size 7' },
    { sku: 1004, price: 59.99, description: 'Hiking Waterproof Shoes' },
    { sku: 1050, price: 49.79, description: 'Run Dry T-Shirt' },
    { sku: 1051, price: 17.80, description: 'Hat - Sweat Free' },
    { sku: 1052, price: 115.65, description: 'Blazer - Office Wear' },
    { sku: 1053, price: 17.80, description: 'Tie with your blazer' },
    { sku: 1100, price: 99.99, description: 'iPod Music' },
    { sku: 1101, price: 999.99, description: 'iPhone 12 - Latest' },
    { sku: 1102, price: 199.70, description: 'Nexus 7 - Android' },
  ],
  cart: [],
  isLoggedIn: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productIndex = state.cart.findIndex(el => el.sku === action.skuId);
      if (productIndex !== -1) {
        let cartCopy = [...state.cart];
        cartCopy[productIndex].quantity = cartCopy[productIndex].quantity + 1;
        return {
          ...state,
          cart: cartCopy
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { sku: action.skuId, quantity: 1 }]
        }
      }
    case 'DECREMENT_QTY':
      const productInd = state.cart.findIndex(el => el.sku === action.skuId);
      let cartClone = [...state.cart];
      cartClone[productInd].quantity = cartClone[productInd].quantity - 1;
      return {
        ...state,
        cart: cartClone
      }
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state;
  }
}

export default rootReducer;
