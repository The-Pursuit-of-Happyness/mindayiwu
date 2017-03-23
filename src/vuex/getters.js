// cookie
export const cookie = state => state.cookie.ctx

// plan
export const joinedPlans = state => state.plan.joined

    // group
    //获得互助组信息 getGroup
export const getGroup = state => state.group.getGroup
export const getGroupStatus = state => state.group.getGroupStatus
    //获得当前用户的互助组 getGroupOfCurrentUser
export const getGroupOfCurrentUser = state => state.group.getGroupOfCurrentUser
export const getGroupOfCurrentUserStatus = state => state.group.getGroupOfCurrentUserStatus
    //获得用户的互助组 getGroupUser
export const getGroupUser = state => state.group.getGroupUser
export const getGroupUserStatus = state => state.group.getGroupUserStatus
    //创建互助组 createGroup
export const createGroup = state => state.group.createGroup
export const createGroupStatus = state => state.group.createGroupStatus
    //申请加入互助组 joinGroup
export const joinGroup = state => state.group.joinGroup
export const joinGroupStatus = state => state.group.joinGroupStatus
    //申请加入互助组 joinGroup
export const agree = state => state.group.agree
export const agreeStatus = state => state.group.agree
    //拒绝加入申请 refuse
export const refuse = state => state.group.refuse
export const refuseStatus = state => state.group.refuseStatus
    //查询申请结果 queryApplicationStatus
export const queryApplication = state => state.group.queryApplication
export const queryApplicationStatus = state => state.group.queryApplicationStatus
    //获得当前用户的投票状况 getGroupPollsStatus
export const groupPolls = state => state.group.getGroupPolls
export const groupPollsStatus = state => state.group.getGroupPollsStatus
    //使用token获取用户的互助组（仅限用于邀请好友） getGroupOfInviteUser
export const groupOfInviteUser = state => state.group.getGroupOfInviteUser
export const groupOfInviteUserStatus = state => state.group.getGroupOfInviteUserStatus
    //获取长时间有效的token,仅限用于邀请好友 getInviteKey
export const inviteKey = state => state.group.getInviteKey
export const inviteKeyStatus = state => state.group.getInviteKeyStatus

//存放用户要加入的gid
export const setGid = state => state.group.setGid
    //保存用户的openid
export const openId = state => state.group.openId

//mutual_aid
export const applyfor = state => state.mutual_aid.applyfor
export const getmutual = state => state.mutual_aid.getmutual
export const getmutuals = state => state.mutual_aid.getmutuals
export const applyforStatus = state => state.mutual_aid.applyforStatus
export const getmutualState = state => state.mutual_aid.getmutualState
export const getmutualsStatus = state => state.mutual_aid.getmutualsStatus
    //order
export const checkCode = state => state.order.checkCode
export const order = state => state.order.getOrder
export const getOrderStatus = state => state.order.getOrderStatus

export const orders = state => state.order.getOrders
export const getOrdersStatus = state => state.order.getOrdersStatus

export const ordersByOpenid = state => state.order.getOrdersByOpenid
export const getOrdersByOpenidStatus = state => state.order.getOrdersByOpenidStatus

export const planOrderByVehicle = state => state.order.getPlanOrderByVehicle
export const planOrderByVehicleStatus = state => state.order.getPlanOrderByVehicleStatus

export const driverForVehicle = state => state.order.getDriverForVehicle
export const driverForVehicleStatus = state => state.order.getDriverForVehicleStatus

//下计划单 placeAnPlanOrder
export const anPlanOrder = state => state.order.placeAnPlanOrder
export const placeAnPlanOrderStatus = state => state.order.placeAnPlanOrderStatus

//更新订单状态
export const updateOrderState = state => state.order.updateOrderState
export const updateOrderStateStatus = state => state.order.updateOrderStateStatus

//获取订单状态 planOrderInfo
export const planOrderInfo = state => state.order.planOrderInfo
export const planOrderInfoStatus = state => state.order.planOrderInfoStatus

//上传证件照片
export const uploadImage = state => state.order.uploadImage
export const uploadImageStatus = state => state.order.uploadImageStatus

//判断一个VIN码是否有订单
export const ValidOrder = state => state.order.ValidOrder
export const ValidOrderStatus = state => state.order.ValidOrderStatus

//存储用户选择的计划的id
export const oid = state => state.order.oid
//存储用户的vehicle_code
export const setVehicleId = state => state.order.setVehicleId
//存储用户的驾驶人数量
export const driver_num = state => state.order.driver_num
//保存司机单的价格
export const diverPrice = state => state.order.diverPrice
//保存司机未支付的订单是否还在有效期中
export const paymentStatus = state => state.order.paymentStatus

//vehicle模块
//用户输入车型代码
export const vehicleModel = state => state.vehicle.vehicleModel
export const vehicleModelApiStatus = state => state.vehicle.vehicleModelApiStatus

//用户所有车辆的信息
export const vehicleInfos = state => state.vehicle.vehicleInfos
export const vehicleInfosApiStatus = state => state.vehicle.vehicleInfosApiStatus

//车牌调取车型信息
export const carInfoByLicense = state => state.vehicle.carInfoByLicense
export const carInfoByLicenseStatus = state => state.vehicle.carInfoByLicenseStatus

//修改驾驶人信息
export const changeDriverInfo = state => state.vehicle.changeDriverInfo
export const changeDriverInfoStatus = state => state.vehicle.changeDriverInfoStatus
//获取某个车的信息 
export const getVehicleInfo = state => state.vehicle.getVehicleInfo
export const getVehicleInfoStatus = state => state.vehicle.getVehicleInfoStatus

