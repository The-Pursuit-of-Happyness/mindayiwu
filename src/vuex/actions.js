import plan_api from '../api/plan';
import group_api from '../api/group';
import mutual_aid_api from '../api/mutual_aid';
import order_api from '../api/order';
import vehicle_api from '../api/vehicle';
import wallet_api from '../api/wallet';
import profile_api from '../api/profile';
import pay_api from '../api/pay';
import checkcode_api from '../api/checkcode';
import bank_payment_api from '../api/bank_payment';
import cashout_api from '../api/cashout';
import mobile_api from '../api/mobile';
import person_api from '../api/person';
import quotation_api from '../api/quotation';
//-------------------- 
//-----------------------
import * as types from './mutation-types';

//cookie
export const fetchCookie = ({ commit, state }, cookies) => {
    if (!state.cookie.ctx.wxuser) {
        for (let cookie of cookies.split(";")) {
            let pair = cookie.split("=");
            if (pair[0].trim() === "wxuser") {
                commit(types.RECEIVE_COOKIE, { openid: pair[1].trim() });
                break;
            };
        }
    }
};
//plan

export const getJoinedPlans = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.JOINED_PLANS_REQUEST);
        plan_api.getJoinedPlans(state.cookie.ctx,
            (plan) => {
                commit(types.JOINED_PLANS_SUCCESS, { plan });
                resolve()
            },
            (err) => {
                commit(types.JOINED_PLANS_FAILURE);
                reject(err)
            });
    })
};

