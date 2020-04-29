const postRecipe = async (id_site, user_id, from) => {
    // post body data 
    const user = {
        user_id: user_id,
        from: from
    };

    // request options
    const options = {
        method: 'POST',
        body: JSON.stringify(user)
    }

    const response = await fetch(`//fraaise.com/api/recommendations/${id_site}`, options);

    if(response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Unable to fetch data');
    }
}

export { postRecipe as default }