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
        'Cookie': '_abck=215F2D7AED078E33C8183535EEABED10~-1~YAAQIzZ6XLKQ0J6HAQAAOUzzvAlt7gH7L0vFDUFe+pC4xD+mm8RCmMAcemOVacbrfOhN3gaqLklGjEfeO9/HWLhKUTi2ciDInDNGQFlvRO/MvGogDP0/uTTNb9lN8rV+n8sDt4DSG1hGRODk+KeFVr/sHingKaS2hwZI0sdjGC5rKoYy5DhGEXhdgQDrIpAbiN/eLc+6NurKtZZ5Ir+LHEc3NmiNMPsVpPpR8LaUC/+ULiUcTeenLV/+mihQsfdK+eYxhjJuP2fL/0Vu53dHFwcMv3ROfu3fbK5fdAIQpD2kPwAmTOi166InUsd2E37V2UkikVcg3urd85kUoa7FznLLpIfk2kCdkIGLKk2CGoaoL8+b2L31W2yMb9U=~-1~-1~-1; _mcid=1.18a8e11a7f58c418bf33f1139c1384b4.9d066defedcb908e3906b5abfc24eca0c63f7e5dfac2d4fd5aa13b4241edc8cb; ak_bmsc=EF455E43AED2BA8A0880280669CCD940~000000000000000000000000000000~YAAQP4fdWFBWea+HAQAAgl55vxPPES/BG1Wqq5+cgVjTqIjalKC8aDbUEP0fVvVS2zsSWToukWxemh8NYYh/C6O2aZqne2J+cqvAkegSbrgCuaEWaV6P8BQr9kldRt9cOvheHpdhLPXM3tQUivKA6KX+cHABfbrU9BnCCDnEO4L6qXznXfItFZ2LVqgUwwR4ZYduT0WZnN2FzM3/s5mpZVTuY0aQ2q13sIOsqcH0+b0BIJ9yjx6uqBGrIUdxysSi3lGNcEEwmtLCTe8odg/MbeUSqHolGYNRIey+DkRKEMZjdPkHCOgoUgMRwqEpM2gdujBqKxZW9oIPxC+a0QycUzxBzbCf7IotzyOG3ipsj2nYCowVBgCA1e3/S+Z+19ucFQ4/iA==; bm_sv=DB6569958205BAE313923D75DB72F4DE~YAAQVI9lX3NzlLSHAQAAB/GavxMBAblK/KzuXikFqgzaxdPP6KPkEu5J3eWgPDXDHeaAj1EDRY91YGR7UaCaYFDrpI1mqS3+SouPA5useShy1Uc/cqqqAsyWyRZ8QOnzhVf+qoM43coRkayPIKh2/j0xk0DsreXzDjuVR9V2Y9o5xkBAbvoLS4HyKgWTt49rvutHEIFMETPyio4Nb8MVhD36rHcUi2zerKB9QNa7BKRDOQciZeGvrfW0HASZkHKMp1SPufLgCg==~1'
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

