const fromLang      = document.getElementById("from-lang");
const toLang        = document.getElementById("to-lang");
const btnTranslate  = document.getElementById("btnTranslate");
const fromText      = document.getElementById("from-text");
const toText        = document.getElementById("to-text");
const exchange      = document.getElementById("exchange");
const icons         = document.querySelectorAll(".icons");

for(let lang in languages){

    let options = `<option value=${lang}>${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend",options);
    toLang.insertAdjacentHTML("beforeend",options);

    fromLang.value = "tr-TR";
    toLang.value   = "en-GB";

}

btnTranslate.addEventListener("click",() =>{

    let text = fromText.value;
    let from = fromLang.value;
    let to   = toLang.value;
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

    fetch(url)
    .then(response => response.json())
    .then(data => toText.value = data.responseData.translatedText);
});

