//cookie
export const RECEIVE_COOKIE = 'RECEIVE_COOKIE';

//plan

export const AVAILABLE_PLANS_REQUEST = 'AVAILABLE_PLANS_REQUEST';
export const AVAILABLE_PLANS_SUCCESS = 'AVAILABLE_PLANS_SUCCESS';
export const AVAILABLE_PLANS_FAILURE = 'AVAILABLE_PLANS_FAILURE';

export const JOINED_PLANS_REQUEST = 'GET_PLAN_REQUEST';
export const JOINED_PLANS_SUCCESS = 'JOINED_PLANS_SUCCESS';
export const JOINED_PLANS_FAILURE = 'JOINED_PLANS_FAILURE';

export const GET_PLAN_REQUEST = 'GET_PLAN_REQUEST';
export const GET_PLAN_SUCCESS = 'GET_PLAN_SUCCESS';
export const GET_PLAN_FAILURE = 'GET_PLAN_FAILURE';
//group
//获得互助组信息 getGroup
export const GET_GROUP_REQUEST = 'GET_GROUP_REQUEST';
export const GET_GROUP_SUCCESS = 'GET_GROUP_SUCCESS';
export const GET_GROUP_FAILURE = 'GET_GROUP_FAILURE';
//获得当前用户的互助组 getGroupOfCurrentUser
export const GET_GROUP_CURRENT_USER_REQUEST = 'GET_GROUP_CURRENT_USER_REQUEST';
export const GET_GROUP_CURRENT_USER_SUCCESS = 'GET_GROUP_CURRENT_USER_SUCCESS';
export const GET_GROUP_CURRENT_USER_FAILURE = 'GET_GROUP_CURRENT_USER_FAILURE';
//获得用户的互助组 getGroupUser
export const GET_GROUP_USER_REQUEST = 'GET_GROUP_USER_REQUEST';
export const GET_GROUP_USER_SUCCESS = 'GET_GROUP_USER_SUCCESS';
export const GET_GROUP_USER_FAILURE = 'GET_GROUP_USER_FAILURE';
//创建互助组 createGroup
export const CREATE_GROUP_REQUEST = 'CREATE_GROUP_REQUEST';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = 'CREATE_GROUP_FAILURE';
//申请加入互助组 joinGroup
export const JOIN_GROUP_REQUEST = 'JOIN_GROUP_REQUEST';
export const JOIN_GROUP_SUCCESS = 'JOIN_GROUP_SUCCESS';
export const JOIN_GROUP_FAILURE = 'JOIN_GROUP_FAILURE';
//同意加入申请 agree
export const AGREE_GROUP_REQUEST = 'AGREE_GROUP_REQUEST';
export const AGREE_GROUP_SUCCESS = 'AGREE_GROUP_SUCCESS';
export const AGREE_GROUP_FAILURE = 'AGREE_GROUP_FAILURE';
//拒绝加入申请 refuse
export const REFUSE_GROUP_REQUEST = 'REFUSE_GROUP_REQUEST';
export const REFUSE_GROUP_SUCCESS = 'REFUSE_GROUP_SUCCESS';
export const REFUSE_GROUP_FAILURE = 'REFUSE_GROUP_FAILURE';
////查询申请结果 queryApplicationStatus
export const QUERY_APPLICATION_REQUEST = 'QUERY_APPLICATION_REQUEST';
export const QUERY_APPLICATION_SUCCESS = 'QUERY_APPLICATION_SUCCESS';
export const QUERY_APPLICATION_FAILURE = 'QUERY_APPLICATION_FAILURE';
//获得当前用户的投票状况 getGroupPollsStatus
export const GROUP_POLLS_STATUS_REQUEST = 'GROUP_POLLS_STATUS_REQUEST';
export const GROUP_POLLS_STATUS_SUCCESS = 'GROUP_POLLS_STATUS_SUCCESS';
export const GROUP_POLLS_STATUS_FAILURE = 'GROUP_POLLS_STATUS_FAILURE';
//使用token获取用户的互助组（仅限用于邀请好友） getGroupOfInviteUser
export const GET_GROUP_OF_INVITE_USER_REQUEST = 'GET_GROUP_OF_INVITE_USER_REQUEST';
export const GET_GROUP_OF_INVITE_USER_SUCCESS = 'GET_GROUP_OF_INVITE_USER_SUCCESS';
export const GET_GROUP_OF_INVITE_USER_FAILURE = 'GET_GROUP_OF_INVITE_USER_FAILURE';
//获取长时间有效的token,仅限用于邀请好友 getInviteKey
export const GET_INVITE_KEY_REQUEST = 'GET_INVITE_KEY_REQUEST';
export const GET_INVITE_KEY_SUCCESS = 'GET_INVITE_KEY_SUCCESS';
export const GET_INVITE_KEY_FAILURE = 'GET_INVITE_KEY_FAILURE';

