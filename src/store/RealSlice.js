import { createSlice } from '@reduxjs/toolkit'
import { data } from '../components/Data'
const RealSlice = createSlice({
    name: 'RealSlice',
    initialState: {
        property: data,
        value: [],
        filterData: []
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
        remove: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)
        },
        applyFilter: (state, action) => {
            if (action.payload.location) {
                state.filterData = state.property.filter((item) => item.address === action.payload.location)
            }
            if (action.payload.price) {
                let priceRange=action.payload.price;
                
                switch (priceRange) {
                    case "0-3000":
                        
                        state.filterData = state.filterData.filter(property => {
                            if (parseInt(property.price) <= 3000) return true
                        })
                        break;
                    case "3000-6000":
                        state.filterData = state.filterData.filter(property => {
                            if (parseInt(property.price) >= 3000 && parseInt(property.price) <= 6000) return true
                        })
                        break;
                    case "6000-10000":
                        state.filterData = state.filterData.filter(property => {
                            if (parseInt(property.price) >= 6000) return true
                        })
                        break;
                }
            }
            if (action.payload.property) {
                state.filterData = state.filterData.filter((item) => item.type === action.payload.property)
            }
        }
    }
})


export default RealSlice.reducer;
export const { add, remove,applyFilter} = RealSlice.actions;