const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'afif2011fahim@gmail.com',
        subject: 'Welcome to Task Manager App!',
        text: `Hello, ${name}! Thannks for joining in.`
    })
}

const sendCancleEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'afif2011fahim@gmail.com',
        subject: 'Goodbye!',
        text: `Sad to see you go ${name}! :(`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancleEmail
}