//根据vehicle_code得到车辆信息
export const getVehicleCode = state => state.vehicle.getVehicleCode
export const getVehicleCodeStatus = state => state.vehicle.getVehicleCodeStatus
//查看用户上传证件情况 UserUploadStatus
export const UserUploadStatus = state => state.vehicle.UserUploadStatus
export const UserUploadStatusStatus = state => state.vehicle.UserUploadStatusStatus
//暂存用户输入的一个驾驶人信息
export const addDriverVehicle = state => state.vehicle.addDriverVehicle
//用户输入的车辆信息
export const addDriverInfo = state => state.vehicle.addDriverInfo
//添加缓存中的驾驶人
export const driver = state => state.vehicle.driver

//添加缓存中的驾驶人
export const cache_driver = state => state.vehicle.add_cache_driver

//清除缓存中的驾驶人
export const clear_cache_driver = state => state.vehicle.clear_cache_driver

//新车是否上牌状态记录
export const checked = state => state.vehicle.checked

//车主是否是驾驶人状态记录
export const is_owner = state => state.vehicle.is_owner

//wallet
export const accounts = state => state.wallet.accounts
export const accountsStatus = state => state.wallet.accountsStatus

export const transaction = state => state.wallet.transaction
export const transactionStatus = state => state.wallet.transactionStatus

export const getWallet = state => state.wallet.getWallet
export const getWalletStatus = state => state.wallet.getWalletStatus

//profile
export const userInformation = state => state.profile.userInformation
export const userInformationApiStatus = state => state.profile.userInformationApiStatus
//获得用户信息 getUserInfoOpenid 
export const userInfoOpenid = state => state.profile.userInfoOpenid
export const userInfoOpenidStatus = state => state.profile.userInfoOpenidStatus
//获得用户信息 getUserForInvite
export const userForInvite = state => state.profile.getUserForInvite
export const userForInviteStatus = state => state.profile.getUserForInviteStatus
//根据userid数组获得用户信息 getUserInfoByUserIds
export const userInfoByUserIds = state => state.profile.userInfoByUserIds
export const userInfoByUserIdsStatus = state => state.profile.userInfoByUserIdsStatus
//根据单个userid获得用户信息 getUserInfoByUserId
export const userInfoByUserId = state => state.profile.userInfoByUserId
export const userInfoByUserIdStatus = state => state.profile.userInfoByUserIdStatus
//添加用户信息 addUserInfo
export const UserInfo = state => state.profile.UserInfo
export const UserInfoStatus = state => state.profile.UserInfoStatus
//获取投保人信息
export const insuredInfo = state => state.profile.insuredInfo
export const insuredInfoStatus = state => state.profile.insuredInfoStatus
//查看用户是否通过指定方式进入 getDiscount
export const discountStatus = state => state.profile.getDiscount
export const getDiscountStatus = state => state.profile.getDiscountStatus

//获取报价根据vid
export const quotationByVid = state => state.quotation.getQuotationByVid
export const quotationByVidStatus = state => state.quotation.getQuotationByVidStatus

//为报价流程设置刷新标志
export const refresh_flag = state => state.mobile.refresh_flag

//保存报价页的vid和qid
export const vid = state => state.quotation.vid
export const qid = state => state.quotation.qid

//缓存报价页的总价和订单号和时间
export const sum_price = state => state.quotation.sum_price
export const order_number = state => state.quotation.order_number
export const created_at = state => state.quotation.created_at
//pay
export const pay = state => state.pay.goPay
export const goPayStatus = state => state.pay.goPayStatus

//checkcode
export const sendMessage = state => state.checkcode.sendMessage
export const sendMessageStatus = state => state.checkcode.sendMessageStatus

export const verifyCheckcode = state => state.checkcode.verifyCheckcode
export const verifyCheckcodeStatus = state => state.checkcode.verifyCheckcodeStatus

//bank_payment
export const UserRegisterUrl = state => state.bank_payment.UserRegisterUrl
export const UserRegisterUrlStatus = state => state.bank_payment.UserRegisterUrlStatus

export const NetSaveUrl = state => state.bank_payment.NetSaveUrl
export const NetSaveUrlStatus = state => state.bank_payment.NetSaveUrlStatus

export const AutoTenderPlanUrl = state => state.bank_payment.AutoTenderPlanUrl
export const AutoTenderPlanUrlStatus = state => state.bank_payment.AutoTenderPlanUrlStatus

export const preparePayVid = state => state.order.preparePayVid
export const preparePayQid = state => state.order.preparePayQid

//smartQuotation
export const vehicleLists = state => state.vehicle.vehicleLists
export const license_no = state => state.vehicle.license_no
export const is_transfer = state => state.vehicle.is_transfer

//mobile模块

//最后一次报价
export const lastQuotation = state => state.mobile.lastQuotation
export const lastQuotationStatus = state => state.mobile.lastQuotationStatus

//提交驾驶人信息
export const setDriverInfo = state => state.mobile.setDriverInfo
export const setDriverInfoStatus = state => state.mobile.setDriverInfoStatus

//获取车辆报价信息 getQuotation
export const quotation = state => state.mobile.quotation
export const quotationStatus = state => state.mobile.quotationStatus

//创建报价
export const createQuotation = state => state.mobile.createQuotation
export const createQuotationStatus = state => state.mobile.createQuotationStatus

//person 模块
export const updateViews = state => state.person.updateViews
export const updateViewsStatus = state => state.person.updateViewsStatus

//quotation 模块
export const lastQuotations = state => state.quotation.lastQuotations
export const lastQuotationsStatus = state => state.quotation.lastQuotationsStatus