////存放用户要加入的gid
export const SET_GID = 'SET_GID';
//保存用户的openid
export const SET_OPEN_ID = 'SET_OPEN_ID';
//mutual_aid

export const APPLYFOR_AID_REQUEST = 'APPLYFOR_AID_REQUEST';
export const APPLYFOR_AID_SUCCESS = 'APPLYFOR_AID_SUCCESS';
export const APPLYFOR_AID_FAILURE = 'APPLYFOR_AID_FAILURE';

export const GETMUTUAL_AID_REQUEST = 'GETMUTUAL_AID_REQUEST';
export const GETMUTUAL_AID_SUCCESS = 'GETMUTUAL_AID_SUCCESS';
export const GETMUTUAL_AID_FAILURE = 'GETMUTUAL_AID_FAILURE';

export const GETMUTUALS_AID_REQUEST = 'GETMUTUALS_AID_REQUEST';
export const GETMUTUALS_AID_SUCCESS = 'GETMUTUALS_AID_SUCCESS';
export const GETMUTUALS_AID_FAILURE = 'GETMUTUALS_AID_FAILURE';
//order

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILURE = 'GET_ORDER_FAILURE';
//得到当前用户的订单列表
export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';
//得到用户的订单列表 通过openid
export const GET_ORDERS_OPENID_REQUEST = 'GET_ORDERS_OPENID_REQUEST';
export const GET_ORDERS_OPENID_SUCCESS = 'GET_ORDERS_OPENID_SUCCESS';
export const GET_ORDERS_OPENID_FAILURE = 'GET_ORDERS_OPENID_FAILURE';


//根据vid获取订单
export const GET_ORDERS_VID_REQUEST = 'GET_ORDERS_VID_REQUEST';
export const GET_ORDERS_VID_SUCCESS = 'GET_ORDERS_VID_SUCCESS';
export const GET_ORDERS_VID_FAILURE = 'GET_ORDERS_VID_FAILURE';

//获取对应车的驾驶人信息
export const GET_DRIVER_FOR_VEHICLE_REQUEST = 'GET_DRIVER_FOR_VEHICLE_REQUEST';
export const GET_DRIVER_FOR_VEHICLE_SUCCESS = 'GET_DRIVER_FOR_VEHICLE_SUCCESS';
export const GET_DRIVER_FOR_VEHICLE_FAILURE = 'GET_DRIVER_FOR_VEHICLE_FAILURE';

export const ANPLAN_ORDER_REQUEST = 'ANPLAN_ORDER_REQUEST';
export const ANPLAN_ORDER_SUCCESS = 'ANPLAN_ORDER_SUCCESS';
export const ANPLAN_ORDER_FAILURE = 'ANPLAN_ORDER_FAILURE';

export const ANSALE_ORDER_REQUEST = 'ANSALE_ORDER_REQUEST';
export const ANSALE_ORDER_SUCCESS = 'ANSALE_ORDER_SUCCESS';
export const ANSALE_ORDER_FAILURE = 'ANSALE_ORDER_FAILURE';

