//SendEmail.js
//Module to send simple text based emails	

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'XXX',
        pass: 'XXX'
    }
});

/**
* Send text based email. Can add HTML content later if needed.
* @param addresses: array of email address strings
* @param subject - String subject line of the email
* @param text - plain text body content of the email.
*/
function sendEmail(addresses, subject, text){
	
	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Environmentalicious', // sender address
	    to: addresses, // list of receivers
	    subject: subject, // Subject line
	    text: text, // plaintext body
	    html: '' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message Sent: ' + info.response);
	    }
	});
}

module.exports = {
	sendEmail : sendEmail
}