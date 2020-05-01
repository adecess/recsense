// post body data 
const user = {
    user_id: 140,
    from: "http://iletaitungateau.com/articles/356"
};

// request options
const options = {
    method: 'POST',
    mode: 'cors',
    headers:{
        'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify(user)
}

const postRecipe = async (id_site) => {
    const response = await fetch(`https://fraaise2.herokuapp.com/api/recommendations/${id_site}`, options);

    if(response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Unable to fetch data');
    }
}

export { postRecipe as default }