//获取订单状态 getOrderState
export const GET_PLAN_ORDER_BY_QID_REQUEST = 'GET_PLAN_ORDER_BY_QID_REQUEST'
export const GET_PLAN_ORDER_BY_QID_SUCCESS = 'GET_PLAN_ORDER_BY_QID_SUCCESS'
export const GET_PLAN_ORDER_BY_QID_FAILURE = 'GET_PLAN_ORDER_BY_QID_FAILURE'
//上传图片
export const UPDATE_DRIVING_VIEW_REQUEST = 'UPDATE_DRIVING_VIEW_REQUEST'
export const UPDATE_DRIVING_VIEW_SUCCESS = 'UPDATE_DRIVING_VIEW_SUCCESS'
export const UPDATE_DRIVING_VIEW_FAILURE = 'UPDATE_DRIVING_VIEW_FAILURE'
//判断一个VIN码是否有订单 ValidOrder
export const VALID_ORDER_REQUEST = 'VALID_ORDER_REQUEST'
export const VALID_ORDER_SUCCESS = 'VALID_ORDER_SUCCESS'
export const VALID_ORDER_FAILURE = 'VALID_ORDER_FAILURE'

//得到验车信息
export const UNDER_WRITE_BY_ORDER_NUMBER_REQUEST = 'UNDER_WRITE_BY_ORDER_NUMBER_REQUEST'
export const UNDER_WRITE_BY_ORDER_NUMBER_SUCCESS = 'UNDER_WRITE_BY_ORDER_NUMBER_SUCCESS'
export const UNDER_WRITE_BY_ORDER_NUMBER_FAILURE = 'UNDER_WRITE_BY_ORDER_NUMBER_FAILURE'

export const UP_DATE_ORDER_STATE_REQUEST = 'UP_DATE_ORDER_STATE_REQUEST';
export const UP_DATE_ORDER_STATE_SUCCESS = 'UP_DATE_ORDER_STATE_SUCCESS';
export const UP_DATE_ORDER_STATE_FAILURE = 'UP_DATE_ORDER_STATE_FAILURE';

export const SET_OID = 'SET_OID'
export const SET_VEHICLE_ID = 'SET_VEHICLE_ID'
export const SET_DRIVER_NUMBER = 'SET_DRIVER_NUMBER'
export const SET_DRIVER_PRICE = 'SET_DRIVER_PRICE' //保存司机单的价格
export const SET_PAYMENT_STATUS = 'SET_PAYMENT_STATUS' //保存用户未支付订单的状态

//vehicle
export const VEHICLE_VEHICLE_REQUEST = 'VEHICLE_VEHICLE_REQUEST';
export const VEHICLE_VEHICLE_SUCCESS = 'VEHICLE_VEHICLE_SUCCESS';
export const VEHICLE_VEHICLE_FAILURE = 'VEHICLE_VEHICLE_FAILURE';

export const INFOS_VEHICLE_REQUEST = 'INFOS_VEHICLE_REQUEST';
export const INFOS_VEHICLE_SUCCESS = 'INFOS_VEHICLE_SUCCESS';
export const INFOS_VEHICLE_FAILURE = 'INFOS_VEHICLE_FAILURE';

//获取报价提交表单(新车已上牌)(个人)
export const SET_VEHICLE_INFO_REQUSET = 'SET_VEHICLE_INFO_REQUSET';
export const SET_VEHICLE_INFO_SUCCESS = 'SET_VEHICLE_INFO_SUCCESS';
export const SET_VEHICLE_INFO_FAILURE = 'SET_VEHICLE_INFO_FAILURE';
//获取报价提交表单(新车未上牌)（个人）
export const SET_VEHICLE_REQUSET = 'SET_VEHICLE_REQUSET';
export const SET_VEHICLE_SUCCESS = 'SET_VEHICLE_SUCCESS';
export const SET_VEHICLE_FAILURE = 'SET_VEHICLE_FAILURE';
//获取报价提交表单(新车未上牌)(企业)
export const SET_VEHICLE_ENTER_REQUSET = 'SET_VEHICLE_ENTER_REQUSET';
export const SET_VEHICLE_ENTER_SUCCESS = 'SET_VEHICLE_ENTER_SUCCESS';
export const SET_VEHICLE_ENTER_FAILURE = 'SET_VEHICLE_ENTER_FAILURE';
//获取报价提交表单(新车已上牌)(企业)
export const SET_ENTER_VEHICLE_REQUSET = 'SET_ENTER_VEHICLE_REQUSET';
export const SET_ENTER_VEHICLE_SUCCESS = 'SET_ENTER_VEHICLE_SUCCESS';
export const SET_ENTER_VEHICLE_FAILURE = 'SET_ENTER_VEHICLE_FAILURE';

