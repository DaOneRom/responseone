$(document).ready(function() {
  // MENU
  $(function() {
    var navs = ['网站首页', '国际新闻', '国内新闻', '军事新闻', '社会新闻', '娱乐新闻', '财经新闻'],
      menu = document.querySelector("ul.abt-dropdown");

    for (var i = 0; i < navs.length; i++) {
      menu.insertAdjacentHTML('beforeend', '<li class="links"><a href="./list.html">' + navs[i] + '</a></li>');
    }
    menu.insertAdjacentHTML('beforeend', '<li class="search"><a href="javascript:void(0)"></a></li>');
    // document.querySelector('.abt-navbar').querySelector('ul.abt-dropdown').insertAdjacentHTML("beforebegin", "<span id='menutggle' class='test'></span>");

    // for (var i = 0; i < 3; i++) {
    //     var span = document.createElement('span');
    //     document.getElementById('menutggle').appendChild(span);
    // }

  })

  $(function() {
    var menutoggle = document.getElementById('menutggle'),
      menu = document.querySelector("ul.abt-dropdown");
    // document.getElementById('menutggle').addEventListener('toggle', function() {
    //     document.querySelector('.abt-dropdown').classList.add('active');
    //     // menudrop.classList.add('active')
    // })
    // menutoggle.classList.toggle(activeClass);
    // menutoggle.onclick = function(event) {
    //     menu.classList.toggle('active');
    //     menutoggle.classList.toggle('active');
    //
    //     event.preventDefault()
    // }
  })

  // FOOTER menu
  $(function() {
    var footernav = ['网站首页', '关于我们', '版权声明', '联系我们'],
      menu = document.querySelector('ul.abt-footernav');


    for (var i = 0; i < footernav.length; i++) {
      menu.insertAdjacentHTML('beforeend', '<li class="navitems d-inline-block"><a class="center-right">' + footernav[i] + '</a></li>')
    }

    $(function() {
      var home = menu.getElementsByTagName('li')[0],
        items = menu.getElementsByTagName('a'),
        link = home.getElementsByTagName('a')[0];
      link.setAttribute("href", "./index.html");

      for (var i = 1; i < footernav.length; i++) {
        items[i].setAttribute("href", "./list.html");
      }
    })
  })

  // SET HOVER EFFECT TO DROPDOWN
  $(function() {
    var submenu = document.querySelector('.menu-container'),
      menudrop = document.querySelector('.mini-dropdown');

    submenu.addEventListener("mouseover", function() {
      menudrop.classList.add('active')
    });
    submenu.addEventListener("mouseout", function() {
      menudrop.classList.remove('active')
    });
  })

  // MODIFY BREADCRUMB
  $(function() {
    var ppage = document.querySelector('.p-page'),
      bread_active = document.querySelector('.breadcrumb-item.active');

    ppage.innerHTML = '更多服务';
    bread_active.innerHTML = '关于我们';
  })
})