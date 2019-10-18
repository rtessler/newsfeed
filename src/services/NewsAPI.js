import config from '../config'

const NewsAPI = {

    load: () => {

        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + config.NEWS_API_KEY

        return fetch(url)
                .then(response => response.json())
                .then(data => {

                    //console.log('newsAPI.load data: ', data) // Prints result from `response.json()` in getRequest

                    return data
                })
                .catch(error => {
                    console.error(error)
                    throw error
                })
    }
}

export default NewsAPI