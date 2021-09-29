<?php     
$to_email = 'angelfrancis1111@gmail.com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
mail($to_email,$subject,$message);
?>
<?php
echo "hello";
?>