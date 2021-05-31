'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.sendEmail = void 0
const nodemailer_1 = __importDefault(require('nodemailer'))
const config_1 = __importDefault(require('./config'))
const emailConfig = {
    service: 'QQ',
    auth: {
        user: config_1.default.email,
        //邮箱的授权码
        pass: config_1.default.passCode,
    },
}
const transporter = nodemailer_1.default.createTransport(emailConfig)
const sendEmail = (msg) => {
    const mail = {
        // 发件人 邮箱  '昵称<发件人邮箱>'
        from: `"疫苗通知"<${config_1.default.email}>`,
        // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
        to: config_1.default.receives.join(','),
        html: msg,
    }
    transporter.sendMail(mail, function (error) {
        if (error) {
            return console.log(error)
        }
        transporter.close()
    })
}
exports.sendEmail = sendEmail
