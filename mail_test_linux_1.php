<?php 
 
 
$subject = "Test Message";
$from = "FROM: Yourname  test <postmaster@innovoskies.com>";
 
// send to this email address:
$email = "mailbox@domain.com";
 
 
// message body
 
$body = "test mail from ecommerce corporation...\r\n\r\n";
 
$body .= "best regrds,  \r\n";
$body .= "yourname.\r\n";
$body .= "-----------------\n\r\n";
 
 
if (!mail($email, $subject, $body, $from)) { echo "Error Sending Email!"; }
 
else
 
{ echo "Mail sent!"; }
 
?>