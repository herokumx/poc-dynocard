<?php

	if (file_exists("../js/row-plugins.js")) {
		// Please put your PHP code here
		//
		// You can use entered name variable as $_POST['contact_name'], e-mail variable as $_POST['contact_email'], message variable as $_POST['contact_message']

		// Please insert here your email address:
		// $myMail  = 'PUT_YOUR_EMAIL_ADDRESS_HERE';
		// $myMail  = 'nahian@webpers.com';
		$myMail  = 'traivan98-1@gmail.com';

		$to      = $myMail;

		$name = $_POST['hold_contact_name'];
		$email = $_POST['hold_contact_email'];



		$subject = 'Message Subject' ;
		

		// $subject = $_POST['hold_contact_subject'];
		// $website = $_POST['hold_contact_website'];
		$message = $_POST['hold_contact_message'];


		$Body = 
		'Name:' . $name . "\r\n" 
		. 'Email:' . $email . "\r\n"
		. 'Message: ' . "\r\n" . $message  ;

		// $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";

		$headers = 'From: '.$_POST['hold_contact_email']. "\r\n" .
		    'Reply-To: '.$_POST['hold_contact_email']. "\r\n" .
		    'X-Mailer: PHP/' . phpversion();

		mail($to, $subject, $Body, $headers);
	}
	
?>