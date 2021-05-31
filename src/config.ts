import fs from 'fs'
import path from 'path'

export interface Config {
    region: string[]
    corp: string[]
    email: string
    passCode: string
    token: string
    interval: number
    receives: string[]
    cooldownTime: number
}

const defaultConfig: Partial<Config> = {
    interval: 30,
    cooldownTime: 3600,
}

const config: Config = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../config.json'), {
        encoding: 'utf-8',
    })
)

export default {
    ...defaultConfig,
    ...config,
}
