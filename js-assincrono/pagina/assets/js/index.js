const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const botao = document.querySelector(".botao");

const newCat = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;

    } catch (err) {
        console.log(err.message);
    }

};

const carregaImagem = async() => {
    const imagem = document.querySelector(".cat-img");
    imagem.src = await newCat();
};

botao.addEventListener('click', carregaImagem);

carregaImagem();