//提交驾驶人信息
export const SET_DRIVER_INFO_REQUSET = 'SET_DRIVER_INFO_REQUSET';
export const SET_DRIVER_INFO_SUCCESS = 'SET_DRIVER_INFO_SUCCESS';
export const SET_DRIVER_INFO_FAILURE = 'SET_DRIVER_INFO_FAILURE';
//修改驾驶人信息
export const CHANGE_DRIVER_INFO_REQUSET = 'CHANGE_DRIVER_INFO_REQUSET';
export const CHANGE_DRIVER_INFO_SUCCESS = 'CHANGE_DRIVER_INFO_SUCCESS';
export const CHANGE_DRIVER_INFO_FAILURE = 'CHANGE_DRIVER_INFO_FAILURE';
//获取某个车的信息
export const GET_VEHICLE_INFO_REQUSET = 'GET_VEHICLE_INFO_REQUSET'
export const GET_VEHICLE_INFO_SUCCESS = 'GET_VEHICLE_INFO_SUCCESS'
export const GET_VEHICLE_INFO_FAILURE = 'GET_VEHICLE_INFO_FAILURE'
//根据vehicle_code 得到车的信息
export const GET_VEHICLE_MODEL_REQUSET = 'GET_VEHICLE_MODEL_REQUSET'
export const GET_VEHICLE_MODEL_SUCCESS = 'GET_VEHICLE_MODEL_SUCCESS'
export const GET_VEHICLE_MODEL_FAILURE = 'GET_VEHICLE_MODEL_FAILURE'
//暂存数据使用,用户非第一次添加驾驶人
export const ADD_DRIVER_VEHICLE = 'ADD_DRIVER_VEHICLE';
//用户注册时，添加的车主信息以及车辆信息的（第一次）
export const ADD_DRIVER_INFO = 'ADD_DRIVER_INFO'
//将用户输入的输入暂存（添加的多个驾驶人信息）
export const ADD_DRIVER = 'ADD_DRIVER';

//添加缓存驾驶人（上面的不好使）
export const ADD_CACHE_DRIVER = 'ADD_CACHE_DRIVER';
//为报价流程设置刷新标志
export const SET_REFRESH_STATUS = 'SET_REFRESH_STATUS';

//清除缓存中的驾驶人
export const CLEAR_CACHE_DRIVER = 'CLEAR_CACHE_DRIVER';

//新车是否上牌状态记录
export const STATE_CHECKED = 'STATE_CHECKED';
//车主手否是驾驶人的状态记录
export const STATE_IS_OWNER = 'STATE_IS_OWNER'

//wallet
export const ACCCOUNTS_WALLET_REQUEST = 'ACCCOUNTS_WALLET_REQUEST';
export const ACCCOUNTS_WALLET_SUCCESS = 'ACCCOUNTS_WALLET_SUCCESS';
export const ACCCOUNTS_WALLET_FAILURE = 'ACCCOUNTS_WALLET_FAILURE';

export const TRANSACTIONS_WALLET_REQUEST = 'TRANSACTIONS_WALLET_REQUEST';
export const TRANSACTIONS_WALLET_SUCCESS = 'TRANSACTIONS_WALLET_SUCCESS';
export const TRANSACTIONS_WALLET_FAILURE = 'TRANSACTIONS_WALLET_FAILURE';

export const GET_WALLET_REQUEST = 'GET_WALLET_REQUEST';
export const GET_WALLET_SUCCESS = 'GET_WALLET_SUCCESS';
export const GET_WALLET_FAILURE = 'GET_WALLET_FAILURE';


