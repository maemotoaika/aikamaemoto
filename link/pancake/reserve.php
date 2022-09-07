<?php
  require_once "lib/util.php";
  $gobackURL = "index.html";

  // 文字エンコード検証
  if (!cken($_POST)) {
    header("Location:{$gobackURL}");
    exit();
  }

  $errors = [];
  if (!isset($_POST["reserve-name"]) || ($_POST["reserve-name"] === "")) {
    $errors[] = "お名前を入力してください。";
  }
  if (!isset($_POST["reserve-furigana"]) || ($_POST["reserve-furigana"] === "")) {
    $errors[] = "フリガナを入力してください。";
  }
  if (!isset($_POST["reserve-tel"]) || ($_POST["reserve-tel"] === "")) {
    $errors[] = "お電話番号を入力してください。";
  }
  // if (!isset($_POST["reserve-mail1"]) || ($_POST["reserve-mail1"] === "")) {
  //   $errors[] = "メールアドレスを入力してください。";
  // }
  // if (!isset($_POST["reserve-mail2"]) || ($_POST["reserve-mail2"] === "")) {
  //   $errors[] = "メールアドレス(確認用)を入力してください。";
  // }
  if(isset($_POST["reserve-mail1"]) && !isset($_POST["reserve-mail2"])) {
    $errors[] = "メールアドレス(確認)を入力してください。";
  }
  if(isset($_POST["reserve-mail2"]) && !isset($_POST["reserve-mail1"])) {
    $errors[] = "メールアドレスを入力してください。";
  }
  if(isset($_POST["reserve-mail2"]) && isset($_POST["reserve-mail1"])) {
    if($_POST["reserve-mail1"] !== $_POST["reserve-mail2"]) {
      $errors[] = "メールアドレス(確認用)が違います。";
    }
  }
// selectBoxから受け取った値はvalue値になる為 '名' を外してる
  if (!isset($_POST["reserve-persons"]) || !in_array($_POST["reserve-persons"], ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"])) {
    $errors[] = "人数を選択してください。";
  }


  //エラーがあったとき
  if (count($errors) > 0) {
    echo '<ol class="error">';
    foreach ($errors as $value) {
      echo "<li>", $value, "</li>";
    }
    echo "</ol>";
    echo "<hr>";
    echo "<a href=", $gobackURL, ">戻る</a>";
    exit();
  }

  $user     = 'koalauser';
  $password = 'pw4koala';
  $dbName   = 'koala';
  $host     = 'localhost';
  $dsn      = "mysql:host={$host};dbname={$dbName};charset=utf8";

  $name = $_POST["reserve-name"];
  $furigana = $_POST["reserve-furigana"];
  $tel = $_POST["reserve-tel"];
  $mail1 = $_POST["reserve-mail1"];
  $mail2 = $_POST["reserve-mail2"];
  // $shop = $_POST["reserve-shop"];
  // $datetime = $_POST["reserve-datetime"];
  $persons = $_POST["reserve-persons"];

  try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    

  } catch (Exception $e) {
    $err = '<span class="error">エラーがありました。</span><br>';
    $err .= $e->getMessage();
    exit($err);
  }
?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>KOALA - ご予約</title>
<link href="css/style.css" rel="stylesheet">
</head>
<body>
<div>
  <?php

    try {
      // トランザクション開始
      $pdo->beginTransaction();
      $sql = "INSERT INTO reserve (name, furigana, tel, mail1,	mail2, shop, persons)
    VALUES (:name, :furigana, :tel, :mail1,	:mail2, :shop, :persons)";

      // プリペアドステートメント作成
      $insertReserve = $pdo->prepare($sql);
      // プレースホルダに値をバインド
      $insertReserve->bindValue(':name', $_GET["name"], PDO::PARAM_STR);
      $insertReserve->bindValue(':furigana', $_GET["furigana"], PDO::PARAM_STR);
      $insertReserve->bindValue(':tel', $_GET["tel"], PDO::PARAM_INT);
      $insertReserve->bindValue(':mail1', $_GET["mail1"], PDO::PARAM_STR);
      $insertReserve->bindValue(':mail2', $_GET["mail2"], PDO::PARAM_STR);
      $insertReserve->bindValue(':shop', $_GET["shop"], PDO::PARAM_STR);
      // $insertReserve->bindValue(':datetime', $_GET["datetime"], PDO::PARAM_STR);
      $insertReserve->bindValue(':persons', $_GET["persons"], PDO::PARAM_INT);

      // SQL文実行
      $insertReserve->execute();
      // トランザクション処理完了
      $pdo->commit();
      // 結果報告
      echo "ご予約完了しました。<hr>";

      if ($insertReserve->execute()) {
        $sql        = "SELECT * FROM reserve";
        $insertReserve = $pdo->prepare($sql);
        $insertReserve->execute();
        $result = $insertReserve->fetchAll(PDO::FETCH_ASSOC);

        foreach ($result as $row) {
          echo "<hr>";
          echo "<p>お名前：", es($row['name']), "</p>";
          echo "<p>フリガナ：", es($row['furigana']), "</p>";
          echo "<p>お電話番号：", printf("%03d-%4d-%4d",es($row['tel'])), "</p>";
          echo "<p>メールアドレス：", es($row['mail2']), "</p>";
          echo "<p>店舗：", es($row['shop']), "</p>";
          // echo "<p>日時：", es($row['datetime']), "</p>";
          echo "<p>人数：", es($row['persons']), "</p>";
          echo "<hr>";
        }
      }
      
    } catch (Exception $e) {
      // エラー時は元の状態に戻す
      $pdo->rollBack();
      echo $e->getMessage();
    }
  ?>
  <hr>
  <p><a href="<?php echo $gobackURL; ?>">戻る</a></p>
</div>
</body>
</html>
    