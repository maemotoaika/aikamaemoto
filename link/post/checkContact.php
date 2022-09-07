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
  <meta name="description" content="checkForm">
  <title>フォームチェック</title>
  <link rel="icon" type="image/png" href="images/logo-koala2.png">
  <!-- <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min..css"> -->
  <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <!-- <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> -->
</head>
<body>



<!-- エラー配列用意 -->
<?php
$errors = [];
?>


<!--------- type(必須項目) ------------>
<?php
if(isset($_POST['contactType'])) {
  $typeValues = [
    "営業日・営業時間に関するお問合せ",
    "予約に関するお問い合わせ",
    "店舗に関するお問合せ",
    "メニューに関するお問合せ",
    "決済方法に関するお問合せ",
    "その他のお問合せ"
  ];
  $isType = in_array($_POST["contactType"], $typeValues);
  if($isType) {
    $type = $_POST["contactType"];
  } else {
    // お問合せ項目が改変されていればエラー
    $type = "error";
    $errors[] = "「お問合せ項目」にエラーがありました";
  }
} else {
  $isType = false;
  $type = "その他のお問合せ";
}
?>

<?php
function selected($value, $question) {
  if(is_array($question)) {
    $isSelected = in_array($value, $question);
  } else {
    $isSelected = ($value===$question);
  }

  if($isSelected) {
    echo "selected";
  }else {
    echo "";
  }
}
?>


<!----------- name(必須項目) ----------->
<?php
  $name = trim($_POST['contactName']);
    if(!isset($_POST['contactName']) || $name === "") {
      $errors[] = "お名前を入力してください。";
    }
?>


<!-------- furigana(必須項目) ----------->
<?php
  $furigana = trim($_POST['contactFurigana']);
  if(!isset($_POST['contactFurigana']) || $furigana === "") {
    $errors[] = "フリガナを入力してください。";
  }
?>

    
<!---------- tell ------------>
<?php
  if(isset($_POST['contactTel'])) {
    $tel = $_POST['contactTel'];
  }

  // ハイフン削除
  str_replace('-', '', $tel);

  if(!isset($_POST['contactTel'])) {
    $tel = "(未入力)<br>";  
  }
  // 先頭が0かつ10ケタ(固定電話)か11ケタ(携帯電話)の数字でなかったらエラー
  // if(!preg_match('/^0[0-9]{9,10}\z/', $tel)) {
  //   $errors[] = "お電話番号を整数で入力してください";
  // }


  // if(isset($_POST['contactTel'])) {
  //   $tel = $_POST['contactTel'];
  //   // ハイフン削除
  //   str_replace('-', '', $tel);
  //   // 先頭が0かつ10ケタ(固定電話)か11ケタ(携帯電話)の数字でなかったらエラー
  //   if(!preg_match('/^0[0-9]{9,10}\z/', $tel)) { 
  //     $errors[] = "お電話番号を整数で入力してください";
  //   }
  // }

?>


<!--------- mail1 & mail2(必須項目) --------->
<?php
$_POST['contactMail1'] = NULL;
$_POST['contactMail2'] = NULL;

  // メールアドレス未入力の場合
  if(!isset($_POST['contactMail1'])) {
    $errors[] = "メールアドレスを入力してください。";
  }
  // メールアドレス(確認用)未入力の場合
  if(!isset($_POST['contactMail2'])) {
    $errors[] = "メールアドレス(確認用)を入力してください。";
  }
  
  // メールアドレス入力済の場合
  if(isset($_POST['contactMail1'])) {
    $mail1 = $_POST['contactMail1'];
  }
  // メールアドレス(確認用)入力済の場合
  if(isset($_POST['contactMail2'])) {
    $mail2 = $_POST['contactMail2'];
  }
  
  // メールアドレス形式判定
  function is_mail($email) {
    if (preg_match('/^[a-zA-Z0-9._+^~-]+@[a-z0-9.-]+$/i', $email)) {
      return true;
    } else {
      return false;
    }
  }
  
  // メールアドレス入力済の場合
  if(isset($mail1) && isset($mail2)) {

    // メールアドレス形式ではない場合
    if (is_mail($mail1) === false || is_mail($mail2) === false) {
      $errors[] = "メールアドレスが間違っています。";
      // メールアドレスとメールアドレス(確認用)が異なる場合
      if($mail1!==$mail2) {
        $errors[] = "メールアドレス(確認)が違います。";
      }

    // メールアドレス形式とメールアドレス(確認用)が正しい場合
    } else if(is_mail($mail1) === true && is_mail($mail2) === true) {
      if($mail1===$mail2) {
        $checkMail = $mail2; //チェック済メールアドレスの変数作成
      }
    }

  }


  // function is_valid_email_address($email) {
  //   $validator = new Zend_Validate_EmailAddress();
  //     if ($validator->isValid($email)) {
  //       if(preg_match("/,/",$email)) {
  //       return false;
  //       }
  //     return true;
  //     }
  //   return false;
  // }
?>


<!----------- message(必須項目) ------------->
<!-- 安全にメッセージ入力できるテキストエリアを作る -->
<?php
if(isset($_POST["contactMessage"])) {
  $message = $_POST["contactMessage"];
  $message = strip_tags($message);
  $message = mb_substr($message, 0, 150);
  $message = es($message);/* HTMLエスケープ */
} else {
  $message = "";
}
?>
  
<!-- テキストがされていなければエラー -->
<?php
$length = mb_strlen($message);
if($length>0) {
  echo "<hr>";
  $message_br = nl2br($message, false); /* 改行コードの前に<br>に挿入 */
} else {
  $errors[] = "メッセージを入力してください";
}
?>


<!-- 全必須項目を正しく入力済の時のみ、最終確認一覧表示 -->
<!-- <?php
$isSubmited = $isType && $name && $furigana && $mail1 && $mail2 && $message;
if($isSubmited) {
  echo "<hr>",
  "お名前：{$name}",
  "フリガナ：{$furigana}",
  "お電話番号：{$tel}",
  "メールアドレス：{$checkMail}",
  "メッセージ：{$message}",
  "上記でよろしいですか？よろしければ送信ボタンを押してください。",
  "<hr>";
}
?> -->



<?php
// エラーがあったら各エラーメッセージ表示
if(count($errors)>0) {
  echo '<ul class="error">';
  foreach($errors as $value) {
    echo "<li>", $value, "</li><br>";
  }
  echo "</ul>";

  // エラーがなかったら確認画面表示
} else {
  echo "お問合せ項目*：{$type}<br>";
  echo "お名前*：{$name}<br>";
  echo "フリガナ*：{$furigana}<br>";
  echo "お電話番号：{$tel}<br>";
  echo "メールアドレス：{$checkMail}<br>";
  echo "メッセージ*：{$message_br}<br>";
  echo "上記でよろしいですか？<br>よろしければ送信ボタンを押してください。<br>";
  
}
?>

<!-- 戻るボタン -->
<form method="POST" action="contactForm.php">
  <input type="submit" value="戻る">
</form>
<form method="POST" action="contact.php">
  <input type="submit" value="送信">
</form>
</body>
</html>
