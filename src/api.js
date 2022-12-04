import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            // Access key has been removed for public access
            Authorization: 'Client-ID ACCESS_KEY_REDACTED'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;

};

export default searchImages;