//group 互助组
//获得互助组信息 getGroup
export const getGroup = ({ commit, state }, gid) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_GROUP_REQUEST);
        group_api.getGroup(state.cookie.ctx, gid,
            (group) => {
                commit(types.GET_GROUP_SUCCESS, { group });
                resolve();
            },
            (err) => {
                commit(types.GET_GROUP_FAILURE);
                reject(err);
            });
    });
};
//获得当前用户的互助组 getGroupOfCurrentUser
export const getGroupOfCurrentUser = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_GROUP_CURRENT_USER_REQUEST);
        group_api.getGroupOfCurrentUser(state.cookie.ctx,
            (group) => {
                commit(types.GET_GROUP_CURRENT_USER_SUCCESS, { group });
                resolve();
            },
            (err) => {
                commit(types.GET_GROUP_CURRENT_USER_FAILURE);
                reject(err);
            });
    });
};
//获得用户的互助组 getGroupUser
export const getGroupUser = ({ commit, state }, openid) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_GROUP_USER_REQUEST);
        group_api.getGroupUser(state.cookie.ctx, openid,
            (group) => {
                commit(types.GET_GROUP_USER_SUCCESS, { group });
                resolve();
            },
            (err) => {
                commit(types.GET_GROUP_USER_FAILURE);
                reject(err);
            });
    });
};
//创建互助组 createGroup
export const createGroup = ({ commit, state }, [name, vid]) => {
    return new Promise((resolve, reject) => {
        commit(types.CREATE_GROUP_REQUEST);
        group_api.createGroup(state.cookie.ctx, name, vid,
            (group) => {
                commit(types.CREATE_GROUP_SUCCESS, { group });
                resolve();
            },
            (err) => {
                commit(types.CREATE_GROUP_FAILURE);
                reject(err);
            });
    });
};
//申请加入互助组 joinGroup
export const joinGroup = ({ commit, state }, [gid, vid]) => {
    return new Promise((resolve, reject) => {
        commit(types.JOIN_GROUP_REQUEST);
        group_api.joinGroup(state.cookie.ctx, gid, vid,
            (group) => {
                commit(types.JOIN_GROUP_SUCCESS, { group });
                resolve();
            },
            (err) => {
                commit(types.JOIN_GROUP_FAILURE);
                reject(err);
            });
    })
};
//同意加入申请 agree
export const Agree = ({ commit, state }, [piid, gid, vid]) => {
    return new Promise((resolve, reject) => {
        commit(types.AGREE_GROUP_REQUEST);
        group_api.agree(state.cookie.ctx, piid, gid, vid,
            (group) => {
                commit(types.AGREE_GROUP_SUCCESS, { group });
                resolve()
            },
            (err) => {
                commit(types.AGREE_GROUP_FAILURE);
                reject(err)
            });
    })
};
//拒绝加入申请 refuse
export const Refuse = ({ commit, state }, [piid, gid, vid]) => {
    return new Promise((resolve, reject) => {
        commit(types.REFUSE_GROUP_REQUEST);
        group_api.refuse(state.cookie.ctx, piid, gid, vid,
            (group) => {
                commit(types.REFUSE_GROUP_SUCCESS, { group });
                resolve()
            },
            (err) => {
                commit(types.REFUSE_GROUP_FAILURE);
                reject(err)
            });
    })
};
//查询申请结果 queryApplicationStatus
export const queryApplicationStatus = ({ commit, state }, [gid, vid]) => {
    return new Promise((resolve, reject) => {
        commit(types.QUERY_APPLICATION_REQUEST);
        group_api.queryApplicationStatus(state.cookie.ctx, gid, vid,
            (group) => {
                commit(types.QUERY_APPLICATION_SUCCESS, { group });
                resolve()
            },
            (err) => {
                commit(types.QUERY_APPLICATION_FAILURE);
                reject(err)
            });
    })
};
//获得当前用户的投票状况 getGroupPollsStatus
export const getGroupPollsStatus = ({ commit, state }, [piid]) => {
    return new Promise((resolve, reject) => {
        commit(types.GROUP_POLLS_STATUS_REQUEST);
        group_api.getGroupPollsStatus(state.cookie.ctx, piid,
            (group) => {
                commit(types.GROUP_POLLS_STATUS_SUCCESS, { group });
                resolve();
                console.log("action:getGroupPollsStatus");
                console.log(group);
            },
            (err) => {
                commit(types.GROUP_POLLS_STATUS_FAILURE);
                reject(err)
            });
    })
};
//获取长时间有效的token,仅限用于邀请好友 getInviteKey
export const getInviteKey = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_INVITE_KEY_REQUEST);
        group_api.getInviteKey(state.cookie.ctx,
            (group) => {
                commit(types.GET_INVITE_KEY_SUCCESS, { group });
                resolve();
            },
            (err) => {
                commit(types.GET_INVITE_KEY_FAILURE);
                reject(err)
            });
    })
};
//使用token获取用户的互助组（仅限用于邀请好友） getGroupOfInviteUser
export const getGroupOfInviteUser = ({ commit, state }, token) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_GROUP_OF_INVITE_USER_REQUEST);
        group_api.getGroupOfInviteUser(state.cookie.ctx, token,
            (group) => {
                commit(types.GET_GROUP_OF_INVITE_USER_SUCCESS, { group });
                resolve();
            },
            (err) => {
                commit(types.GET_GROUP_OF_INVITE_USER_FAILURE);
                reject(err)
            });
    })
};
//存放用户要加入的gid
export const setGid = ({ commit, state }, gid) => {
    commit(types.SET_GID, {
        gid: gid
    });
};
//保存用户的openid
export const setOpenId = ({ commit, state }, openId) => {
    commit(types.SET_OPEN_ID, {
        openId: openId
    })
};
//mutual_aid
export const getApplyFor = ({ commit, state }, [offset, limit]) => {
    return new Promise((resolve, reject) => {
        commit(types.APPLYFOR_AID_REQUEST);
        mutual_aid_api.getApplyFor(state.cookie.ctx, offset, limit,
            (mutual_aid) => {
                commit(types.APPLYFOR_AID_SUCCESS, { mutual_aid });
                resolve()
            },
            (err) => {
                commit(types.APPLYFOR_AID_FAILURE);
                reject(err)
            });
    })
};
export const getMutual = ({ commit, state }, aid) => {
    return new Promise((resolve, reject) => {
        commit(types.GETMUTUAL_AID_REQUEST);
        mutual_aid_api.getMutual(state.cookie.ctx, aid,
            (mutual_aid) => {
                commit(types.GETMUTUAL_AID_SUCCESS, { mutual_aid });
                resolve()
            },
            (err) => {
                commit(types.GETMUTUAL_AID_FAILURE);
                reject(err)
            });
    })
};
export const getMutuals = ({ commit, state }, [offset, limit]) => {
    return new Promise((resolve, reject) => {
        commit(types.GETMUTUALS_AID_REQUEST);
        mutual_aid_api.getMutuals(state.cookie.ctx, offset, limit,
            (mutual_aid) => {
                commit(types.GETMUTUALS_AID_SUCCESS, { mutual_aid });
                resolve()
            },
            (err) => {
                commit(types.GETMUTUALS_AID_FAILURE);
                reject(err)
            });
    })
};


//order

