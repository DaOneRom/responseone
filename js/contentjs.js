$(document).ready(function() {


  // GET JSON FOR ARTICLE-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

  $(function() {
    var article = new XMLHttpRequest(),
      wrap = document.getElementsByTagName("article");

    article.open('GET', 'js/article.json', true)
    article.onload = function() {
      var post = JSON.parse(this.response);
      for (var i = 0; i < 1; i++) {
        var img = document.querySelector(".img-content.article-img img"),
          bread = document.querySelector(".breadcrumb-item.active"),
          //     title = document.querySelector("h1.title"),
          //     date = document.querySelector(".article-date"),
          //     time = document.querySelector(".article-tme"),
          //     user = document.querySelector(".user"),
          //     source = document.querySelector(".source"),
          //     tip = document.querySelector(".tip"),
          //     content = document.querySelector(".main-content");
          //
          // title.innerHTML = post[i].titles;
          // date.innerHTML = post[i].dates;
          // time.innerHTML = post[i].times;
          // user.innerHTML = post[i].authors;
          // source.innerHTML = post[i].sources;
          // tip.innerHTML = post[i].excerpts;
          // content.innerHTML = post[i].descs;
          // item = ['h1.title', '.article-date', '.article-tme', '.user', '.source', '.tip', '.main-content'],
          // jsonitem = [titles, dates, times, authors, sources, excerpts, descs];
          selectorsByProp = {
            titles: 'h1.title',
            dates: '.article-date',
            times: '.article-tme',
            authors: '.user',
            sources: '.source',
            excerpts: '.tip',
            descs: '.main-content'
          };
        // $(function(selectorsByProp).forEach(([prop, selector])){
        //   document
        // })
        //
        // Object.entries(selectorsByProp).forEach(([prop, selector]) => {
        //     document.querySelector(selector).innerHTML = post[i][prop];
        // });
        // for (var x = 0; x < item.length; x++) {
        //     var jsonitem[x] = document.querySelector(item[x]);
        //     console.log(jsonitem[x])
        // };

        // var prop = '';
        for (prop in selectorsByProp) {
          document.querySelector(selectorsByProp[prop]).innerHTML = post[i][prop];
        };

        // Object.entries(selectorsByProp).forEach(function(entry) {
        //     var selector = entry[0];
        //     var prop = entry[1];
        //     document.querySelector(selector).innerHTML = post[i][prop];
        // });


        function setAttributes(src, alt) {
          for (var key in alt) {
            src.setAttribute(key, alt[key]);
          }
        }

        setAttributes(img, {
          'src': post[i].imgs,
          'alt': post[i].titles
        })

        bread.innerHTML = post[i].titles;
      }
    }
    article.send();
  })


  // FETCH DATA FOR LIST - CARD-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
  $(function() {
    var lists = new XMLHttpRequest(),
      barrel = document.querySelector('.list-card-container');

    for (var x = 0; x < 10; x++) {
      barrel.insertAdjacentHTML('beforeend', '<div class="list-card f-l w-100 pos-rel"> <div class = "img-content list-thumb f-l"> <div class="img-container"> <a href="./content.html"> <img class="listthumb-img"></a></div></div><div class="text-content f-l"><a href="./content.html" class="titlelist d-block sgl-line m-bot-10"></a><span class="excerpt tpl-line"></span></div></div>');
    }

    lists.open('GET', 'js/title-news.json', true)
    lists.onload = function() {
      var list = JSON.parse(this.response);
      for (var i = 0; i < 10; i++) {
        var thumblist = document.getElementsByClassName('listthumb-img'),
          title = document.getElementsByClassName('titlelist'),
          excerpt = document.getElementsByClassName('excerpt');
        // propSelects = {
        //     titles: 'a.title',
        //     descs: '.excerpt',
        // };
        //
        // for (prop in propSelects) {
        //     document.querySelector(propSelects[prop]).innerHTML += list[i][prop];
        //     console.log(list[i])
        //
        // };


        // function setAttributes(src, alt) {
        //     for (var key in alt) {
        //         src.setAttribute(key, alt[key]);
        //     }
        // }
        //
        // setAttributes(thumblist, {
        //     'src': list[i].smimg,
        //     'alt': list[i].titles
        // })

        title[i].innerHTML += list[i].titles;
        excerpt[i].innerHTML += list[i].descs;
        thumblist[i].setAttribute('src', list[i].smimg);
        thumblist[i].setAttribute('alt', list[i].titles);
      }
    }
    lists.send();
  })

  // $(function() {
  //     var fetcher = new XMLHttpRequest(),
  //         parent = document.querySelector(".list-card-container");
  //
  //     fetcher.open('GET', 'js/title-news.json', true)
  //     fetcher.onload = function() {
  //         var post = JSON.parse(this.response);
  //         // for (var i = 0; i < 1; i++) {
  //         const makeHTML = ({
  //             smimg,
  //             titles,
  //             descs
  //         }) => `
  //             <div class="list-card f-l w-100 pos-rel"> <div class="img-content list-thumb f-l"> <div class="img-container"> <a href="./content.html"> <img src="${smimg}" alt="${titles}" class="listthumb-img"></a> </div> </div> <div class="text-content f-l"> <a href="./content.html" class="title d-block sgl-line m-bot-10">${descs}</a> <span class="excerpt tpl-line">${descs}</span> </div> </div>
  //             `;
  //         post.slice(0, 10).forEach((item) => {
  //             parent.insertAdjacentHTML('beforeend', makeHTML(item));
  //         });
  //     }
  //     fetcher.send();
  // })

  // GET TITLES FOR RECOMMENDED TITLES----------------------------------------
  $(function() {
    var getlist = new XMLHttpRequest(),
      ul = document.querySelector(".title-list"),
      x = 19;

    getlist.open('GET', 'js/title-news.json', true)
    getlist.onload = function() {
      var list = JSON.parse(this.response);
      for (var i = 0; i < 6; i++) {
        var li = document.createElement("li"),
          a = document.createElement("a");
        li.setAttribute("class", "d-block center-left");
        a.setAttribute("href", "./content.html");
        a.setAttribute("class", "d-block sgl-line")
        a.innerHTML = list[x].titles;
        li.appendChild(a);
        ul.appendChild(li);
        x++;
      }
    }
    getlist.send()
  })

  // FETCH TITLES FOR HOT TRENDS----------------------------------------------
  $(function() {
    var fetch = new XMLHttpRequest(),
      div = document.querySelector(".hot-titles"),
      x = 25;

    fetch.open('GET', 'js/title-news.json', true)
    fetch.onload = function() {
      var data = JSON.parse(this.response);
      for (var i = 0; i < 10; i++) {
        var div_conts = document.createElement("div"),
          a = document.createElement("a"),
          span = document.createElement("span");

        div_conts.setAttribute("class", "hot-container f-l w-100");
        a.setAttribute("href", "./content.html");
        a.setAttribute("class", "title dbl-line");
        span.setAttribute("class", "date d-block");
        span.innerHTML = data[x].dates;
        a.innerHTML = data[x].titles;
        div_conts.innerHTML += a.outerHTML + span.outerHTML;
        div.appendChild(div_conts);
        x++;
      }
    }
    fetch.send()
  })

  // DISREGARD NAVIGATION MENU IN THE FOOTER----------------------------------
  $(function() {
    document.querySelector('.nav-container').style.display = "none";
  })
})