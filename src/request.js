const postRecipe = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const returnData = await response.json();
        console.log(returnData);
    } catch (error) {
        console.log('C\'est la merde mon coco!');
    }
}

export { postRecipe as default }