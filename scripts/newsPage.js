const htmlNewsData = newsData.map(newsItem => {
    const newsDocsName = newsItem["положение"];
    const newsDocsImages = newsItem["картинка"];
    
    let newsText = newsItem["текст новости"];

    const SAVE_MARKUP_TEXT = '(сохр формат)';
    if (newsText.indexOf(SAVE_MARKUP_TEXT) === 0) {
        newsText = newsText.slice(SAVE_MARKUP_TEXT.length);
        newsText = newsText.replace (/[\n\r]/g, '<br />').replace (/\s{2,}/g, '<br />')
    }

    return `
    <div class="news__block chess_block">
        <h2 class="news__title">
            ${newsItem["заголовок новости"]}
        </h2>
        <p class="news__text">
        ${newsText}
        </p>
        ${newsDocsName ? `<button class="chess__button">
            <a target="_blank" href="docs/${newsDocsName}">
                Открыть положение
            </a>
        </button>` : ""}
        ${newsDocsImages ? `<div class="news__image"><img src="images/${newsDocsImages}" alt=""></div>` : ""}
    </div>
`;
});

document.querySelector('.wrapper_for_news_from_file').insertAdjacentHTML('beforeend', htmlNewsData.join(''));