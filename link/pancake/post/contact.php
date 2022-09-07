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
		<title>お問い合わせフォーム</title>
		<meta name="viewport" content="width=device-width,intial-scale=1">
		<link rel="icon" type="image/png" href="images/logo-koala2.png">
		<meta name="description" content="お問い合わせフォーム">
		<!-- css -->
		<link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
		<link rel="stylesheet" href="../css/style.css">
	</head>
	<body>
			<header class="page-header">
				<a href="index2.html"><img class="logo" src="images/logo-koala5.png" alt="Koalaロゴ"></a>
				<nav>
					<ul class="main-nav">
						<li><a href="index.html#concept">CONCEPT</a></li>
						<li><a href="index.html#menu">MENU</a></li>
						<li><a href="index.html#reserve">RESERVE</a></li>
						<li><a href="index.html#shop">SHOP</a></li>
						<li><a href="contactForm.php">CONTACT</a></li>
					</ul>
				</nav>
			</header>
		<div id="contact-page" class="herf-pg">
      <h1 class="page-title">CONTACT</h1>
		</div>
		<section class="wrapper">
      <div class="link-nav">
        <a href="index.html#top">TOP</a> > <a href="contactForm.php">CONTACT</a> > CONTACT②
      </div>
      <div class="sub-title">
        <img class="check" src="images/check.png" alt="送信完了ロゴ">
        <h2>メッセージ送信完了</h2>
      </div>
      <h3 class="wrapper">お問い合わせを受け付けました。</h3>
        <p class="contents wrapper">
        お問合せいただきました内容を確認後、
        ご力いただいたメールアドレスへご連絡させていただきますので
        今しばらくお待ちください。<br>
        なお、数日経っても連絡がない場合はお手数ですが
        お電話いただきますようお願いいたします。<br>
        今後ともパンケーキ店Koalaをご愛顧くださいますよう、お願い申し上げます。
        </p>
        <form action="contactForm.php" method="post">
          <input type="button" class="single-bb" value="戻る">
        </form>
   </section>
   <!--   float practice   -->
    <section class="info wrapper">
      <div class="clearfix">
      <dl class="clearfix">
        <dt>会社名</dt>
        <dd>Koala</dd>
      </dl>
      <dl class="clearfix">
        <dt>本社所在地</dt>
        <dd>〒530-0001<br />
          大阪府大阪市北区梅田3丁目1-1</dd>
      </dl>
      <dl class="clearfix">
        <dt>連絡先</dt>
        <dd>TEL 08-0808-0808<br/>
          FAX 08-8080-8080</dd>
      </dl>
      <dl class="clearfix">
        <dt>設立</dt>
        <dd>令和8年8月</dd>
      </dl>
      <dl class="clearfix">
        <dt>代表者</dt>
        <dd>織田　信長</dd>
      </dl>
      <dl class="clearfix">
        <dt>従業員数</dt>
        <dd>50名（パート含む）</dd>
      </dl>
    </div>
  </section>
    <div id="gotop">
			<a href="#" >▲</a>
		</div>
		<footer>
			<p><small>&copy; Koala</small></p>
	</footer>	
</body>
</html>