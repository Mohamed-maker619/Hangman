const getPuzzle = async (num) => {
    const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${num}`)
        if(response.status === 200){
            const data = await response.json()
            return data[0]
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }
    
const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    if (response.status === 200){
        const data = await response.json()
        const index = data.findIndex((country) => country.cca2 === countryCode)
        return data[index].name.official
    } else{
        throw new Error("unable to fetch data")
    } 
}


const getLocation = async (ip) => {
    const response = await fetch(`https://ipinfo.io/41.38.121.76?token=${ip}`)
        if(response.status === 200){
            return response.json()
        }else {
            throw new Error("Unable to fetch data")
        }
    } 