export const getOrder = ({ commit, state }, order_id) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_ORDER_REQUEST);
        order_api.getOrder(state.cookie.ctx, order_id,
            (order) => {
                commit(types.GET_ORDER_SUCCESS, { order });
                resolve(order);
            },
            (err) => {
                commit(types.GET_ORDER_FAILURE);
                reject(err);
            });
    })
};
//得到当前用户的全部订单
export const getOrders = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_ORDERS_REQUEST);
        order_api.getOrders(state.cookie.ctx,
            (order) => {
                commit(types.GET_ORDERS_SUCCESS, { order });
                resolve(order);
            },
            (err) => {
                commit(types.GET_ORDERS_FAILURE);
                reject(err);
            });
    });
};
//得到用户(含其他用户)的订单
export const getOrdersByOpenId = ({ commit, state }, [openId, offset, limit]) => {
    console.log('-----------' + openId);
    return new Promise((resolve, reject) => {
        commit(types.GET_ORDERS_OPENID_REQUEST);
        order_api.getOrders(openId, offset, limit,
            (order) => {
                commit(types.GET_ORDERS_OPENID_SUCCESS, { order });
                resolve();
            },
            (err) => {
                commit(types.GET_ORDERS_OPENID_FAILURE);
                reject(err);
            });
    });
};
//根据vid获取已生效计划订单
export const getPlanOrderByVehicle = ({ commit, state }, [vid]) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_ORDERS_VID_REQUEST);
        order_api.getPlanOrderByVehicle(state.cookie.ctx, vid,
            (order) => {
                commit(types.GET_ORDERS_VID_SUCCESS, { order });
                resolve(order);
            },
            (err) => {
                commit(types.GET_ORDERS_VID_FAILURE);
                reject(err);
            });
    });
};

//获取对应车的驾驶人信息
export const getDriverForVehicle = ({ commit, state }, [vid]) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_DRIVER_FOR_VEHICLE_REQUEST);
        order_api.getDriverForVehicle(state.cookie.ctx, vid,
            (order) => {
                commit(types.GET_DRIVER_FOR_VEHICLE_SUCCESS, { order });
                resolve(vid);
            },
            (err) => {
                commit(types.GET_DRIVER_FOR_VEHICLE_FAILURE);
                reject(err);
            });
    });
};


export const createPlanOrder = ({ commit, state }, [qid, vid, owner, insured, plans, expect_at, third_plan_selected]) => {
    return new Promise((resolve, reject) => {
        commit(types.ANPLAN_ORDER_REQUEST);
        order_api.createPlanOrder(state.cookie.ctx, qid, vid, owner, insured, plans, expect_at, third_plan_selected,
            (order) => {
                commit(types.ANPLAN_ORDER_SUCCESS, { order });
                resolve();
            },
            (err) => {
                commit(types.ANPLAN_ORDER_FAILURE);
                reject(err);
            });
    }); // end promise
};

//更新订单状态
export const updateOrderState = ({ commit, state }, [a, order_id, state_code, order_state]) => {
    return new Promise((resolve, reject) => {
        commit(types.UP_DATE_ORDER_STATE_REQUEST);
        order_api.updateOrderState(state.cookie.ctx, a, order_id, state_code, order_state,
            (order) => {
                commit(types.UP_DATE_ORDER_STATE_SUCCESS, { order });
                console.log('-----updateOrderState----');
                resolve()
            },
            (err) => {
                commit(types.UP_DATE_ORDER_STATE_FAILURE);
                reject(err)
            });
    })
};

//获取订单状态 getPlanOrderByQid
export const getPlanOrderByQid = ({ commit, state }, qid) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_PLAN_ORDER_BY_QID_REQUEST);
        order_api.getPlanOrderByQid(state.cookie.ctx, qid,
            (order) => {
                commit(types.GET_PLAN_ORDER_BY_QID_SUCCESS, { order });
                resolve(order);
            },
            (err) => {
                commit(types.GET_PLAN_ORDER_BY_QID_FAILURE);
                reject(err);
            })
    })
};

