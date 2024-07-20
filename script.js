// script.js
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const body = document.getElementById('body');
  const menuWrapper = document.querySelector('.menu-wrapper');

  // ヘッダーのスクロール制御
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      document.querySelector('header').style.transform = 'translateY(-100%)';
    } else {
      document.querySelector('header').style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  });

  // メニューの開閉制御
  navToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('menu-open');
      menuWrapper.style.right = '0';
    } else {
      body.classList.remove('menu-open');
      menuWrapper.style.right = '-100%';
    }
  });

  // メニュー項目のクリックイベント
  document.querySelectorAll('.menu-wrapper a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // ナビゲーションメニューを閉じる
      document.getElementById('nav-toggle').checked = false;
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // ヘッダーの高さを取得
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // スクロール位置を計算（ヘッダーの高さを考慮）
        const scrollToPosition = targetElement.offsetTop - headerHeight;
        
        // スムーズにスクロール
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});

$(document).ready(function() {
  // ナビゲーションのスクロール効果
  $('nav a').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });

  // スキル、コンタクト情報、プロジェクト、およびAboutセクションのフェードイン効果
  $(window).scroll(function() {
    $('.skill, .contact-item, .project, #about .about-content > div').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });

  // ヒーローセクションのアニメーション
  $('#hero h2, #hero p, .btn').each(function(i) {
    $(this).delay(i * 200).queue(function() {
      $(this).addClass('active').dequeue();
    });
  });

  // ナビゲーションのアニメーション
  $('nav ul li').each(function(i) {
    $(this).delay(i * 200).queue(function() {
      $(this).addClass('active').dequeue();
    });
  });

    // メニュー内の全てのリンクにクリックイベントを追加
    $('.menu-wrapper a').click(function() {
      // メニューを閉じるためにチェックボックスを非チェック状態にする
      $('#nav-toggle').prop('checked', false);
    });

  // ヘッダーの非表示効果
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > lastScrollTop) {
      $('header').addClass('hide');
    } else {
      $('header').removeClass('hide');
    }
    lastScrollTop = currentScrollTop;
  });

  $(document).ready(function() {
    function animateBike() {
      $('#moving-image').animate({
        left: '120%'
      }, 10000, 'linear', function() {
        $(this).css('left', '-50px');
        animateBike();
      });
    }
    
    animateBike();
  });
  
});