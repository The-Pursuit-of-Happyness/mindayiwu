let fc_host = window.location.hostname;
let testserver = fc_host === 'dev-cdn-m.fengchaohuzhu.com' || fc_host === 'localhost' ? true : false;
export const API_SERVER = testserver ? 'http://10.145.0.05/' : 'http://10.203.87.61/';
export const REDIRECT_URL = API_SERVER + '/wx/login2';
export const RPC_SERVER_URL = API_SERVER + 'api/';
export const WEB_SERVER = testserver ? 'http://10.145.0.08/' : 'http://10.203.87.61/';
export const ALIYUN_OSS_SERVER = 'http://hive-data.oss-cn-beijing.aliyuncs.com/';
export const APP_ID = testserver ? 'wx41acdf257bb0648e' : 'wx2fd5eca80acdaec8';
export const PAY_DEBUG_OPTION = testserver;

export const PAY_HOST = testserver ? 'http://dev.pay.fengchaohuzhu.com/' : 'http://pay.fengchaohuzhu.com/';
export const TJ_HOST = 'http://tj.fengchaohuzhu.com';

function print_config() {
    console.log('### print global config');
    console.log('config.API_SERVER: ' + API_SERVER);
    console.log('config.RPC_SERVER_URL: ' + RPC_SERVER_URL);
    console.log('config.WEB_SERVER: ' + WEB_SERVER);
    console.log('config.ALIYUN_OSS_SERVER: ' + ALIYUN_OSS_SERVER);
    console.log('config.PAY_DEBUG_OPTION: ' + PAY_DEBUG_OPTION);
    console.log('config.APP_ID: ' + APP_ID);
}

export { print_config };