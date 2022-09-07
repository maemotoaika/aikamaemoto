<?php
  require_once("../lib/util.php"); //util.php読み込み
  if(!cken($_POST)) { //文字エンコード検証
    $encoding = mb_internal_encoding();
    $err = "Encoding Error! The expected encoding is" . $encoding;
    exit($err);
  }
  $_POST = es($_POST); //エスケープ
?>

<!doctype html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,intial-scale=1">		
    <meta name="description" content="contactForm">
		<title>フォーム</title>	
		<link rel="icon" type="image/png" href="images/logo-koala2.png">
		<!-- <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min..css"> -->
		<!-- <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"> -->
		<link rel="stylesheet" href="../css/style.css">

    <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> -->
    <!-- <script src="../js/app.js"></script>			 -->
  </head>
	<body>
    <header class="page-header">
      <a href="index.html">
        <img class="logo" src="images/logo-koala5.png" alt="koala-logo">
      </a>
      <div class="nav"> 
        <nav>
          <ul class="main-nav">
            <li><a href="../index.html"><span>TOP</span></a></li>
            <li><a href="../index.html#menu"><span>MENU</span></a></li>
                <li><a href="../index.html#reserve"><span>RESERVE</span></a></li>
                <li><a href="../index.html#shop"><span>SHOP</span></a></li>
            <li><a href="contactForm.php"><span>CONTACT</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
    <h1 class="page-title"></h1>
    </div>

    <div id="contact">
      <h2 class="sub-title">contact<p>お問合せ</p></h2>
    </div>
    <section class="wrapper">
      <fieldset>
        <legend>ご質問等ございましたらお気軽にお問合せください。</legend>
        <div class="form">
          <form method="POST" action="checkContact.php">
            <div class="form-item">
              <label>お問合せ項目*</label>
              <select name="contactType" aria-valuetext="<?= $type; ?>">
                <option>営業日・営業時間に関するお問合せ</option>
                <option>予約に関するお問い合わせ</option>
                <option>店舗に関するお問合せ</option>
                <option>メニューに関するお問合せ</option>
                <option>決済方法に関するお問合せ</option>
                <option>その他のお問合せ</option>
              </select>
            </div>
            <div class="form-item">
              <label>お名前*</label>
              <input type="text" name="contactName" value="<?= $name; ?>" class="required">
            </div>
            <div class="form-item">
              <label for="contactFurigana">フリガナ*</label>
              <input type="text" name="contactFurigana" value="<?= $furigana; ?>" class="required">
            </div>
            <div class="form-item">
              <label>お電話番号</label>
              <input type="tel" name="contactTel" value="<?= $tel; ?>">
            </div>
            <div class="form-item">
              <label>メールアドレス*</label>
              <input type="email" name="contactMail1" value="<?= $mail1; ?>" class="required mail">
            </div>
            <div class="form-item">
              <label>メールアドレス(確認用)*</label>
              <input type="email" name="contactMail2" value="<?= $mail2; ?>" class="required mail_check">
            </div>
            <div class="form-item">
              <label>メッセージ*</label>
              <textarea name="contactMessage" cols="30" rows="5" maxlength="150" placeholder="ここにメッセージを入力してください" class="required"></textarea>
            </div>
            <div class="btn-bb wrapper">
              <input type="submit" class="btn single-bb">
            </div>
          </form>
        </div><!-- /form wrapper -->
      </fieldset>
		</section><!--  /contact  -->


    <footer>
      <div class="wrapper">
        <p><small>&copy; aikaMaemoto</small></p>
      </div>
    </footer>
    </body>	
  </html>