//根据验车ID得到验车信息
export const validOrder = ({ commit, state }, vid) => {
    return new Promise((resolve, reject) => {
        commit(types.VALID_ORDER_REQUEST);
        order_api.validOrder(state.cookie.ctx, vid,
            (order) => {
                console.log("aaa");
                commit(types.VALID_ORDER_SUCCESS, { order });
                resolve();
            },
            (err) => {
                console.log("aaa");
                commit(types.VALID_ORDER_FAILURE);
                reject(err);
            })
    })
};
//上传证件照 updateDrivingView
export const updateDrivingView = ({ commit, state }, [oid, driving_frontal_view, driving_rear_view, owner_id, identity_frontal_view, identity_rear_view, licenseSet]) => {
    return new Promise((resolve, reject) => {
        commit(types.UPDATE_DRIVING_VIEW_REQUEST);
        order_api.updateDrivingView(state.cookie.ctx, oid, driving_frontal_view, driving_rear_view, owner_id, identity_frontal_view, identity_rear_view, licenseSet,
            (order) => {
                commit(types.UPDATE_DRIVING_VIEW_SUCCESS, { order });
                resolve();
            },
            (err) => {
                commit(types.UPDATE_DRIVING_VIEW_FAILURE);
                reject(err);
            }
        )
    })
};


//存储用户选择的计划的oid
export const setOid = ({ commit, state }, oid) => {
    commit(types.SET_OID, {
        oid: oid
    })
};
//存储用户的vid
export const setVehicleId = ({ commit, state }, id) => {
    console.log('action setVehicleId', types.SET_VEHICLE_ID );
    commit(types.SET_VEHICLE_ID, {
        id: id
    })
};
//存储用户的驾驶人数量
export const setDriverNumber = ({ commit, state }, number) => {
    commit(types.SET_DRIVER_NUMBER, {
        number: number
    })
};
//保存司机单的价格
export const setDriverPrice = ({ commit, state }, price) => {
    commit(types.SET_DRIVER_PRICE, {
        price: price
    });
};
//保存用户未支付订单的状态
export const setPaymentStstus = ({ commit, state }, status) => {
    commit(types.SET_PAYMENT_STATUS, {
        status: status
    });
};
//vehicle  
export const getVehicleModel = ({ commit, state }, code) => {
    return new Promise((resolve, reject) => {
        commit(types.VEHICLE_VEHICLE_REQUEST);
        vehicle_api.getVehicleModel(state.cookie.ctx, code,
            (vehicle) => {
                commit(types.VEHICLE_VEHICLE_SUCCESS, { vehicle });
                resolve()
            },
            (err) => {
                commit(types.VEHICLE_VEHICLE_FAILURE);
                reject(err)
            });
    })
};

export const getVehicleInfos = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.INFOS_VEHICLE_REQUEST);
        vehicle_api.getVehicleInfos(state.cookie.ctx,
            (vehicle) => {
                commit(types.INFOS_VEHICLE_SUCCESS, { vehicle });
                resolve()
            },
            (err) => {
                commit(types.INFOS_VEHICLE_FAILURE);
                reject(err)
            });
    })
};
//提交驾驶人信息 setDriverInfo
export const setDriverInfo = ({ commit, state }, [order_id, drivers]) => {
        return new Promise((resolve, reject) => {
            commit(types.SET_DRIVER_INFO_REQUSET);
            mobile_api.setDriverInfo(state.cookie.ctx, order_id, drivers,
                (mobile) => {
                    commit(types.SET_DRIVER_INFO_SUCCESS, { mobile });
                    console.log("---------------------------");
                    resolve();
                },
                (err) => {
                    commit(types.SET_DRIVER_INFO_FAILURE);
                    reject(err);
                })
        })
    }
//修改驾驶人信息 changeDriverInfo
export const changeDriverInfo = ({ commit, state }, driver) => {
        return new Promise((resolve, reject) => {
            commit(types.CHANGE_DRIVER_INFO_REQUSET);
            let [vid, name, identity_no, phone] = driver;
            vehicle_api.changeDriverInfo(state.cookie.ctx, vid, name, identity_no, phone,
                (vehicle) => {
                    commit(types.CHANGE_DRIVER_INFO_SUCCESS, { vehicle });
                    resolve()
                },
                (err) => {
                    commit(types.CHANGE_DRIVER_INFO_FAILURE);
                    reject(err)
                }
            )
        })
    }
    //获取某个车信息 getVehicleInfo   vid
export const getVehicleInfo = ({ commit, state }, vid) => {
        return new Promise((resolve, reject) => {
            commit(types.GET_VEHICLE_INFO_REQUSET);
            vehicle_api.getVehicleInfo(state.cookie.ctx, vid,
                (vehicle) => {
                    commit(types.GET_VEHICLE_INFO_SUCCESS, { vehicle });
                    resolve(vehicle);
                },
                (err) => {
                    commit(types.GET_VEHICLE_INFO_FAILURE);
                    reject(err);
                }
            )
        })
    };

