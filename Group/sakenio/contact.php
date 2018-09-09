
<?php
if(isset($_POST['yourname']) && isset($_POST['subject']) && isset($_POST['email']) && isset($_POST['message'])) {
  if(!empty($_POST['yourname']) && !empty($_POST['subject']) && !empty($_POST['email']) && !empty($_POST['message'])){
    $yourname=$_POST['yourname'];
    $subject=$_POST['subject'];
    $email=$_POST['email'];
    $message=$_POST['messaage'];
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
      echo'Įveskite galiojantį elektroninį paštą';
    } else{
      $body=$yourname."\n".$subject."\n".$email."\n".$message;
      if(mail('info@sakenio-aleja.lt','Website Response',$body,'From:response@mywesite.com')){
        echo'Ačiū, kad mums parašėte.';
      }else {
        echo 'Iškilo problema siunčiant pranešimą.'
      }
    }
  }
  else{
    echo'Visi laukai turi būti užpildyti'
  }
  }
}





?>

<!doctype html>
<html>
<head>
    <title>Šakenio alėja</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <meta http-equiv="content-type" content="text/html"/>
    <meta name="author" content="Jursla"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
     .centered {
   text-align: center;
   width: 100%;
 }
 .textarea {
   width: 100%;
   height: 200px;
   resize: none;
 }
 .nice {
  width: 100%;
  height:30px;
  margin-top: 10px;
  margin-bottom: 20px;
}
fieldset {background-color:black;}
    </style>
</head>
<body>
 
      <form name="sendemail" action=" " method="POST" >
      <fieldset>
      <input class="nice" name="yourname" type="text" placeholder="Vardas" required=""/><br>
      <input class="nice" name="subject" type="text" placeholder="Tel. numeris" required=""/><br>
      <input class="nice" name="email" type="text" placeholder="El. paštas" required=""/><br>
      <textarea type="text" name="message" placeholder="Jūsų klausimai mums"  required="" rows="10" cols="30"></textarea><br>
      <input class="centered" type="submit" value="SIŲSTI"/>
</fieldset>
 </form><br>

</body>
</html>
