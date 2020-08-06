$(document).ready(function() {
  // NEWS TITLES PRODUCE-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  $(function() {
    var listitems = [
        '日本首相就财务省篡改“森友学园”审批文件道">日本首相就财务省篡改“森友学园”审批文件道',
        '美国“232调查”或将重创日本汽车业">美国“232调查”或将重创日本汽车业',
        '2018国际体育用品博览会闭幕 小状元轮滑引领时尚">2018国际体育用品博览会闭幕 小状元轮滑引领时尚',
        '跑步游泳骑行 腾讯全栖运动智能手表P1亮相京东">跑步游泳骑行 腾讯全栖运动智能手表P1亮相京东',
        'The Comic Run动漫跑 带你实现英雄梦">The Comic Run动漫跑 带你实现英雄梦',
        '世界杯战火一触即发 《足球大师2018》新版本鏖战俄罗">世界杯战火一触即发 《足球大师2018》新版本鏖战俄罗'
      ],
      x = '',
      list = document.querySelector('ul.recomm');
    for (var x = 0; x < listitems.length; x++) {
      var lists = document.createElement('li'),
        links = document.createElement('a');
      lists.setAttribute('class', 'list counter sgl-line f-l w-100');
      links.setAttribute('href', '/list');
      links.innerHTML += listitems[x];
      lists.appendChild(links);
      list.appendChild(lists);
    }
  })

  // MINI-THUMBS IMAGE AND TITLE PRODUCE-------------------------------------
  $(function() {
    var request = new XMLHttpRequest(),
      arts = $('.tri-grids-cards'),
      item = 0,
      set = 0;
    request.open('GET', 'js/thumbs.json', true)
    request.onload = function() {
      // begin accessing JSON data here
      var data = window.JSON.parse(this.response),
        container = document.querySelector('.article-container');
      arts.find('.grid').each(function() {
        item++
        function setGrid() {
          var div_cont = document.createElement('div'),
            img_content = document.createElement('div'),
            img_container = document.createElement('div'),
            txt_container = document.createElement('div'),
            a = document.createElement('a'),
            a_tit = document.createElement('a'),
            img = document.createElement('img');
          div_cont.setAttribute('class', 'div-container f-l w-100');
          img_content.setAttribute('class', 'img-content thumb-small f-l');
          img_container.setAttribute('class', 'img-container');
          a.setAttribute('class', 'd-block');
          a.setAttribute('href', './content.html');

          function setAttributes(src, alt) {
            for (var key in alt) {
              src.setAttribute(key, alt[key]);
            }
          }

          setAttributes(img, {
            'src': data[i].img,
            'alt': data[i].title
          })

          txt_container.setAttribute('class', 'text-container f-l pos-rel');
          a_tit.setAttribute('class', 'title d-block');
          a_tit.setAttribute('href', './content.html');
          a_tit.innerHTML = data[i].title;
          txt_container.appendChild(a_tit);
          a.appendChild(img);
          img_container.appendChild(a);
          img_content.appendChild(img_container);
          div_cont.innerHTML += img_content.outerHTML + txt_container.outerHTML;
          $('.col' + item + ' .article-container').append(div_cont);
          // container.appendChild(div_cont);
          // $('.grid:nth-of-type(' + item + ') .article-container').append(div_cont);
        }
        for (var i = set; i < (set + 4); i++) {
          // console.log(data[i].img + ' is a ' + data[i].title + '.')
          setGrid()
        }
        set += 4;
      })
    }
    request.send()
  })

  // POST HEADLINES---------------------------------------------------------
  // $(function() {
  //   var request = new XMLHttpRequest(),
  //     newshead = document.getElementsByClassName('headline'),
  //     newstxt = document.getElementsByClassName('head-content');
  //   request.open('GET', 'js/title-news.json', true)
  //   request.onload = function() {
  //     var data = JSON.parse(this.response);
  //     for (var i = 0; i < newshead.length; i++) {
  //       newshead[i].innerHTML = data[i].titles;
  //       newstxt[i].innerHTML = data[i].descs;
  //     }
  //   }
  //   request.send()
  // })

  // POST GRIDS ---------------------------------------------------------
  $(function() {
    var request = new XMLHttpRequest(),
      grid_tit = document.getElementsByClassName('grid-title'),
      grid_desc = document.getElementsByClassName('grid-desc'),
      grid_img = document.getElementsByClassName('grid-imgs'),
      nc_tit = document.getElementsByClassName('news-title'),
      nc_desc = document.getElementsByClassName('news-desc'),
      nc_img = document.getElementsByClassName('nc-img'),
      x = 4;

    request.open('GET', 'js/title-news.json', true)
    request.onload = function() {
      try {
        var data = JSON.parse(this.response);
        for (var i = 0; i < grid_tit.length; i++) {
          grid_tit[i].innerHTML = data[x].titles;
          grid_desc[i].innerHTML = data[x].descs;
          grid_img[i].setAttribute('src', data[x].img);
          grid_img[i].setAttribute('alt', data[x].titles);
          x++;
        }
        x += 12;
        for (var i = 0; i < nc_tit.length; i++) {
          nc_desc[i].innerHTML = data[x].descs;
          nc_tit[i].innerHTML = data[x].titles;
          nc_img[i].setAttribute('src', data[x].img);
          nc_img[i].setAttribute('alt', data[x].titles);
          x++;
        }

      } catch (e) {
        for (var i = 0; i < nc_tit.length; i++) {
          nc_tit[i].innerHTML = data[x].titles;
          nc_img[i].setAttribute('src', data[x].img);
          nc_img[i].setAttribute('alt', data[x].titles);
          x++;
        }
      }
    }
    request.send()
  });

  // HOME POST-GRID BOTTOM----------------------------------------------------
  $(function() {
    var request = new XMLHttpRequest(),
      img = document.getElementsByClassName("card_img"),
      img_link = document.getElementsByClassName("grid-thumbs"),
      title = document.getElementsByClassName("card_title"),
      desc = document.getElementsByClassName("card_excerpt"),
      x = 0;
    // alert(img)

    request.open('GET', 'js/title-news.json', true)
    request.onload = function() {
      var data = JSON.parse(this.response);

      for (var i = 0; i < img.length; i++) {
        console.log(data[x].medimg)
        img[i].setAttribute('src', data[x].medimg);
        img[i].setAttribute('alt', data[x].titles);
        title[i].innerHTML = data[x].titles;
        desc[i].innerHTML = data[x].descs;
        x++;
      }
    }
    request.send()
  })

});