//根据vehicle_code得到车辆信息
export const getVehicleCode = ({ commit, state }, vehicle_code) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_VEHICLE_MODEL_REQUSET);
        vehicle_api.getVehicleCode(state.cookie.ctx, vehicle_code,
            (vehicle) => {
                commit(types.GET_VEHICLE_MODEL_SUCCESS, { vehicle });
                resolve()
            },
            (err) => {
                commit(types.GET_VEHICLE_MODEL_FAILURE);
                reject(err)
            })
    })
};
//暂时存放用户输入的一组数据
export const addDrivers = ({ commit, state }) => {
    vehicle_api.getAddDriver((vehicle) => {
        commit(types.ADD_DRIVER_VEHICLE, { vehicle })
    });
};
//用户注册时，添加的车主信息以及车辆信息的
export const getAddDriverInfo = ({ commit, state }) => {
    vehicle_api.getAddDriverInfo((vehicle) => {
        commit(types.ADD_DRIVER_INFO, { vehicle })
    });
};
//为报价流程设置刷新标志
export const setRefreshStatus = ({ commit, state }, status) => {
    commit(types.SET_REFRESH_STATUS, {
        status: status
    })
};
//传入暂存数据
export const setDriver = ({ commit, state }, driver) => {
    commit(types.ADD_DRIVER, {
        name: driver.name,
        identity_no: driver.identity,
        phone: driver.phone,
        is_primary: driver.is_primary
    })
};
//添加缓存驾驶人
export const add_cache_drivers = ({ commit, state }, drivers) => {
    commit(types.ADD_CACHE_DRIVER, {
        driver: drivers
    })
};
//清空添加驾驶人缓存中的驾驶人
export const clear_cache_driver = ({ commit, state }) => {
    commit(types.CLEAR_CACHE_DRIVER)
};

//清空缓存的驾驶人
export const clearDriver = ({ commit, state }) => {
    commit(types.CLEAR_DRIVER)
};
//新车是否上牌状态记录
export const setChecked = ({ commit, state }, checked) => {
    commit(types.STATE_CHECKED, {
        check: checked
    })
};
//车主是否是驾驶人状态记录
export const setIsOwner = ({ commit, state }, is_owner) => {
    commit(types.STATE_IS_OWNER, {
        is_own: is_owner
    })
};
//wallet 钱包模块

export const getTransactions = ({ commit, state }, [offset, limit]) => {
    return new Promise((resolve, reject) => {
        commit(types.TRANSACTIONS_WALLET_REQUEST);
        wallet_api.getTransactions(state.cookie.ctx, offset, limit,
            (wallet) => {
                commit(types.TRANSACTIONS_WALLET_SUCCESS, { wallet });
                resolve()
            },
            (err) => {
                commit(types.TRANSACTIONS_WALLET_FAILURE);
                reject(err)
            });
    })
};

