<?php
require 'php/includes/PHPMailer.php'; 
require 'php/includes/SMTP.php';
require 'php/includes/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
if (isset($_POST['submitmessage'])) 
{
    $message = $_POST['message'];
    $name = $_POST['name'];
    $email = $_POST['email'];
	$mail=new PHPMailer();
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->SMTPAuth=true;
	$mail->SMTPSecure="tls";
	$mail->Port="587";
	$mail->Username="remainderevent@gmail.com";
	$mail->Password="remainder111";
	$mail->Subject="hello";
	$mail->setFrom("remainderevent@gmail.com");
	$mail->Body="message"+$message;
	$mail->addAddress("angelfrancis1806@gmail.com");
	if($mail->Send())
	echo "sent";
	else
	echo "error";
	$mail->smtpClose();
}
?>