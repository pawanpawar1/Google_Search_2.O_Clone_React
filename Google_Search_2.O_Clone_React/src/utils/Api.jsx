//  src="https://cse.google.com/cse.js?cx=03aa65ac074de44cb"
//  src="https://cse.google.com/cse.js?cx=c06fe0dd71c394063"
// AIzaSyAsFvWYjguj3fxhyuokdWitkf5kJpGC9-w
import axios from 'axios'

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const param = {
  key: "AIzaSyAsFvWYjguj3fxhyuokdWitkf5kJpGC9-w",
  cx: "c06fe0dd71c394063",
};

export const fetchData = async (payload) => {
    const response = await axios.get(BASE_URL, {
        params: {...param, ...payload}
    })
    return response
}