//profile
//获得当前用户信息 getUserInfo
export const USER_INFORMATION_REQUEST = 'USER_INFORMATION_REQUEST';
export const USER_INFORMATION_SUCCESS = 'USER_INFORMATION_SUCCESS';
export const USER_INFORMATION_FAILURE = 'USER_INFORMATION_FAILURE';
//获得用户信息 GET_USER_FOR_INVITE
export const GET_USER_FOR_INVITE_REQUEST = 'GET_USER_FOR_INVITE_REQUEST';
export const GET_USER_FOR_INVITE_SUCCESS = 'GET_USER_FOR_INVITE_SUCCESS';
export const GET_USER_FOR_INVITE_FAILURE = 'GET_USER_FOR_INVITE_FAILURE';
//获得用户信息 getUserInfoOpenid 
export const USER_INFO_OPENID_REQUEST = 'USER_INFO_OPENID_REQUEST';
export const USER_INFO_OPENID_SUCCESS = 'USER_INFO_OPENID_SUCCESS';
export const USER_INFO_OPENID_FAILURE = 'USER_INFO_OPENID_FAILURE';
//根据userid数组获得用户信息 getUserInfoByUserIds
export const USER_INFO_IDS_REQUEST = 'USER_INFO_IDS_REQUEST';
export const USER_INFO_IDS_SUCCESS = 'USER_INFO_IDS_SUCCESS';
export const USER_INFO_IDS_FAILURE = 'USER_INFO_IDS_FAILURE';

//根据单个userid获得用户信息 getUserInfoByUserId
export const USER_INFO_ID_REQUEST = 'USER_INFO_ID_REQUEST';
export const USER_INFO_ID_SUCCESS = 'USER_INFO_ID_SUCCESS';
export const USER_INFO_ID_FAILURE = 'USER_INFO_ID_FAILURE';
//添加用户信息 addUserInfo
export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'USER_INFO_FAILURE';
//获取投保人信息
export const GET_INSURED_REQUEST = 'GET_INSURED_REQUEST';
export const GET_INSURED_SUCCESS = 'GET_INSURED_SUCCESS';
export const GET_INSURED_FAILURE = 'GET_INSURED_FAILURE';
//查看用户是否通过指定方式进入
export const GET_DISCOUNT_STATUS_REQUEST = 'GET_DISCOUNT_STATUS_REQUEST';
export const GET_DISCOUNT_STATUS_SUCCESS = 'GET_DISCOUNT_STATUS_SUCCESS';
export const GET_DISCOUNT_STATUS_FAILURE = 'GET_DISCOUNT_STATUS_FAILURE';


//quotation
export const GET_QUOTATION_REQUEST = 'GET_QUOTATION_REQUEST';
export const GET_QUOTATION_SUCCESS = 'GET_QUOTATION_SUCCESS';
export const GET_QUOTATION_FAILURE = 'GET_QUOTATION_FAILURE';

export const CREATE_QUOTATION_REQUEST = 'CREATE_QUOTATION_REQUEST';
export const CREATE_QUOTATION_SUCCESS = 'CREATE_QUOTATION_SUCCESS';
export const CREATE_QUOTATION_FAILURE = 'CREATE_QUOTATION_FAILURE';

export const GET_QUOTATION_BY_VID_REQUEST = 'GET_QUOTATION_BY_VID_REQUEST';
export const GET_QUOTATION_BY_VID_SUCCESS = 'GET_QUOTATION_BY_VID_SUCCESS';
export const GET_QUOTATION_BY_VID_FAILURE = 'GET_QUOTATION_BY_VID_FAILURE';

export const SET_VID = 'SET_VID';
export const SET_QID = 'SET_QID';

export const GET_SUM_PRICE = 'GET_SUM_PRICE';
export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER';
export const GET_CREATED_AT = 'GET_CREATED_AT';

//pay
export const GO_PAY_REQUEST = 'GO_PAY_REQUEST';
export const GO_PAY_SUCCESS = 'GO_PAY_SUCCESS';
export const GO_PAY_FAILURE = 'GO_PAY_FAILURE';

//checkcode
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export const VERIFY_CHECKCODE_REQUEST = 'VERIFY_CHECKCODE_REQUEST';
export const VERIFY_CHECKCODE_SUCCESS = 'VERIFY_CHECKCODE_SUCCESS';
export const VERIFY_CHECKCODE_FAILURE = 'VERIFY_CHECKCODE_FAILURE';

