import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    from: 'USD',
    to: 'TWD',
    fromAmount: null,
    toAmount: null,
    isLoading: false,
    error: false,
    timesmap: 0,
}

// Set the header and request option for fetching data
const myHeaders = new Headers();
myHeaders.append('apikey', 'vHgd21agWwS5oDBaZmX7v7AWloMq38VS');

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
}

// In the Redux Toolkit, use `createAsyncThunk` and asynchronous function to fetch data 
export const fetchData = createAsyncThunk('fetchData', async convertInfo => {
    const response = await fetch(`https://api.apilayer.com/currency_data/convert?to=${convertInfo.to}&from=${convertInfo.from}&amount=${convertInfo.fromAmount}`, requestOptions)
    const data = response.json()

    return data //@Hack: Returning the fetched data will be exported with the action of `fecthData`.
})

const convertSlice = createSlice({
    name: 'convert',
    initialState,
    reducers: {
        setFrom: (state, action) => {
            return {
                ...state,
                from: action.payload
            }
        },
        setTo: (state, action) => {
            return {
                ...state,
                to: action.payload
            }
        },
        setAmount: (state, action) => {
            return {
                ...state,
                fromAmount: action.payload
            }
        },
        exchange: (state, action) => {
            return {
                ...state,
                from: action.payload.tempTo,
                to: action.payload.tempFrom,
                toAmount: null
            }
        },
        reset: state => {
            return {
                ...state,
                fromAmount: null,
                toAmount: null,
            }
        }
    },
    // Create extra reducers with a parameter called 'builder' and addCase()
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            //@Hack: After dipatching `fetchData` in other components,
            // The fetched data will be passed to `action.payload`.
            state.toAmount = action.payload.result
            state.timesmap = action.payload.info.timestamp
        })

        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = true
        })
    }
})

export const { setFrom, setTo, setAmount, exchange, reset } = convertSlice.actions

export default convertSlice.reducer