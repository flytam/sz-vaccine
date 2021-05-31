import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import config from './config'

const emailConfig = {
    service: 'QQ',
    auth: {
        user: config.email,
        // 邮箱的授权码
        pass: config.passCode,
    },
}

const transporter = nodemailer.createTransport(emailConfig)

export const sendEmail = (list: string[]) => {
    const mail: Mail.Options = {
        // 发件人 邮箱  '昵称<发件人邮箱>'
        from: `"疫苗通知"<${config.email}>`,
        // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
        to: config.receives.join(','),
        subject: '疫苗有号提醒',
        html: `<div>
            ${list.map((x) => `<p>${x}</p>`)}
        </div>`,
    }

    transporter.sendMail(mail, function (error) {
        if (error) {
            return console.log(error)
        }
        transporter.close()
    })
}