//生成开户链接
export const USER_REGISTER_URL_REQUEST = 'USER_REGISTER_URL_REQUEST';
export const USER_REGISTER_URL_SUCCESS = 'USER_REGISTER_URL_SUCCESS';
export const USER_REGISTER_URL_FAILURE = 'USER_REGISTER_URL_FAILURE';
//生成充值链接
export const NET_SAVE_URL_REQUEST = 'NET_SAVE_URL_REQUEST';
export const NET_SAVE_URL_SUCCESS = 'NET_SAVE_URL_SUCCESS';
export const NET_SAVE_URL_FAILURE = 'NET_SAVE_URL_FAILURE';
//获得银行帐号 ID 
export const CUSTOMER_ID_REQUEST = 'CUSTOMER_ID_REQUEST';
export const CUSTOMER_ID_SUCCESS = 'CUSTOMER_ID_SUCCESS';
export const CUSTOMER_ID_FAILURE = 'CUSTOMER_ID_FAILURE';
//生成自动投标计划链接
export const AUTO_TENDER_PLAN_URL_REQUEST = 'AUTO_TENDER_PLAN_URL_REQUEST';
export const AUTO_TENDER_PLAN_URL_SUCCESS = 'AUTO_TENDER_PLAN_URL_SUCCESS';
export const AUTO_TENDER_PLAN_URL_FAILURE = 'AUTO_TENDER_PLAN_URL_FAILURE';

//生成自动投标计划状态查询链接
export const QUERY_TENDER_PLAN_URL_REQUEST = 'QUERY_TENDER_PLAN_URL_REQUEST';
export const QUERY_TENDER_PLAN_URL_SUCCESS = 'QUERY_TENDER_PLAN_URL_SUCCESS';
export const QUERY_TENDER_PLAN_URL_FAILURE = 'QUERY_TENDER_PLAN_URL_FAILURE';

//校验支付状态
export const CHECK_PAYMENT_SUCCESS = 'CHECK_PAYMENT_SUCCESS';
export const CHECK_PAYMENT_FAILURE = 'CHECK_PAYMENT_FAILURE';

export const PAYMENT_URL_PNRID_SUCCESS = 'PAYMENT_URL_PNRID_SUCCESS';
export const PAYMENT_URL_PNRID_FAILURE = 'PAYMENT_URL_PNRID_FAILURE';

export const SET_VIDQID_REQUEST = 'SET_VIDQID_REQUEST';

//车牌调车型
export const GET_CAR_INFO_BY_LICENSE_REQUEST = 'GET_CAR_INFO_BY_LICENSE_REQUEST';
export const GET_CAR_INFO_BY_LICENSE_SUCCESS = 'GET_CAR_INFO_BY_LICENSE_SUCCESS';
export const GET_CAR_INFO_BY_LICENSE_FAILURE = 'GET_CAR_INFO_BY_LICENSE_FAILURE';

//smartQuotation
export const STORE_VEHICLES_REQUEST = 'STORE_VEHICLES_REQUEST';
export const STORE_QUOTATION_REQUEST = 'STORE_QUOTATION_REQUEST';

//mobile
export const GET_LAST_QUOTATION_REQUEST = 'GET_LAST_QUOTATION_REQUEST';
export const GET_LAST_QUOTATION_SUCCESS = 'GET_LAST_QUOTATION_SUCCESS';
export const GET_LAST_QUOTATION_FAILURE = 'GET_LAST_QUOTATION_FAILURE';

//person
export const UPDATE_VIEWS_REQUEST = 'UPDATE_VIEWS_REQUEST';
export const UPDATE_VIEWS_SUCCESS = 'UPDATE_VIEWS_SUCCESS';
export const UPDATE_VIEWS_FAILURE = 'UPDATE_VIEWS_FAILURE';

//quotation
export const GET_LAST_QUOTATIONS_REQUEST = 'GET_LAST_QUOTATIONS_REQUEST';
export const GET_LAST_QUOTATIONS_SUCCESS = 'GET_LAST_QUOTATIONS_SUCCESS';
export const GET_LAST_QUOTATIONS_FAILURE = 'GET_LAST_QUOTATIONS_FAILURE';