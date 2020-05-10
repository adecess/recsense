import postRecipe from './request'

// post body data 
const data = {
    user_id: "140",
    from: "http://iletaitungateau.com/articles/356"
};

const toFrame = (image_url, number) => {
    let ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', `myIframe${number}`);
    ifrm.setAttribute('frameborder', '0');
    ifrm.setAttribute('scrolling', 'no');
    document.querySelector(".frames").appendChild(ifrm);

    ifrm.setAttribute('src', image_url);
}

(async () => {
    const result = await postRecipe('https://fraaise2.herokuapp.com/api/recommendations/55', data);
    console.log(result);
    toFrame(result.recipe_1.image_url, 1);
    toFrame(result.recipe_2.image_url, 2);
    toFrame(result.recipe_3.image_url, 3);
  })()




