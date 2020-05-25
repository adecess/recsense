import postRecipe from './request'

// post body data 
const data = {
    user_id: parseInt(document.querySelector('#recommendations').dataset.fraaiseid),
    from: window.location.href
};

const toFrame = (image_url, title, link, number) => {

    let parent_div = document.createElement('div');
    parent_div.setAttribute('class', 'parentImg');
    parent_div.setAttribute('id', `parentImg${number}`);
    document.querySelector("#recommendations").appendChild(parent_div);

    let ifrm = document.createElement('img');
    ifrm.setAttribute('id', `myIframe${number}`);
    ifrm.setAttribute('frameborder', '0');
    ifrm.setAttribute('scrolling', 'no');
    ifrm.setAttribute('class', "smallImg")
    document.querySelector(`#parentImg${number}`).appendChild(ifrm);

    let link_div = document.createElement('a');
    link_div.setAttribute('href', link);
    link_div.setAttribute('class', `recipe${number}`);

    link_div.innerText = title;
    document.querySelector(`#parentImg${number}`).appendChild(link_div);

    ifrm.setAttribute('src', image_url);

};

(async () => {
    console.log(data)
    const result = await postRecipe('https://fraaise2.herokuapp.com/api/recommendations/55', data);
    console.log(result);
    toFrame(result.recipe_1.image_url, result.recipe_1.title, result.recipe_1.recipe_url, 1);
    toFrame(result.recipe_2.image_url, result.recipe_2.title, result.recipe_2.recipe_url, 2);
    toFrame(result.recipe_3.image_url, result.recipe_3.title, result.recipe_3.recipe_url, 3);
  })();




