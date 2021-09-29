<?php     
ini_set('SMTP', "localhost");
ini_set('smtp_port', "25");
ini_set('sendmail_from', "remainderevent@gmail.com");
$to_email = 'angelfrancis1111@gmail.com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
mail($to_email,$subject,$message);
?>
<?php
echo "hello";
?>