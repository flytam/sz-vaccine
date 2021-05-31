import { getAreaList, getNum, getVaccineCorpList } from './services'
import config, { Config } from './config'
import { sendEmail } from './email'

const check = async (region: string, corp: string): Promise<boolean> => {
    const areaList = await getAreaList()
    const area = areaList.find((x) => new RegExp(region).test(x.NAME))
    const corpList = await getVaccineCorpList()
    // 科兴中维
    const target = corpList.find((x) => x.corpName === corp)

    const { list } = await getNum({
        areaCode: area?.VALUE || '',
        corpCode: target?.corpCode || '',
        bactCode: '5601',
    })

    const ans = list.filter((x) => x.status === '1' && x.nums > 0)
    const date = new Date()

    if (ans.length > 0) {
        const msg = `查询完成：${date.toLocaleString()} ${area?.NAME} ${
            target?.corpName
        }: 有疫苗
        `
        console.log(msg)
        sendEmail(ans.map((x) => x.outpName))
        return true
    }
    console.log(
        `查询完成：${date.toLocaleString()} ${area?.NAME} ${
            target?.corpName
        }: 暂时无疫苗`
    )
    return false
}

const task = async (params: [string, string][]) => {
    for (const [reigon, corp] of params) {
        const hasVaccine = await check(reigon, corp)
        if (hasVaccine) {
            setTimeout(() => {
                task(params)
            }, config.cooldownTime * 1000)
            return
        }
    }

    setTimeout(() => {
        task(params)
    }, config.interval * 1000)
}

const generateTaskParams = (config: Config): [string, string][] => {
    const taskParams: [string, string][] = []
    for (const region of config.region) {
        for (const corp of config.corp) {
            taskParams.push([region, corp])
        }
    }
    return taskParams
}

const taskParams = generateTaskParams(config)
task(taskParams)
