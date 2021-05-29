import nodemailer from 'nodemailer'
import config from './config'

const emailConfig = {
    service: 'QQ',
    auth: {
        user: config.email,
        //邮箱的授权码
        pass: config.passCode,
    },
}

const transporter = nodemailer.createTransport(emailConfig)

export const sendEmail = (msg: string) => {
    const mail = {
        // 发件人 邮箱  '昵称<发件人邮箱>'
        from: `"疫苗通知"<${config.email}>`,
        // 主题
        subject: msg,
        // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
        to: config.receives.join(','),
        html: msg,
    }

    transporter.sendMail(mail, function (error) {
        if (error) {
            return console.log(error)
        }
        transporter.close()
    })
}
