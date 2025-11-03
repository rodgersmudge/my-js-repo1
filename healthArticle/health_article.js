var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET',url,true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById("articles");

    //iterating healthdata to fetch on front page

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways_to_achieve';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(way => {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitHeader = document.createElement('h3');
        benefitHeader.textContent = 'Benefits';

        var benefitList = document.createElement('ul');
        article.benefits. forEach(list => {
            var benefitItem = document.createElement('li');
            benefitItem.textContent = list;
            benefitList.appendChild(benefitItem);
});

articleDiv.appendChild(title);
articleDiv.appendChild(description);
articleDiv.appendChild(waysHeader);
articleDiv.appendChild(waysList);
articleDiv.appendChild(benefitHeader);
articleDiv.appendChild(benefitList);

articlesDiv.appendChild(articleDiv);


    });
        
}

xhr.send();