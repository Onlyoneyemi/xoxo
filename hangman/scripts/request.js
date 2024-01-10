const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to fetch data.")
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch("https://restcountries.eu/rest/v2/all")

    if (response.status === 200) {
        const data = await response.json()
        const country = data.find((country) => country.alpha2code === countryCode)
        return country
    } else {
        throw new Error("Unable to fetch data!!")
    }
}

const getLocation = async () => {
    const response = await fetch("https://ipinfo.io/json?token=947d54489821ce")

    if (response.status === 200) {
        return data = await response.json()
    } else {
        throw new Error("Something went wrong.")
    }
}

const getCurrentCountry = async () => {
    const response = await fetch("https://ipinfo.io/json?token=947d54489821ce")

    if  (response.status === 200) {
        const data = await response.json()
        return country = getCountry(data.country)
    } else {
        throw new Error("Data not found.")
    }
}