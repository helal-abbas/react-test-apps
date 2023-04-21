import axios from 'axios'
export const createRequest = async (body: any) => {
    console.log(body)
    const response: any = await axios.post('http://127.0.0.1:8000/create', body, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res
    }).catch((error) => {
        console.error(error);
    })
    
    return response.data
}

export const editRequest = async (body: any) => {
    console.log(body)
    const response: any = await axios.put('http://127.0.0.1:8000/edit-data', body, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res
    }).catch((error) => {
        console.error(error);
    })
    
    return response.data;
}

export const readRequest = async () => {
    const response: any = await axios.get('http://127.0.0.1:8000/read-mockData', {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res
    }).catch((error) => {
        console.error(error);
    })
    
    return response.data
}