export const getWallet = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_WALLET_REQUEST);
        wallet_api.getWallet(state.cookie.ctx,
            (wallet) => {
                commit(types.GET_WALLET_SUCCESS, { wallet });
                resolve(wallet);
            },
            (err) => {
                commit(types.GET_WALLET_FAILURE);
                reject(err);
            });
    });
};
export const applyCashOut = ({ commit, state }, [vids, isInclude]) => {
    return new Promise((resolve, reject) => {
        cashout_api.applyCashOut(state.cookie.ctx, vids, isInclude, (wallet) => {
                resolve(wallet);
            },
            (err) => {
                reject(err);
            });
    });
};
//profile是api中的profile 用户模块
////获得当前用户信息 getUserInfo
export const getUserInfo = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.USER_INFORMATION_REQUEST);
        profile_api.getUserInfo(state.cookie.ctx,
            (profile) => {
                commit(types.USER_INFORMATION_SUCCESS, { profile });
                resolve(profile);
            },
            (err) => {
                commit(types.USER_INFORMATION_FAILURE);
                reject(err);
            });
    })
};
//获得当前用户信息 getUserForInvite
export const getUserForInvite = ({ commit, state }, key) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_USER_FOR_INVITE_REQUEST);
        profile_api.getUserForInvite(state.cookie.ctx, key,
            (profile) => {
                commit(types.GET_USER_FOR_INVITE_SUCCESS, { profile });
                resolve();
            },
            (err) => {
                commit(types.GET_USER_FOR_INVITE_FAILURE);
                reject(err);
            });
    })
};
//获得用户信息 getUserInfoOpenid
export const getUserInfoOpenid = ({ commit, state }, openid) => {
    return new Promise((resolve, reject) => {
        commit(types.USER_INFO_OPENID_REQUEST);
        profile_api.getUserInfoOpenid(openid,
            (profile) => {
                commit(types.USER_INFO_OPENID_SUCCESS, { profile });
                resolve();
            },
            (err) => {
                commit(types.USER_INFO_OPENID_FAILURE);
                reject(err);
            });
    })
};
//根据userid获得用户信息 getUserInfoByUserIds
export const getUserInfoByUserIds = ({ commit, state }, uids) => {
    return new Promise((resolve, reject) => {
        commit(types.USER_INFO_IDS_REQUEST);
        profile_api.getUserInfoByUserIds(state.cookie.ctx, uids,
            (profile) => {
                commit(types.USER_INFO_IDS_SUCCESS, { profile });
                resolve();
            },
            (err) => {
                commit(types.USER_INFO_IDS_FAILURE);
                reject(err);
            });
    });
};
//根据userid获得用户信息 getUserInfoByUserId
export const getUserInfoByUserId = ({ commit, state }, uid) => {
    return new Promise((resolve, reject) => {
        commit(types.USER_INFO_ID_REQUEST);
        profile_api.getUserInfoByUserId(state.cookie.ctx, uid,
            (profile) => {
                commit(types.USER_INFO_ID_SUCCESS, { profile });
                resolve();
            },
            (err) => {
                commit(types.USER_INFO_ID_FAILURE);
                reject(err);
            });
    });
};
//获取投保人信息    
export const getInsured = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_INSURED_REQUEST);
        profile_api.getInsured(state.cookie.ctx,
            (profile) => {
                commit(types.GET_INSURED_SUCCESS, { profile });
                resolve(profile);
            },
            (err) => {
                commit(types.GET_INSURED_FAILURE);
                reject(err);
            });
    });
};
//查看用户是否通过指定方式进入    
export const getDiscountStatus = ({ commit, state }, people) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_DISCOUNT_STATUS_REQUEST);
        profile_api.getDiscountStatus(state.cookie.ctx, people,
            (profile) => {
                commit(types.GET_DISCOUNT_STATUS_SUCCESS, { profile });
                resolve();
            },
            (err) => {
                commit(types.GET_DISCOUNT_STATUS_FAILURE);
                reject(err);
            });
    });
};
//添加用户信息 addUserInfo
export const UserInfo = ({ commit, state }, [openid, gender, nickname, portrait]) => {
    return new Promise((resolve, reject) => {
        commit(types.USER_INFO_REQUEST);
        profile_api.addUserInfo(state.cookie.ctx, [openid, gender, nickname, portrait],
            (profile) => {
                commit(types.USER_INFO_SUCCESS, { profile });
                resolve();
            },
            (err) => {
                commit(types.USER_INFO_FAILURE);
                reject(err);
            });
    });
};

//quotation
export const getQuotation = ({ commit, state }, qid) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_QUOTATION_REQUEST);
        mobile_api.getQuotation(state.cookie.ctx, qid,
            (mobile) => {
                commit(types.GET_QUOTATION_SUCCESS, { mobile });
                resolve()
            },
            (err) => {
                reject(err)
            });
    })
};

//创建报价 createQuotation
export const createQuotation = ({ commit, state }, [verify_code, city_code, vehicle_code, vin, license_no, engine_no, register_date, is_transfer, last_insurance_company, insurance_due_date, fuel_type, accident_status, owner_name, owner_identity_no, insured_name, insured_identity_no, insured_phone, insurer_code, recommend, receipt_no, receipt_date]) => {
    return new Promise((resolve, reject) => {
        commit(types.CREATE_QUOTATION_REQUEST);
        mobile_api.createQuotation(state.cookie.ctx, verify_code, city_code, vehicle_code, vin, license_no, engine_no, register_date, is_transfer, last_insurance_company, insurance_due_date, fuel_type, accident_status, owner_name, owner_identity_no, insured_name, insured_identity_no, insured_phone, insurer_code, recommend, receipt_no, receipt_date,
            (mobile) => {
                commit(types.CREATE_QUOTATION_SUCCESS, { mobile });
                resolve();
            },
            (err) => {
                commit(types.CREATE_QUOTATION_FAILURE);
                reject(err)
            });
    })
};
export const setVid = ({ commit, state }, vid) => {
    commit(types.SET_VID, {
        vid: vid
    });
}
export const setQid = ({ commit, state }, qid) => {
        commit(types.SET_QID, {
            qid: qid
        })
    }
    //总价和订单号和时间
