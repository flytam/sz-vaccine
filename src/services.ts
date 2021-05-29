import axios, { AxiosResponse } from 'axios'
import config from './config'

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
    return instance
        .post<
            Response<{
                list: {
                    /**
                     * 疫苗剩余号
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
        >('/outpatient/nearby', {
            areaCode,
            bactCode,
            pageNum: 1,
            numPerPage: 100,
            corpCode,
        })
        .then((res) => res.data.data)
}
