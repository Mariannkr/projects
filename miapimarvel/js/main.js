const marvel = {
    render:() =>{

        const urlApi ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=25e7cce347fa25a6c48f003422305921&hash=37c38b71096542903b443f55d66a9140';
        const container = document.querySelector('#marvel-row')
        let contentHTML = '';

        fetch(urlApi)
        .then(res => res.json())
        .then((json) => {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url; 
                contentHTML+= `
                <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
                </div>
                `
            }
            container.innerHTML= contentHTML;
        })

    }
};
marvel.render();