export const get_sum_price = ({ commit, state }, sum_price) => {
    commit(types.GET_SUM_PRICE, {
        sum_price: sum_price
    });
    console.log("-----action---sum_price----------");
}
export const get_order_number = ({ commit, state }, order_number) => {
    commit(types.GET_ORDER_NUMBER, {
        order_number: order_number
    });
    console.log("-----action---order_number----------");
}
export const get_created_at = ({ commit, state }, created_at) => {
        commit(types.GET_CREATED_AT, {
            created_at: created_at
        });
        console.log("-----action---created_at----------");
    }
    //pay
export const goPay = ({ commit, state }, args) => {
        return new Promise((resolve, reject) => {
            commit(types.GO_PAY_REQUEST);
            let [a0, a1, a2] = args;
            pay_api.getPay(state.cookie.ctx, a0, a1, a2,
                (pay) => {
                    commit(types.GO_PAY_SUCCESS, { pay });
                    resolve()
                },
                (err) => {
                    commit(types.GO_PAY_FAILURE);
                    reject(err)
                });
        })
    }
    //checkcode
export const sendMessage = ({ commit, state }, args) => {
    return new Promise((resolve, reject) => {
        commit(types.SEND_MESSAGE_REQUEST);
        let [a0, a1, a2] = args;
        checkcode_api.goSendMessage(state.cookie.ctx, a0, a1, a2,
            (checkcode) => {
                commit(types.SEND_MESSAGE_SUCCESS, { checkcode });
                resolve()
            },
            (err) => {
                commit(types.SEND_MESSAGE_FAILURE);
                reject(err)
            });
    })
};

export const SendMessageForOrder = ({ commit, state }, [openid, phone, reqtxt]) => {
    return new Promise((resolve, reject) => {
        checkcode_api.SendMessageForOrder(state.cookie.ctx, openid, phone, reqtxt,
            (checkcode) => {
                resolve(checkcode)
            },
            (err) => {
                reject(err)
            });
    })
};

export const verifyCheckcode = ({ commit, state }, args) => {
        return new Promise((resolve, reject) => {
            commit(types.VERIFY_CHECKCODE_REQUEST);
            let [a0, a1] = args;
            checkcode_api.goVerifyCheckcode(state.cookie.ctx, a0, a1,
                (checkcode) => {
                    commit(types.VERIFY_CHECKCODE_SUCCESS, { checkcode });
                    resolve();
                },
                (err) => {
                    commit(types.VERIFY_CHECKCODE_FAILURE);
                    reject(err);
                });
        })
    }
    //bank_payment
    //生成开户链接
export const UserRegisterUrl = ({ commit, state }, [a0, a1, a2, ordId, ordDate, transAmt,]) => {
    return new Promise((resolve, reject) => {
        commit(types.USER_REGISTER_URL_REQUEST);
        bank_payment_api.generateUserRegisterUrl(state.cookie.ctx, a0, a1, a2, ordId, ordDate, transAmt,
            (bank_payment) => {
                commit(types.USER_REGISTER_URL_SUCCESS, { bank_payment });
                resolve();
                //console.log("响应成功...")
            },
            (err) => {
                commit(types.USER_REGISTER_URL_FAILURE);
                reject(err);
            });
    });
};
//生成充值链接
export const NetSaveUrl = ({ commit, state }, [a0, a1, a2, a3]) => {
    return new Promise((resolve, reject) => {
        commit(types.NET_SAVE_URL_REQUEST);
        bank_payment_api.generateNetSaveUrl(state.cookie.ctx, a0, a1, a2, a3,
            (bank_payment) => {
                commit(types.NET_SAVE_URL_SUCCESS, { bank_payment });
                resolve(bank_payment);
            },
            (err) => {
                commit(types.NET_SAVE_URL_FAILURE);
                reject(err);
            });
    })
};

//生成自动投标计划链接 
export const AutoTenderPlanUrl = ({ commit, state }, pnrid) => {
    return new Promise((resolve, reject) => {
        commit(types.AUTO_TENDER_PLAN_URL_REQUEST);
        console.log('debug第一步');
        bank_payment_api.generateAutoTenderPlanUrl(state.cookie.ctx, pnrid,
            (bank_payment) => {
                commit(types.AUTO_TENDER_PLAN_URL_SUCCESS, { bank_payment });
                resolve(bank_payment);
                console.log('debug第一步');
            },
            (err) => {
                commit(types.AUTO_TENDER_PLAN_URL_FAILURE);
                reject(err);
                console.log('debug第一步');
            });
    })

};

