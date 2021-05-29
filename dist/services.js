"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNum = exports.getAreaList = exports.getVaccineCorpList = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("./config"));
const instance = axios_1.default.create({
    baseURL: 'https://xgsz.szcdc.net/crmobile',
    headers: {
        token: config_1.default.token,
        appId: 'app569d18f5',
    },
});
instance.interceptors.response.use((res) => {
    if (res.data.ecode !== '1000') {
        throw new Error(res.data.msg);
    }
    return res;
});
// 查询疫苗种类
const getVaccineCorpList = () => __awaiter(void 0, void 0, void 0, function* () {
    return instance
        .get('/vaccine/getVaccineCorpList')
        .then((res) => res.data.data);
});
exports.getVaccineCorpList = getVaccineCorpList;
//  查询地域
const getAreaList = () => __awaiter(void 0, void 0, void 0, function* () {
    return instance
        .get('/outpatient/getAreaList')
        .then((res) => res.data.data);
});
exports.getAreaList = getAreaList;
// 查询疫苗
const getNum = ({ areaCode, bactCode, corpCode, }) => __awaiter(void 0, void 0, void 0, function* () {
    return instance
        .post('/outpatient/nearby', {
        areaCode,
        bactCode,
        pageNum: 1,
        numPerPage: 100,
        corpCode,
    })
        .then((res) => res.data.data);
});
exports.getNum = getNum;
