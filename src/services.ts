import axios, { AxiosResponse } from 'axios'
import config from './config'
import FormData from 'form-data'
interface Response<T = unknown> {
    msg: string
    ecode: string
    data: T
}

const instance = axios.create({
    baseURL: 'https://xgsz.szcdc.net/crmobile',
    headers: {
        token: config.token,
        appId: 'app569d18f5',
        selfappid: 'wx5402a9708b90332e',
        'user-agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    },
})

instance.interceptors.response.use((res: AxiosResponse<Response>) => {
    if (res.data.ecode !== '1000') {
        throw new Error(res.data.msg)
    }
    return res
})

// 查询疫苗种类
export const getVaccineCorpList = async () => {
    return instance
        .get<
            Response<
                {
                    corpCode: string
                    corpName: string
                }[]
            >
        >('/vaccine/getVaccineCorpList')
        .then((res) => res.data.data)
}

//  查询地域
export const getAreaList = async () => {
    return instance
        .get<
            Response<
                {
                    NAME: string
                    /**
                     * 用于查询疫苗
                     */
                    VALUE: string
                }[]
            >
        >('/outpatient/getAreaList')
        .then((res) => res.data.data)
}

// 查询疫苗
export const getNum = async ({
    areaCode,
    bactCode,
    corpCode,
}: {
    areaCode: string
    bactCode: string
    corpCode: string
}) => {
    const formData = new FormData()
    formData.append('areaCode', areaCode)
    formData.append('bactCode', bactCode)
    formData.append('pageNum', 1)
    formData.append('numPerPage', 10)
    formData.append('corpCode', corpCode)

    return instance
        .post<
            Response<{
                list: {
                    /**
                     * 疫苗是否能打
                     */
                    status: '1' | '0'
                    /**
                     * 剩余疫苗
                     */
                    nums: number
                    /**
                     * 名称
                     */
                    outpName: string
                    /**
                     * 描述
                     */
                    outpIntroduction: string
                }[]
            }>
        >('/outpatient/nearby', formData, {
            headers: formData.getHeaders(),
        })
        .then((res) => res.data.data)
}
