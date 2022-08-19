const fromLang = document.getElementById("from-lang");
const toLang   = document.getElementById("to-lang");

for(let lang in languages){
    // console.log(lang,languages[lang]);

    let options = `<option value=${lang}>${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML("beforeend",options);
    toLang.insertAdjacentHTML("beforeend",options);

    fromLang.value = "tr-TR";
    toLang.value   = "en-GB";

}
