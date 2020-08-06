$(document).ready(function() {

  // POSTS DATES-------------------------------------------------------------
  $(function() {
    var i = $('.date').length,
      dte_par = $('body'),
      dte_cnt = 0;
    dte_par.find('.date').each(function() {
      $(this).addClass('date_' + dte_cnt);
      dte_cnt++;
    });
    // console.log(i);
    for (i = 0; i < $('.date').length; i++) {
      var yr = 0,
        mnt = 0,
        dd = 0;

      yr = parseInt(Math.random() * (2019 - 2000) + 2000);
      mnt = parseInt(Math.random() * (12 - 1) + 1);
      dd = parseInt(Math.random() * (31 - 1) + 1);
      // console.log(mnt)
      if (mnt <= 9) {
        mnt = '0' + mnt;
      }
      if (dd <= 9) {
        dd = '0' + dd;
      }
      $('.date_' + i).html(yr + '-' + mnt + '-' + dd);
    }
    dte_cnt = 0;
    dte_par.find('.date').each(function() {
      $(this).removeClass('date_' + dte_cnt);
      dte_cnt++;
    });
  });

  // FOOTER NAV MENU LINKS----------------------------------------------------
  $(function() {
    var footernav = ['百度一下', '素材58', '易优CMS', '小程序', '企业建站系统', '淘宝'],
      navlinks = [
        'http://www.baidu.com/',
        'http://www.sucai58.com/',
        'http://www.eyoucms.com/',
        'http://www.yiyongtong.com/',
        'http://www.eyoucms.com/',
        'http://www.taobao.com/'
      ],
      menu = document.querySelector('ul.footernav');

    for (var i = 0; i < footernav.length; i++) {
      var li = document.createElement('li'),
        a = document.createElement('a');

      li.setAttribute('class', 'navitems d-inline-block');
      a.setAttribute('href', navlinks[i]);
      a.setAttribute('class', 'center-right');
      a.innerHTML = footernav[i];
      li.appendChild(a);
      menu.appendChild(li);
    }
  })

  // REPLACE navbar & footer
  $(function() {
    if (!('remove' in Element.prototype)) {
      Element.prototype['remove'] = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
    var abt = document.getElementById('about'),
      propSelectors = ['.logtxt', '.site-nav', '.abtfooter', '.brand'],
      mainfooter = document.querySelector('.main-footer'),
      navbar = document.getElementById('navbar'),
      dropdown = document.querySelector('ul.dropdown');
    if (abt == null) {
      clearMenu();
      // showNav();
      return false;
    } else {
      var footer = document.querySelector('.main-footer');
      showMenu();
      footer.remove();
    }

    function clearMenu() {
      mainfooter.style.display = "block";
      for (var i = 0; i < propSelectors.length; i++) {
        try {
          document.querySelector(propSelectors[i]).remove();

        } catch (e) {
          return false;
        }
      }
    }

    function showMenu() {
      for (var i = 0; i < propSelectors.length; i++) {
        document.querySelector(propSelectors[i]).style.display = "block";
      }
      dropdown.classList.add('abt-dropdown')
      navbar.classList.add('abt-navbar')
    }
  })

  // MENU PRODUCE-------------------------------------------------------------
  // function showNav() {
  //   var navitems = ['国际', '国内', '军事', '社会', '娱乐', '财经', '科技', '教育', '房产', '体育'],
  //     menu = document.querySelector('ul.dropdown');
  //
  //
  //   for (var i = 0; i < navitems.length; i++) {
  //     var menulst = document.createElement('li'),
  //       links = document.createElement('a');
  //     menulst.setAttribute('class', 'links');
  //     links.innerHTML = navitems[i];
  //     links.setAttribute('href', './list.html');
  //     menulst.appendChild(links);
  //     try {
  //       menu.appendChild(menulst);
  //
  //     } catch (e) {
  //       return false;
  //
  //     }
  //   }
  // }

});