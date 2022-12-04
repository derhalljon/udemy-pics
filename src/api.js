import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            // Access key has been removed for public access
            Authorization: 'Client-ID y8GwOEyKsp6KQbdyp_WuJaXh22SQgfyZUGTUj0b2py4'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;

};

export default searchImages;
