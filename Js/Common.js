let categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
]
let category = "";

let countries = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za"
]
let country = countries[50];
LoadSelect();
LoadArticles(1000);

function LoadArticles(timeout){
    setTimeout(() => {
        category = categories[0];
        fetch(new Request(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fab4c0fab613428ebd82bbbde3f0f750`))
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        })
        .then((news) => {    
            RenderRowOfNews(news);
            setTimeout(() => {
                category = categories[1];
                fetch(new Request(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fab4c0fab613428ebd82bbbde3f0f750`))
                .then(response => response.json())
                .catch(error => {
                    console.log(error);
                })
                .then((news) => {    
                    RenderRowOfNews(news);
                    setTimeout(() => {
                        category = categories[2];
                        fetch(new Request(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fab4c0fab613428ebd82bbbde3f0f750`))
                        .then(response => response.json())
                        .catch(error => {
                            console.log(error);
                        })
                        .then((news) => {    
                            RenderRowOfNews(news);
                            setTimeout(() => {
                                category = categories[3];
                                fetch(new Request(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fab4c0fab613428ebd82bbbde3f0f750`))
                                .then(response => response.json())
                                .catch(error => {
                                    console.log(error);
                                })
                                .then((news) => {    
                                    RenderRowOfNews(news);
                                    setTimeout(() => {
                                        category = categories[4];
                                        fetch(new Request(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fab4c0fab613428ebd82bbbde3f0f750`))
                                        .then(response => response.json())
                                        .catch(error => {
                                            console.log(error);
                                        })
                                        .then((news) => {    
                                            RenderRowOfNews(news);
                                            setTimeout(() => {
                                                category = categories[5];
                                                fetch(new Request(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fab4c0fab613428ebd82bbbde3f0f750`))
                                                .then(response => response.json())
                                                .catch(error => {
                                                    console.log(error);
                                                })
                                                .then((news) => {    
                                                    RenderRowOfNews(news);
                                                    setTimeout(() => {
                                                        category = categories[6];
                                                        fetch(new Request(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fab4c0fab613428ebd82bbbde3f0f750`))
                                                        .then(response => response.json())
                                                        .catch(error => {
                                                            console.log(error);
                                                        })
                                                        .then((news) => {    
                                                            RenderRowOfNews(news);                                                        
                                                        });
                                                    }, timeout);
                                                });
                                            }, timeout);
                                        });
                                    }, timeout);
                                });
                            }, timeout);
                        });
                    }, timeout);
                });
            }, timeout);
        });
    category = categories[0];
    },timeout)
}

function RenderRowOfNews(news){
    let endPoint = 4;
    if(news.articles.length<4){
        endPoint = news.articles.length;
    } 

    for (let i = 0; i < endPoint; i++) {
        let mainDiv = document.getElementById(category);

        let title = news.articles[i].title;
        let author = "";

        if(news.articles[i].author!=null){
            author = news.articles[i].author;
        }
        else{
            author = news.articles[i].source.name;
        }

        let urlToImg = news.articles[i].urlToImage;
        let description = news.articles[i].description;
        let urlToArticle = news.articles[i].url;
        let source = news.articles[i].source.name;
        let time = `${news.articles[i].publishedAt.substring(0,10)} ${news.articles[i].publishedAt.substring(11,16)}`;

        mainDiv.innerHTML += 
        `
        <div class="card mb-3 w-25">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle text-muted">${author}</h6>
            </div>
            <img src=${urlToImg} width="100%">
            <div class="card-body">
                <p class="card-text">${description}</p>
            </div>
            <div class="card-body">
                <a href=${urlToArticle} target="_blank" class="btn btn-primary">Читати далі</a>
                <a href="https://${source.substring(0,source.lenght)}/" target="_blank" class="card-link">${source}</a>
            </div>
            <div class="card-footer text-muted">
                ${time}
            </div>
        </div>
        `
    }
}

function ClearMain(){
    categories.forEach(cat => {
        let mainDiv = document.getElementById(cat);
        mainDiv.innerHTML = "";
    })
}

function LoadSelect(){
    let select = document.getElementById("SelectCountry");

    countries.forEach(countryI => {
        let option = document.createElement("option");
        if(countryI == "ua"){
            option.setAttribute("selected","selected");
        }
        option.setAttribute("value",countryI);
        option.innerHTML = countryI;
        select.appendChild(option);
    })
}

var selection = document.getElementById("SelectCountry");
selection.addEventListener("change",changeOption);

function changeOption(){
    var selectedOption = selection.options[selection.selectedIndex];
    country = selectedOption.text;
    ClearMain();
    LoadArticles();
}