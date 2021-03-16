const { Router } = require('express');
const router = Router()

router.post('/', async(req, res) => {
    try {
        const API_KEY = `${process.env.API_KEY}`;
        const DOMAIN = `${process.env.DOMAIN}`;
        const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

        const data = {
            from: 'gkprofessionel@gmail.com',
            to: 'gkprofessionel@gmail.com',
            subject: 'Hello',
            text: 'Testing some Mailgun awesomeness!'
        };

        mailgun.messages().send(data, (error, body) => {
            if (error) {
                console.error('Error', error.message)
                res.status(400).json({ error: error.message })
            }

            console.log(body);
            res.json('Message sent')
        });
    } catch (err) {
        console.error('Err', err.message)
        res.status(500).json({ error: err.message })
    }

})

module.exports = router