const latestNews = newsData[0];
let mainPageNews = latestNews["текст новости"];

const SAVE_MARKUP_TEXT = '(сохр формат)';
if (mainPageNews.indexOf(SAVE_MARKUP_TEXT) === 0) {
    mainPageNews = mainPageNews.slice(SAVE_MARKUP_TEXT.length);
    mainPageNews = mainPageNews.replace (/[\n\r]/g, '<br />').replace (/\s{2,}/g, '<br />')
}

document.querySelector('.news__title').innerHTML = latestNews["заголовок новости"];
document.querySelector('.news__text').innerHTML = mainPageNews;
if (latestNews["положение"]) {
    document.querySelector('.boxing__button').children[0].setAttribute("href", `docs/${latestNews["положение"]}`);
}
if (latestNews["картинка"]) {
    document.querySelector('.news__image').children[0].setAttribute("src", `images/${latestNews["картинка"]}`);
}