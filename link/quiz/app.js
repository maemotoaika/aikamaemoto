'use strict'
//=============================================================
//    ヘッダー
//=============================================================
// ナビゲーション------------------------
$(function () {
  $('.first').html('<a href="#" class="white">遊び方</a>');
  $('.second').html('<a href="#" class="white">クイズ</a>');
  $('.third').html('<a href="#" class="white">設定</a>');
});

// 各ナビの項目---------------------------
$(function () {
  $('ul.fir').html(`<li id="play">
  <h3>クイズ</h3>
  <div>プレイしたいクイズを選んだらクリックでクイズスタート！<br>
  1問ごとにタイマーが発動するよ！<br>
  すばやく解答して全問正解を目指そう(^^)/<br>
  </div>
  <br>
  <h3>設定</h3>
  <div>①デザイン設定<br>
  【文字色・背景色・クイズの解答ボタン・クイズのタイマー時間】を変えられるよ！<br>
  好きな色とデザインを選んでカスタマイズしてね♪<br>
  <br>
  慣れてきたらタイマー時間を短くしてクイズにチャレンジしてみよう(^^)/<br>
  <br>
  ②カレンダー<br>
  クイズ全問正解したらカレンダーを見てみよう★<br>
  詳細は全問正解後のお楽しみ(^o^)/
  </div>
  </li>`);
  $('li#play').css("background-color", "rgba(255, 255, 255, 0.7)").css("padding", "4%");

  $('ul.sec').append('<li class="quiz"><a href="#quiz" class="white">JSクイズ(入門編)</a></li>')
    .append('<li class="quiz"><a href="#quiz" class="white">jQueryクイズ(入門編1)</a></li>')
    .append('<li class="quiz"><a href="#quiz" class="white">jQueryクイズ(入門編2)</a></li>')
    .append('<li class="quiz"><a href="#quiz" class="white">ＩＴ用語(入門編)</a></li>');

  $('ul.thi').append('<li id="set_user"><a href="#user" class="white">ユーザー登録・ログイン</a></li>')
    .append('<li id="set_design"><a href="#setting" class="white">デザイン設定</a></li>')
    .append('<li id="set_calender"><a href="#calender" class="white">カレンダー</a></li>');
});

// display none block 取付け&取り外し-------------------
$(function () {
  $('#quiz').removeClass('block');
  // ナビ項目クリックでリスト表示------------
  const nav = $('.nav ul');
  // console.log(nav);
  $('.nav h1').on('click', function () {
    $('#quiz').removeClass('block');
    $('#user').addClass('hidden');
    $('#setting').addClass('hidden');
    $('#calender').addClass('hidden');
    let i = $(this).text();
    // console.log(i);
    $(this).next().toggleClass('block');
    if (i === '遊び方') {
      $(nav[1]).removeClass('block').addClass('hidden');
      $(nav[2]).removeClass('block').addClass('hidden');
      $('#user').removeClass('block').addClass('hidden');
      $('#setting').removeClass('block').addClass('hidden');
      $('#calender').removeClass('block').addClass('hidden');
      $('#quiz').removeClass('block').addClass('hidden');
    } else if (i === 'クイズ') {
      $(nav[0]).removeClass('block').addClass('hidden');
      $(nav[2]).removeClass('block').addClass('hidden');
      $('#user').removeClass('block').addClass('hidden');
      $('#setting').removeClass('block').addClass('hidden');
      $('#calender').removeClass('block').addClass('hidden');
    } else {
      $(nav[0]).removeClass('block').addClass('hidden');
      $(nav[1]).removeClass('block').addClass('hidden');
      $('#calender').removeClass('block').addClass('hidden');
      $('#quiz').removeClass('block').addClass('hidden');
    }
  });


  //ナビリストクリックでナビリストをdisplay:none;に------ 
  $('.sec li').on('click', function () {
    // console.log( $('.sec li'));
    $('#quiz').toggleClass('block');
    // $('.sec ul').removeClass('block').toggleClass('block');
    $('.sec').removeClass('block');
  })

  $('.thi li').on('click', function () {
    // console.log($(this).get());
    $('.thi ul').removeClass('block').toggleClass('block');
    $('.thi').removeClass('block');
    $('#quiz').removeClass('block');
  });


  // ナビ項目リスト表示先-------------------------------
  $('#set_user').on('click', function () {
    $('#user').removeClass('hidden');
  })

  $('#set_design').on('click', function () {
    $('#setting').removeClass('hidden');
  })

  $('#set_calender').on('click', function () {
    $('#calender').removeClass('hidden');
  })

});


