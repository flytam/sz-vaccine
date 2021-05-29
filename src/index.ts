import { getAreaList, getNum, getVaccineCorpList } from './services'
import config from './config'
import { sendEmail } from './email'

const check = async (region: string, corp: string) => {
    const areaList = await getAreaList()
    const area = areaList.find((x) => new RegExp(region).test(region))
    const corpList = await getVaccineCorpList()
    // 科兴中维
    const target = corpList.find((x) => x.corpName === corp)

    const { list } = await getNum({
        areaCode: area?.VALUE || '',
        corpCode: target?.corpCode || '',
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
        sendEmail(msg)
    } else {
        console.log(
            `查询完成：${date.toLocaleString()} ${region} ${corp}: 暂时无疫苗`
        )
    }
}

const task = async () => {
    for (let region of config.region) {
        for (let corp of config.corp) {
            await check(region, corp)
        }
    }
    setTimeout(() => {
        task()
    }, config.interval * 1000)
}

task()
