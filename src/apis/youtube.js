// AIzaSyB1asTx3qw9lJlVjMerU4PMdK6ATdvymEo
import axios from 'axios'

const KEY = 'AIzaSyB1asTx3qw9lJlVjMerU4PMdK6ATdvymEo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})