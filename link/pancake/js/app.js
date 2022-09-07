'use strict'
// ---------------------------------------------------------------------
//     index.html
// ---------------------------------------------------------------------

// トップ画面スライダー(プラグイン)----------------------
$(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,

    // slidesToShow: 2,
    // slidesToScroll: 2

    // centerMode: true,
    // centerPadding: '100px',
    // focusOnSelect: true,
  });
});


// フォーム入力チェック(予約＆お問合せ)------------------
$(function() {
  $("form").submit(function() {
    
    let i = $(this).attr('name');
    console.log(i); //reserve or contact

    // お名前
    if ($("input[name='" + i + "-name']").val() === "") {
      // $('.btn-bb a').prop('disabled', true); 
      if($("span#" + i + "-name").text() === "") {
        $("input[name='" + i + "-name']").css("border", "1px solid red")
        .after("<span id='" + i + "-name'>お名前を入力してください</span>");
        $("span#" + i + "-name").css({
          "color": "red",
          "font-weight": "bold"
        });
      }
    }
    // フリガナ
    if ($("input[name='" + i + "-furigana']").val() === "") {
      if($("span#" + i + "-furigana").text() === "") {
        $("input[name='" + i + "-furigana']").css("border", "1px solid red")
        .after("<span id='" + i + "-furigana'>フリガナを入力してください</span>");
        $("span#" + i + "-furigana").css({
          "color": "red",
          "font-weight": "bold"
        });
      }
    }
    // 電話番号
    if ($("input[name='" + i + "-tel']").val() === "") {
      if($("span#" + i + "-tel").text() === "") {
        $("input[name='" + i + "-tel']").css("border", "1px solid red")
        .after("<span id='" + i + "-tel'>お電話番号を入力してください</span>");
        $("span#" + i + "-tel").css({
          "color": "red",
          "font-weight": "bold"
        });
      }
    }
    // メールアドレス
    if ($("input[name='" + i + "-mail1']").val() === "") {
      if($("span#" + i + "mail1").text() === "") {
        $("input[name='" + i + "-mail1']").css("border", "1px solid red")
        .after("<span id='" + i +"-mail1'>メールアドレスを入力してください</span>");
        $("span#" + i + "-mail1").css({
          "color": "red",
          "font-weight": "bold"
        });
      }
    }
    // メールアドレス(確認)
    if ($("input[name='" + i + "-mail2']").val() === "") {
      if($("span#" + i + "-mail2").text() === "") {
        $("input[name='" + i + "-mail2']").css("border", "1px solid red")
        .after("<span id='" + i + "-mail2'>メールアドレスを入力してください</span>");
        $("span#" + i + "-mail2").css({
          "color": "red",
          "font-weight": "bold"
        });
      }
    }
    // メッセージ入力欄
    if ($("textarea[name='" + i + "-message']").val() === "") {
      if($("span#" + i + "-message").text() === "") {
        $("textarea[name='" + i + "-message']").css("border", "1px solid red")
        .after("<span id='" + i + "-message'>メッセージを入力してください</span>");
        $("span#" + i + "-message").css({
          "color": "red",
          "font-weight": "bold"
        });
      }
    }

    // フォーム入力 ミスタイプチェック----------------

    //エラーの初期化
    $("p.error").remove();
    $(".form-item").removeClass("error");
    
    $("input[type='text'].validate,textarea.validate").each(function () {
    
      //必須項目のチェック
      if ($(this).hasClass("required")) {
        if ($(this).val() == "") {
          $(this).parent().prepend("<p class='error'>必須項目です</p>");
          console.log($(this).parent());
        }
      }
      
      //数値のチェック
      if ($(this).hasClass("number")) {
        if (isNaN($(this).val())) {
          $(this).parent().prepend("<p class='error'>数値のみ入力可能です</p>");
        }
      }
      
      //メールアドレスのチェック
      if ($(this).hasClass("mail")) {
        if ($(this).val() && !$(this).val().match(/.+@.+\..+/g)) {
          $(this).parent().prepend("<p class='error'>メールアドレスの形式が異なります</p>");
        }
      }

      //メールアドレス確認のチェック
      if ($(this).hasClass("mail_check")) {
        if ($(this).val() && $(this).val() != $("input[name=" + $(this).attr("name").replace(/^(.+)_check$/, "$1") + "]").val()) {
          $(this).parent().prepend("<p class='error'>メールアドレスと内容が異なります</p>");
        }
      }

    });

    //ラジオボタンのチェック
    // $("input[type='radio'].validate.required").each(function () {

    //   if ($("input[name=" + $(this).attr("name") + "]:checked").length == 0) {
    //     $(this).parent().prepend("<p class='error'>選択してください</p>");
    //   }
    // });

    // //チェックボックスのチェック
    // $(".checkboxRequired").each(function () {
    //   if ($(":checked", this).length == 0) {
    //     $(this).prepend("<p class='error'>選択してください</p>");
    //   }
    // });


    //チェックボックスのチェック
    $(".selectbox-Required").each(function () {
      if ($(":checked", this).length == 0) {
        $(this).prepend("<p class='error'>選択してください</p>");
      }
    });
    

    // その他項目のチェック
    $(".validate.add_text").each(function () {
      if ($(this).prop("checked") && $("input[name=" + $(this).attr("name").replace(/^(.+)$/, "$1_text") + "]").val() == "") {
        $(this).parent().prepend("<p class='error'>その他の項目を入力してください。</p>");
      }
    });

    //エラーの際の処理
    if ($(".error").length > 0) {
      $('html,body').animate({
        scrollTop: $(".error:first").offset().top - 40
      }, 'slow');
      $(".error").parent().addClass("error");
      return false;
    }
    return false;
  });
});


// --------------------------------------------------------------------
//     menu.html
// ---------------------------------------------------------------------



// メニューHTML タグ書き換え&追加(lightBoxに合わせる為)
$(function() {
  $('#pancake-top div.thumbnail').unwrap().wrapInner('<li class="thumbnail">')
  .children().wrapInner('<a href="" rel="lightbox[set]">').unwrap().wrapAll('<ul class="wrapper grid">');
  $('#drink-top div.thumbnail').unwrap().wrapInner('<li class="thumbnail">')
  .children().wrapInner('<a href="" rel="lightbox[set]">').unwrap().wrapAll('<ul class="wrapper grid">');
});


// メニューHTML 作ったタグの属性切り替え
$(function() {
  const pancakeImg = $('#pancake-top a').get();
  console.log(pancakeImg);
  for(let i = 0; i < pancakeImg.length; i++) {
    $(pancakeImg[i]).attr('href', 'images/pancake' + (i+1) + '.jpg')
  };

  const drinkImg = $('#drink-top a').get();
  console.log(drinkImg);
  for(let i = 0; i < drinkImg.length; i++) {
    $(drinkImg[i]).attr('href', 'images/drink' + (i+1) + '.jpg')
  };
});


// class属性削除
$(function() {
  $('#pancake-top h2, #drink-top h2').removeClass('sub-title');
});


// サムネイル表示変更
$(function() {
  $('#pancake-top ul, #drink-top ul').removeClass('grid').css({
    "display": "grid",
    "gap": "2rem",
    "grid-template-columns": "repeat(auto-fit, minmax(10rem, 1fr))" 
  }).children().addClass('hidden');

  $('#pancake-top h2, #drink-top h2').wrap('<a>');

  
  $('#pancake-top h2').on('click', function() {
    $('#pancake-top ul').children().toggleClass('block');
  })
  $('#drink-top h2').on('click', function() {
    $('#drink-top ul').children().toggleClass('block');
  })

});