// =============================================================
// 　　　　クイズ
// =============================================================

// HTMLに出力する為の定数 & 変数 -------------
const btn = document.getElementsByClassName('quiz-btn');
// console.log(btn);

// JSクイズ(入門編１)-------------------------
$(function () {
  const quiz1 = [
    {
      question: '戻り値がNodeListなのは？',
      answer: [
        'document.querySelecterAll（）',
        'document.querySelector（）',
        'document.getElementsByClassName（）',
        'document.getElementById（）'
      ]
    }, {
      question: 'Math	（）クラスで浮遊小数点を切り上げるには？',
      answer: [
        '.ceil',
        '.floor',
        '.random',
        '.abs'
      ]
    }, {
      question: 'new Date（）.getDate（）;  何が取得できる？',
      answer: [
        '今日の日付け',
        '現在の年,月,日,時間全て',
        '今月の最終日',
        '現在の年,月,日'
      ]
    }, {
      question: 'console.log	（Math.floor	（Math.PI））;  コンソールに表示されるのは？',
      answer: [
        '3',
        '3.14',
        '4',
        '3.141592653589793'
      ]
    }, {
      question: 'フォームなどで入力された文字列を数値に変換するには？',
      answer: [
        'parseInt（）',
        'Math.floor（）',
        'String（）',
        'typeof'
      ]
    }, {
      question: 'insertAdjacentHTML（）で取得した要素の中に入れ、追加した順に表示するには？',
      answer: [
        'beforeend',
        'afterend',
        'beforebigin',
        'afterbegin'
      ]
    }, {
      question: '配列の中身とインデックス番号を取得するには？',
      answer: [
        'forEach（）',
        'querySelectorAll（）',
        'getElementByTagName（）',
        'querySelecter（）'
      ]
    }, {
      question: '引数がないのは？',
      answer: [
        'location.reload（）',
        'ready（）',
        'load（）',
        'echo（）'
      ]
    }, {
      question: '正しい記述は？',
      answer: [
        'data.forEach（function（item, index） {}）;',
        'data.forEach（function（index, item） {}）;',
        '$（data）.each（function（item, index） {}）;',
        '$（data）.forEach（function（index, item） {}）;'
      ]
    }, {
      question: 'liの兄弟要素が複数あり、それを配列として使いたい。$（\'li\'）.on	（\'click\', function（）{この中は？};',
      answer: [
        '$（this）.get（）',
        '$（this）',
        '$（"li", click）',
        '$（li）.get（）'
      ]
    }
  ];
  // console.log(quiz1[0].answer[0]）; 
  // console.log(quiz1[1].answer[0]）; 

  // jQueryクイズ(入門編２）------------------------------
  const quiz2 = [
    {
      question: '画面からの位置を取得できるメソッドは？',
      answer: [
        'offset（）',
        'position（）',
        'off（）',
        'unbind（）'
      ]
    }, {
      question: '.slideUp（ ）;   （ ）内に何を指定できる？',
      answer: [
        '表示するまでの時間と最終表示状態',
        '表示するまでの時間',
        '表示する領域と最終表示状態',
        '最終表示状態'
      ]
    }, {
      question: '.load（）の説明で正しいものは？',
      answer: [
        'サーバー側からテキストファイルなどを取得する',
        '同じフォルダ内の他のHTMLファイルを読み込む',
        'ポート番号が違うファイルも取得できる。',
        'HTMLファイルをサーバーにアップする'
      ]
    }, {
      question: 'animate（）とはどんなメソッド？',
      answer: [
        '任意のCSSプロパティの値を徐々に変化させ独自の効果を指定できる',
        '表示・非表示を上下スライドで交互に切り替える',
        'アニメーション処理中の要素を選択できる',
        '1つの処理が終わるまで次の処理を適用させない'
      ]
    }, {
      question: '透明度を徐々に変更できるメソッドは？',
      answer: [
        'fadeTo（）',
        'fadeIn（）',
        'fadeOut（）',
        'toggle（）'
      ]
    }, {
      question: '.toggleClass（）とはどんなメソッド？',
      answer: [
        'classを交互に付け外しする',
        'classを付与する',
        'classを削除する',
        'classを書き換える'
      ]
    }, {
      question: 'フォーカスが外れたことを感知するメソッドは？',
      answer: [
        '.blur（）',
        '.val（）',
        '.focus（）',
        '.submit（）'
      ]
    }, {
      question: '.change（）メソッドで指定できない要素は？',
      answer: [
        '<div>',
        '<input>',
        '<select>',
        '<textarea>'
      ]
    }, {
      question: 'DOM上の属性を書き換えられないメソッドは？',
      answer: [
        '.data（）',
        '.prop（）',
        '.html（）',
        '.attr（）'
      ]
    }, {
      question: '<p><strong>文字列</strong></p>がある。４つのうち実行結果が違うのは？',
      answer: [
        '$（"p"）.html（"<strong>文字列"）;',
        '$（"p strong"）.remove（）;',
        '$（"strong"）.remove（）;',
        '$（"p"）.empty（）.text（"文字列"）;'
      ]
    }
  ];


  // jQueryクイズ（入門編）----------------------------
  const quiz3 = [
    {
      question: '<h1><strong>文字列</strong></h1>  <h1>タグのみを削除するには？',
      answer: [
        '$（"strong"）.unwrap（）;',
        '$（"h1"）.unwrap（）;',
        '$（"strong"）.empty（）;',
        '$（"h1"）.empty（）;'
      ]
    }, {
      question: '$（this）の配列番号を取得したい。メソッドは？',
      answer: [
        '.index（this）;',
        '.find（this）;',
        '.next（this）;',
        '.get（this）;'
      ]
    }, {
      question: 'liの兄弟要素を0から数えて偶数番目を指定するには？',
      answer: [
        '$（"li:even"）',
        '$（"li:odd"）',
        '$（"li:eq（2）"）',
        '$（"li:eq（0）"）'
      ]
    }, {
      question: '<div id="quiz">要素の中に入れ子でaタグが複数ある。１番目の<a>タグを指定するには？',
      answer: [
        '$（"div#first a"）',
        '$（"a #first"）',
        '$（"div#first"）',
        '$（"div #first a"）'
      ]
    }, {
      question: 'ul要素の中に入れ子でliタグを上から順に追加したい。メソッドは？',
      answer: [
        '.append（）',
        '.prepend（）',
        '.before（）',
        '.after（）'
      ]
    }, {
      question: '$（"strong"）.prependTo（"p"）; どうなる？',
      answer: [
        '<strong>タグが<p>タグの先頭に移動',
        '<o>タグが<strong>タグの先頭に移動',
        '<strong>タグを<p>要素のそとに出す',
        '<p>タグを<strong>要素の外に出す'
      ]
    }, {
      question: '$（"h1"）.insertBefore（"p"）;  どうなる？',
      answer: [
        '<h1>タグが<p>タグの前に移動',
        '<p>タグが<h1>タグの前に移動',
        '<h1>タグの前にある<p>タグのみ<h1>タグの中に移動',
        '<h1>タグの中にある<p>タグのみ<h1>タグの前に移動'
      ]
    }, {
      question: '複数あるstrongタグをh1タグで１つずつ囲むには？',
      answer: [
        '$（"strong"）.wrap（"<h1>"）;',
        '$（"h1"）.wrap（"<strong>"）;',
        '$（"<strong>"）.wrap（"h1"）;',
        '$（"<h1>"）.wrap（"strong"）;'
      ]
    }, {
      question: `$（\'#quiz\'）.replaceWith（\'Hello World\'）;  どうなる？`,
      answer: [
        'Hello World',
        '<div id="quiz">Hello World</div>',
        '<div id="quiz"></div>',
        '<div>Hello World</div>'
      ]
    }, {
      question: '$（"p"）.wrapInner（"<strong>"）; どうなる？',
      answer: [
        '<p><strong></strong></p>',
        '<strong><p></p></strong>',
        '<p></p><strong></strong>',
        '<strong></strong><p></p>'
      ]
    }
  ];

  const quiz4 = [
    {
      question: `会議などの場で、『参加者に発言を促したり話の流れをまとめたりする人』を何という？`,
      answer: [
        `ファシリテーター`,
        `ホスト`,
        `プレゼンター`,
        `サポーター`
      ]
    }, {
      question: `会議などで効率的な『議論』をする為、目次・目的やゴール・時間配分などを共有する為にリスト化した進行表を何という？`,
      answer: [
        `アジェンダ`,
        `レジュメ`,
        `スケジュール`,
        `サマリー`
      ]
    }, {
      question: `『コンピュータが分かりやすい形式のアドレス（IPアドレスなど）』を『人間が分かりやすい形式の名前（ドメイン名など）』に変換すること(もしくはその逆)を何という？`,
      answer: [
        `名前解決`,
        `名前識別`,
        `実態解決`,
        `実態識別`
      ]
    }, {
      question: `インターネットサーバーの『192.168.1.1』などのIPアドレスを『http://www.〇〇.com』など分かりやすく置き換えてくれるシステムのことを、何という？`,
      answer: [
        `DNS(ドメイン・ネーム・システム)`,
        `API(アプリケーション・プログラミング・インターフェース)`,
        `DX(デジタル・トランス・フォーメーション)`,
        `APT(アドバンスド・パッケージ・ツール)`
      ]
    }, {
      question: `パソコンに『一時的に情報を保存する領域』のことを何という？`,
      answer: [
        `バッファ`,
        `リマインド`,
        `プール`,
        `フラッシュ`
      ]
    }, {
      question: `IT機器の各種設定・ソフトウェアのインストールなどを行い、それぞれの環境に『最適な状態にセットアップすること』を何という？`,
      answer: [
        `キッティング`,
        `クローニング`,
        `ピッキング`,
        `セッティング`
      ]
    }, {
      question: `UI(ユーザーインターフェース)とは？`,
      answer: [
        `ユーザーのサービスにおける『見た目や使いやすさ』`,
        `ユーザーが製品やサービスで得られる『体験』`,
        `ある期間にサイトを訪れた人の『人数』`,
        `ユーザーが完成したシステムを受け入れるかの『テスト』`
      ]
    }, {
      question: `作業人数・作業日数・作業時間など、作業を完了させるために要する作業量のことを何という`,
      answer: [
        `工数(こうすう)`,
        `工期(こうき)`,
        `納期(のうき)`,
        `着工(ちゃっこう)`
      ]
    }, {
      question: `Gmail,Dropbox,Evernote,Slackなど、クラウドでアプリケーション(ソフトウエア)機能を提供することを何という？`,
      answer: [
        `SaaS(サース：Software as a Service)`,
        `Paas(パース：Platform as a Service)`,
        `IaaS(イアース：Infrastructure as a Service)`,
        `AaaS(アース：Analytics as a Service)`
      ]
    }, {
      question: `データベースにデータを挿入したり、検索したりする際に用いる言語は？`,
      answer: [
        `ＳＱＬ`,
        `ＰＨＰ`,
        `ＤＢＭＳ`,
        `ＲＤＢ`
      ]
    }
  ];

  // 他のfunctionでも使う定数-------------------------------
  const quizBtn = $('#quiz-buttons'); //解答ボタン
  // console.log(quizBtn);
  const question = $('#question'); //問題文
  // console.log(question);


  //デザイン変更時の為のボタン作成(数は適当)-----------------
  for (let i = 0; i < 4; i++) {
    $(quizBtn).append('<a><button class="quiz-btn"><span>');
    // console.log(i);
  };
  const btnSpan = $('button.quiz-btn span'); //解答ボタン
  // console.log(btnSpan); 


  // クイズ開始-----------------------------
  $('.sec li').on('click', function () {
    $('#quiz-buttons').prop('disabled', true); //再プレイできるように
    $('#quiz *').removeClass('hidden'); //クイズ画面表示
    $('#quiz p').addClass('hidden'); //前にプレイしたクイズ結果非表示
    let num = 0; //何問目かを保存する変数 クイズ配列と合わせる為0始まり
    let score = 0; //正解数初期値
    let interval; // clearIntervalのID
    const setTime = $('#timer').text(); //選択されたタイム 初期値はhtmlのtext(60)
    let time = setTime; //毎秒出力用の変数
    // console.log(time); //(選択なかったら60)


    //　選択したリストのインデックス番号で指定-----------------
    let quizNum = 0; //リスト配列とクイズ配列を合わせる
    let selectQuiz;
    if ($(this).index() === 0) {
      // console.log($(this).index());
      quizNum = quiz1;
      selectQuiz = 'JSクイズ(入門編)';
    } else if ($(this).index() === 1) {
      quizNum = quiz2;
      selectQuiz = 'jQueryクイズ(入門編1)';
    } else if ($(this).index() === 2) {
      quizNum = quiz3;
      selectQuiz = 'jQueryクイズ(入門編2)';
    } else if ($(this).index() === 3) {
      quizNum = quiz4;
      selectQuiz = 'ＩＴ用語(入門編)';
    };
    // console.log(selectQuiz);


    let quizNumLen = quizNum.length; //全問題数
    let answerLen = quizNum[num].answer.length; //1問目の解答数
    // console.log(quizNum); //選択されたクイズ
    // console.log(answerLen);
    for (let i = 0; i < answerLen; i++) { //１問目の解答ボタン作成
      $(quizBtn).append(btn[0]);
      // console.log(i);
    };
    // console.log(answerLen); //選んだクイズリスト1問目の解答数


    // クイズ配列をシャッフル-------------------
    let quizAry = shuffle(quizNum.concat()); //.concat()でW保存

    // 解答配列をシャッフル(シャッフル後のクイズ配列で行うこと)
    let ansAry = shuffle(quizAry[num].answer.concat()); //.concat()でW保存

    let correct = (quizAry[num].answer[0]); //正解は全て解答配列0番目
    // console.log(correct);

    if (num === 0) {
      console.log(quizNum); //元のクイズ配列
      console.log('元のクイズ配列');
      console.log(quizAry); //シャッフル後のクイズ配列
      console.log('シャッフル後のクイズ配列');
    }

    // シャッフル関数------------------
    // ～ 解説 ～
    // 配列['0','1','2','3'];
    // 配列の長さから1引いた値を変数iに代入
    // Math.random()に(i + 1)の値をかけて0～4未満の浮動小数点数を作成jに代入
    // Math.floorで切り捨て、0～3までの整数にする
    // 配列の末尾から要素[i]を1つ取り出して変数tempに値を一時保存
    // 配列の末尾[i]に要素[j]を1つ移動
    // 一時保持した値tempを[j]に入れて1回目の置き換えを完了
    // これを3回(配列の長さから1引いた値)繰り返す
    function shuffle(array) {
      for (let i = (array.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // console.log(Math.random() * (i + 1));
        // console.log(Math.floor(Math.random() * (i + 1)));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      };
      return array;  // 順番作りかえた配列
    };

    setQuiz(); //クイズ呼び出し

    // ２問目以降--------------------------------------
    $(quizBtn).on('click', function (e) {

      const target = $(e.target).text(); //クリックしたボタンのテキスト
      console.log('解答:' + target);
      console.log('正解:' + correct);

      // 正誤判定---------------------------------------
      if (target === correct) { //(target === correct)
        score++;
        num++;
        $('#quiz *').addClass('hidden');
        $('#quiz p').removeClass('hidden').text('〇').css({
          "background": "rgba(8, 8, 8, .3)",
          "color": "red",
          "text-align": "center",
          "font-size": "10em",
          "line-height": "20rem",
          "width": "100%",
          "height": "70vh",
          "margin": "0",
          "padding": "7rem 0"
        });
      } else if (correct !== target) { //(correct !== target)
        num++;
        $('#quiz *').addClass('hidden');
        $('#quiz p').removeClass('hidden').text('☓').css({
          "background": "rgba(8, 8, 8, .3)",
          "color": "blue",
          "text-align": "center",
          "font-size": "10em",
          "line-height": "20rem",
          "width": "100%",
          "height": "60%",
          "margin": "0"
        });
      };




      // 正誤判定後の分岐-----------------------------------------
      if (num === quizNumLen) {
        clearInterval(interval);
        if (score === quizNumLen) {
          // clearInterval(interval);
          setTimeout(function () { // 正誤判定の１秒後に表示
            $('#quiz p').removeClass('hidden');
            $('#quiz p').html(`おめでとう！！全問正解です！！！<br>カレンダーの今日の日付を<br>チェックしてみてね★`).css({
              "background": "rgba(8, 8, 8, .5)",
              "color": "white",
              "font-size": "2rem",
              "text-align": "center",
              "line-height": "3rem",
              "width": "100%",
              "height": "60%",
              "margin": "0",
              "padding": "7rem 0"
            });
            // カレンダー書き換え------------------
            let today = new Date().getDate();
            let calenderTd = $('#table td');
            // console.log(calenderTd);
            let tdText = $(calenderTd[today]); //今日の日付のtdタグ
            // console.log(tdText);
            $(tdText).text("㊗").css({
              "background": "gold",
              "font-size": "2rem"
            });
          }, 1000);
        } else if (score < quizNumLen) {
          // clearInterval(interval);
          setTimeout(function () { //正誤判定の１秒後に表示
            $('#quiz *').addClass('hidden');
            $('#quiz p').removeClass('hidden')
              .html('終了！<br>あなたの正解数は<br>' + score + '問/' + quizNumLen + '問 です。').css({
                "background": "rgba(8, 8, 8, .5)",
                "color": "white",
                "font-size": "2rem",
                "text-align": "center",
                "line-height": "3rem",
                "width": "100%",
                "height": "60%",
                "margin": "0",
                "padding": "7rem 0"
              });
          }, 1500);
        };
      } else {
        setTimeout(function () {
          $('#quiz *').removeClass('hidden');
          $('#quiz p').addClass('hidden');
          setQuiz();
        }, 1000);
        // console.log(score);
      };

    }); //-----------------------------/解答ボタンクリック function


    // タイマー----------------------------------

    // シャッフル後のクイズ出題--------------------------------------------------
    function setQuiz() {
      if (num < quizNumLen) { //再プレイorクイズリスト変更時に前回のnumが追加されない為
        console.log('---------------------');
        console.log('【 ' + (num + 1) + '問目 】');
        clearInterval(interval); //カウント繰り返し止める
        correct = (quizAry[num].answer[0]); //正解は全て解答配列0番目
        // num++; //ここじゃないとダメ
        // 解答配列シャッフル-----------------
        ansAry = shuffle(quizAry[num].answer.concat()); //２問目以降
        console.log(quizAry[num].answer); //元の配列
        console.log('元の解答配列');
        console.log(ansAry); //シャッフル後の配列
        console.log('シャッフル後の解答配列');
        console.log('現在のスコア:' + score);

        $(question).text(quizAry[num].question); //クイズ問題HTML出力
        $("#quiz-length").text(`${num + 1}/${quizNumLen}`); //何問目かHTML出力
        for (let i = 0; i <= answerLen; i++) {  //解答HTML出力
          $(btnSpan[i]).text(ansAry[i]);
          // console.log($(btnSpan[i]));
          // console.log(ansAry[i]);
        };
      };
      if (num < quizNumLen) {
        clearInterval(interval);
        time = setTime;
        console.log('選択タイム:' + setTime + '秒');
        $('#timer').text(time); //HTML出力
        time--;
        interval = setInterval(start, 1000);

        function start() {
          if (time === 0) { // 時間切れになったら
            clearInterval(interval); //setInterval()取り消し
            $('#quiz *').addClass('hidden');
            $('#quiz p').removeClass('hidden').css({
              "background": "rgba(8, 8, 8, .5)",
              "color": "white",
              "font-size": "2rem",
              "text-align": "center",
              "line-height": "3rem",
              "width": "100%",
              "height": "60%",
              "margin": "0",
              "padding": "7rem 0"
            });
            if ((num + 1) < quizNumLen) {
              $('#quiz p').html('(x x )残念！時間切れ( x x)<br>頑張って！！！');
              setTimeout(function () {
                $('#quiz *').removeClass('hidden');
                $('#quiz p').addClass('hidden');
                num++;
                time = setTime; //タイマーリセット(次の問題へ)
                time--; //1秒ごとに1引く
                interval = setInterval(start, 1000);
              }, 1500);
            } else {
              $('#quiz p').html('残念！時間切れ(~ ~)<br>結果は．．．');
              clearInterval(interval);
              setTimeout(function () { //正誤判定の１秒後に表示
                $('#quiz *').addClass('hidden');
                $('#quiz p').removeClass('hidden');
                $('#quiz p').html('あなたの正解数は<br>' + score + '問/' + quizNumLen + '問 です。').css({
                  "background": "rgba(8, 8, 8, .5)",
                  "color": "white",
                  "font-size": "2rem",
                  "text-align": "center",
                  "line-height": "3rem",
                  "width": "100%",
                  "height": "60%",
                  "margin": "0",
                  "padding": "7rem 0"
                });
                // $('#quiz-buttons').prop('disabled', false);
              }, 1500);
            };
          } else {
            $('#timer').text(time);
            time--; //1秒ごとに1引く
            console.log('残り' + time + '秒');
          }; //--------------------/時間切れになったら
        }; //------------------------/start function
      };
      // }); //------------------------------------/タイマーfunction        



      // 正解した場合の処理-----------------
    };//--------------------------------/setQuiz function

  }); //---------------------------------------/クイズ開始　li click function
}); //------------------------------------------------/クイズ全体 function


//==============================================================
// 　　　　　設定
//==============================================================
$(function () {
  // $('#en').on('click', function() {

  // 背景・文字色・ボタン・タイマー(変更先)---------------
  const selectBack = [
    "url(image/hd-wallpaper-g5e2b0b664_640.jpg)",
    "url(image/question-mark-g0452292d5_640.jpg)",
    "url(image/question-mark-g3257d1300_640.jpg)",
    "url(image/question-mark-g97e914eee_640.jpg)",
    "url(image/smiley-gf74a7115a_640.jpg)",
    "url(image/question-mark-g613db7069_640.jpg)",
    "url(image/knowledge-gc5c40dedf_640.jpg)",
    "url(image/question-mark-3839456_640.jpg)"
  ];
  const selectColor = [
    "white", "black", "red", "blue",
    "yellow", "pink", "green", "purple"
  ];
  const selectBtn = [
    "btn1", "btn2", "btn3", "btn4",
    "btn5", "btn6", "btn7", "btn8"
  ];
  const selectTime = [
    "60", "50", "40", "30",
    "20", "15", "10", "5"
  ];

  // 変更選択ボタン--------------------------
  const setBack = $('#set-background');
  const setColor = $('#set-color');
  const setTime = $('#set-time');
  const setBtn = $('#set-btn');
  // console.log(setBack);
  // console.log(setColor);
  // console.log(setBtn);
  // console.log(setTime);

  $(setBack).prepend('-------- 背景画像 --------');
  $(setColor).text('---------- 文字色 ----------');
  $(setBtn).text('------- クイズボタン -------');
  $(setTime).text('---- クイズタイマー(秒) ----');

  // デザイン選択ボタン作成---------------------------
  for (let i = 0; i < 8; i++) {
    setBack.after('<button class="set-background"><a>');
    setColor.after('<button class="set-color"><a>');
    setTime.after('<button class="set-time"><a>');
    setBtn.after('<button class="set-btn"><a>')
  };

  // 選択ボタン プロパティ--------------------
  const changeBack = $('.set-background');
  const changeColor = $('.set-color');
  const changeBtn = $('.set-btn');
  const changeTime = $('.set-time');
  // console.log(changeBack[0]);

  for (let i = 0; i < 8; i++) {
    $(changeBack[i]).css({
      "background": selectBack[i],
      "background-size": "3rem 3rem"
    });
    $(changeColor[i]).css("background", selectColor[i]);
    $(changeBtn[i]).addClass(selectBtn[i]);
    $(changeTime[i]).text(selectTime[i])
  };

  // デザイン選択ボタン ラッピング---------------------
  $("fieldset").wrapInner('<form action="#">');
  $(changeBack).wrapAll('<div class="flex">');
  $(changeColor).wrapAll('<div class="flex">');
  $(changeBtn).wrapAll('<div class="flex">');
  $(changeTime).wrapAll('<div class="flex">');

  //背景画像 変更-------------------------------- 
  $(changeBack).on('click', function () {
    // console.log(changeBack[0]);
    let index = $(changeBack).index(this);
    $('body').css({
      'background': selectBack[index],
      'background-size': '100vw 100vh',
      'background-repeat': 'no-repeat',
      'margin': '0'
    });
  });

  // 文字色 変更-----------------------------------
  $(changeColor).on('click', function () {
    // console.log(changeColor[0]);
    let index = $(changeColor).index(this);
    $('html').removeClass().addClass(selectColor[index]);
    $('a').removeClass().addClass(selectColor[index])
  });

  // クイズボタン変更----------------------------
  $(changeBtn).on("click", function () {
    let index = $(changeBtn).index(this);
    $(btn).removeClass().addClass(selectBtn[index]).addClass('quiz-btn')
  });

  // タイマー変更-------------------------------
  // 一回選択したらリページしないと書き換えられない！！
  $(changeTime).on('click', function () {
    let index = $(changeTime).index(this);
    $('#timer').text(selectTime[index])
  });

  // })
}); //-----------------------------------/設定 function

//==============================================================
//       カレンダー
//==============================================================
$(function () {

  function calender(year, month) {
    let lastDate = new Date(year, (month + 1), 0).getDate();
    let lastMonLastDate = new Date(year, month, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const row = Math.ceil((lastDate + startDay) / 7) + 1;
    // 1行目に曜日を入れる為 + 1;
    const week = ['日', '月', '火', '水', '木', '金', '土'];
    const span = `${year}年${month + 1}月`;

    $('span#span').text(span);

    let table = document.getElementById('table');
    let day = 1;

    // console.log(lastDate);
    // console.log(startDay);
    // console.log(week);
    // console.log(week.length);
    // console.log(span);
    // console.log(table);

    while (table.firstChild) {
      table.removeChild(table.firstChild);
    };

    // console.log(((row-1) * 7) - (startDay + lastDate));
    for (let i = 0; i < row; i++) {
      let trtd = '<tr>';
      for (let j = 0; j < week.length; j++) {
        if (i === 0) {
          trtd += `<th>${week[j]}</th>`;
        } else if (day === 1 && j === startDay) {
          trtd += `<td>${day}</td>`;
          day++;
        } else if (day >= 2 && day <= lastDate) {
          trtd += `<td>${day}</td>`;
          day++;
        } else if (j < startDay && i === 1) {
          trtd += `<td class="thin">${(lastMonLastDate - startDay) + j + 1}</td>`;
          // console.log((lastDate - startDay) + j + 1);
        } else {
          trtd += `<td class="thin">${day - lastDate}</td>`;
          day++;
        };
      };
      trtd += '</tr>';
      table.insertAdjacentHTML('beforeend', trtd);
    };
  };

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  // console.log(currentYear);
  // console.log(currentMonth);
  calender(currentYear, currentMonth);

  $('#prev').on('click', function () {
    // e.preventDefault();
    if ((currentMonth - 1) < 0) {
      currentMonth = 11;
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    };
    calender(currentYear, currentMonth);
  });

  $('#next').on('click', function () {
    // e.preventDefault();
    if ((currentMonth + 1) > 12) {
      currentMonth = 0;
      currentYear += 1;
    } else {
      currentMonth += 1;
    };
    calender(currentYear, currentMonth);
  });
});
