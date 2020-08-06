$(document).ready(function() {
  // FETCH ROWS OF THUMBS AND TITLES IN LIST PAGE-----------------------------
  $(function() {
    var request = new XMLHttpRequest(),
      img = document.getElementsByClassName("listthumb-img"),
      leftcol = document.querySelector(".leftcol"),
      title = document.getElementsByClassName("title"),
      exerpt = document.getElementsByClassName("excerpt"),
      x = 0;

    request.open('GET', 'js/title-news.json', true)
    request.onload = function() {
      var data = JSON.parse(this.response);
      for (var i = 0; i < 18; i++) {
        let listrow = document.querySelector(".list-row").cloneNode(true);
        img[i].setAttribute('src', data[i].smimg);
        title[i].innerHTML = data[i].titles;
        exerpt[i].innerHTML = data[i].descs;
        leftcol.appendChild(listrow);
        x++;
      }
    }
    request.send()
  })

  // GET TITLES FOR RECOMMENDED TITLES----------------------------------------
  $(function() {
    var getlist = new XMLHttpRequest(),
      ul = document.querySelector('.title-list'),
      x = 19;

    getlist.open('GET', 'js/title-news.json', true)
    getlist.onload = function() {
      var list = JSON.parse(this.response);
      for (var i = 0; i < 6; i++) {
        var li = document.createElement('li'),
          a = document.createElement('a');
        li.setAttribute('class', 'd-block center-left');
        a.setAttribute('href', './content.html');
        a.setAttribute('class', 'd-block sgl-line')
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
      div = document.querySelector('.hot-titles'),
      x = 25;

    fetch.open('GET', 'js/title-news.json', true)
    fetch.onload = function() {
      var data = JSON.parse(this.response);
      for (var i = 0; i < 10; i++) {
        var div_conts = document.createElement('div'),
          a = document.createElement('a'),
          span = document.createElement('span');

        div_conts.setAttribute('class', 'hot-container f-l w-100');
        a.setAttribute('href', './content.html');
        a.setAttribute('class', 'title dbl-line');
        span.setAttribute('class', 'date d-block');
        span.innerHTML = data[x].dates;
        a.innerHTML = data[x].titles;
        div_conts.innerHTML += a.outerHTML + span.outerHTML;
        div.appendChild(div_conts);
        x++;
      }
    }
    fetch.send()
  })
})