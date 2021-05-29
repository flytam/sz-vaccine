'use strict'
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected)
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            )
        })
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const services_1 = require('./services')
const config_1 = __importDefault(require('./config'))
const email_1 = require('./email')
const check = (region, corp) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const areaList = yield services_1.getAreaList()
        const area = areaList.find((x) => new RegExp(region).test(region))
        const corpList = yield services_1.getVaccineCorpList()
        // 科兴中维
        const target = corpList.find((x) => x.corpName === corp)
        const { list } = yield services_1.getNum({
            areaCode:
                (area === null || area === void 0 ? void 0 : area.VALUE) || '',
            corpCode:
                (target === null || target === void 0
                    ? void 0
                    : target.corpCode) || '',
            bactCode: '5601',
        })
        const ans = list.filter((x) => x.nums > -1)
        const date = new Date()
        if (ans.length > 0) {
            const msg = `查询完成：${date.toLocaleString()} ${region} ${corp}: 有疫苗了
                    ${ans.reduce(
                        (str, item) =>
                            str +
                            `${item.outpName},${item.outpIntroduction},数量：${item.nums}\n`,
                        ''
                    )}
        `
            console.log(msg)
            email_1.sendEmail(msg)
        } else {
            console.log(
                `查询完成：${date.toLocaleString()} ${region} ${corp}: 暂时无疫苗`
            )
        }
    })
const task = () =>
    __awaiter(void 0, void 0, void 0, function* () {
        for (let region of config_1.default.region) {
            for (let corp of config_1.default.corp) {
                yield check(region, corp)
            }
        }
        setTimeout(() => {
            task()
        }, config_1.default.interval * 1000)
    })
task()
