import postRecipe from './request'

// post body data 
const data = {
    user_id: "140",
    from: "http://iletaitungateau.com/articles/356"
};

console.log(postRecipe('https://fraaise2.herokuapp.com/api/recommendations/55', data));