// 校验支付状态
export const CheckPayment = ({ commit, state }, pay_order_id ) => {
    return new Promise((resolve, reject) => {
        bank_payment_api.checkPayment(state.cookie.ctx, pay_order_id,
            (check_payment) => {
                console.log("Action: CheckPayment =>" + JSON.stringify(check_payment));
                console.log(typeof(check_payment.code));
                if (check_payment.code === 200) {
                    var payment_status = 200;
                    commit(types.CHECK_PAYMENT_SUCCESS, { payment_status });
                    resolve(check_payment);
                } else {
                    commit(types.CHECK_PAYMENT_FAILURE);
                    reject(check_payment);
                }
            },
            (err) => {
                console.log("Action: CheckPayment =>" + err);
                commit(types.CHECK_PAYMENT_FAILURE);
                reject(err);
            }
        );
    });
};

export const GetNetSaveUrlByPnrId = ({ commit, state }, [pnrid, name, idNo, ordId, ordDate, transAmt]) => {
    return new Promise((resolve, reject) => {
        bank_payment_api.getNetSaveUrlByPnrId(state.cookie.ctx, pnrid, name, idNo, ordId, ordDate, transAmt,
            (res) => {
                console.log('Action: GetNetSaveUrlByPnrId scb:' + JSON.stringify(res));
                commit(types.PAYMENT_URL_PNRID_SUCCESS);
                resolve(res);
            }, (err) => {
                console.log('Action: GetNetSaveUrlByPnrId fcb:' + JSON.stringify(err));
                commit(types.PAYMENT_URL_PNRID_FAILURE);
                reject(err);
            }
        );
    });
};

//smartQuotation
export const getCarInfoByLicense = ({ commit, state }, license_no) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_CAR_INFO_BY_LICENSE_REQUEST);
        vehicle_api.getCarInfoByLicense(state.cookie.ctx, license_no,
            (vehicle) => {
                commit(types.GET_CAR_INFO_BY_LICENSE_SUCCESS, { vehicle });
                resolve();
            },
            (err) => {
                commit(types.GET_CAR_INFO_BY_LICENSE_FAILURE);
                reject(err);
            });
    })

};

export const storeVehicles = ({ commit, state }, [vehicleLists, license_no, is_transfer]) => {
    console.log(vehicleLists, license_no, is_transfer)
    return new Promise((resolve, reject) => {
        commit(types.STORE_VEHICLES_REQUEST, { vehicleLists, license_no, is_transfer });
        resolve();
    });
};

export const storeQuotation = ({ commit, state }, quotation) => {
    return new Promise((resolve, reject) => {
        commit(types.STORE_QUOTATION_REQUEST, { quotation });
        resolve();
    });
};

//mobile 模块（new）
export const getLastQuotation = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_LAST_QUOTATION_REQUEST);
        mobile_api.getLastQuotation(state.cookie.ctx,
            (last_quotation) => {
                commit(types.GET_LAST_QUOTATION_SUCCESS, { last_quotation });
                resolve();
            },
            (err) => {
                commit(types.GET_LAST_QUOTATION_FAILURE);
                reject(err);
            });
    });
};

export const saveOrderPdf = ({ commit, state }, [oid, mail, phone, vcode]) => {
    return new Promise((resolve, reject) => {
        mobile_api.saveOrderPdf(state.cookie.ctx, oid, mail, phone, vcode,
            (res) => {
                resolve(res);
            },
            (err) => {
                reject(err);
            });
    });
}
//person 模块（new）
export const updateViews = ({ commit, state }, [pid, identity_frontal_view, identity_rear_view, license_frontal_views]) => {
    return new Promise((resolve, reject) => {
        commit(types.UPDATE_VIEWS_REQUEST);
        person_api.updateViews(state.cookie.ctx, pid, identity_frontal_view, identity_rear_view, license_frontal_views,
            (person) => {
                commit(types.UPDATE_VIEWS_SUCCESS, { person });
                resolve();
            },
            (err) => {
                commit(types.UPDATE_VIEWS_FAILURE);
                reject(err);
            });
    });
};
//quotation 模块
export const getLastQuotations = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.GET_LAST_QUOTATIONS_REQUEST);
        quotation_api.getLastQuotations(state.cookie.ctx,
            (quotation) => {
                commit(types.GET_LAST_QUOTATIONS_SUCCESS, { quotation });
                resolve();
            },
            (err) => {
                commit(types.GET_LAST_QUOTATIONS_FAILURE);
                reject(err);
            });
    });
};

