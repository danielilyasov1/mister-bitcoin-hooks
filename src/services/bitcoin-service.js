import axios from 'axios'
export const bitCoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins){
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return res.data
}

async function getMarketPrice(){
    const res = await axios.get(`https://www.blockchain.com/charts/market-price`)
    return res.data
}

async function getConfirmedTransactions(){
    const res = await axios.get(`https://www.blockchain.com/charts/trade-volume`)
    return res.data
}