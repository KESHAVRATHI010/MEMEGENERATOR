const memegenertor= document.querySelector(".meme-gen");
const memegenertorbtn= document.querySelector(".meme-gen-btn");
const memeimg= document.querySelector(".meme-gen img");
const memetitle= document.querySelector(".meme-title");
const memeauthor= document.querySelector(".gen-meme-author");

const updateDetails =(url,title,author)=>{
    memeimg.setAttribute("src",url);
    memetitle.innerHTML=title;
    memeauthor.innerHTML=`Meme by :${author}`;
}
const generatememe = ()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
    .then( data=> {
        updateDetails(data.url,data.title,data.author)
    })
};
memegenertorbtn.addEventListener("click",generatememe)