
var prevLanguage = localStorage.getItem('prevLang') || 'ku';

console.log(prevLanguage)

var translation = JSON.parse(localStorage.getItem('langs'));


const translate_words = (word) => {
    write(translation[prevLanguage]['dictionary'][word]);
};



const setLang = (language) => {
    localStorage.setItem('prevLang', language)
}


