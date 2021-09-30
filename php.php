<?php
require 'php/includes/PHPMailer.php'; 
require 'php/includes/SMTP.php';
require 'php/includes/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail=new PHPMailer();
$mail->isSMTP();
$mail->Host="smtp.gmail.com";
$mail->SMTPAuth=true;
$mail->SMTPSecure="tls";
$mail->Port="587";
$mail->Username="remainderevent@gmail.com";
$mail->Password="remainder111";
$mail->Subject="hello";
$mail->setFrom()

?>