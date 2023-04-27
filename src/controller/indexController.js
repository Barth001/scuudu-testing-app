require("dotenv").config();
const request = require('request');
const validator = require("email-validator");

const main = require("../utils/nodeMailerConfig");

class IndexController {

    // Contact us
    async contact(req, res){
        const { fullName, email, message } = req.body;
        
        const info = await main(fullName, email, message);
        if(info){
          res.status(200).send({message: "Message Successfully Sent!"});
        }else {
          res.status(401).send({message: "Message Could not be Sent"});
        }
      };


    // Add mailToMailchimp
    subscrib (req, res){
        const valid = validator.validate(req.body.email_address);
        if(!valid){
            return res.status(401).send({message: "Invalid email address"});
        }
        const options = {
        'method': 'POST',
        'url': `https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
        'headers': {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.MAILCHIMP_AUTH}`,
        'Cookie': `${process.env.MAILCHIMP_COOKIE}`
        },
        body: JSON.stringify({
            "email_address": req.body.email_address,
            "status": "subscribed"
        })

        };
        request(options, function (error, response) {
        if (!error){
            res.status(200).send({message: "You have been added to our audience!"});
        }else {
            res.status(500).send({message: "Try again later"});
            }
        });
    }

}

module.exports = new IndexController();

