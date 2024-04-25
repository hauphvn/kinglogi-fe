
export const ENV = {
    DEV: 'development',
    PRO: 'production'
}
export const NAV_PATH = {
    HOME: '/',
    SIGN_IN: '/signIn',
    SIGN_UP: '/signUp',
    FORGET_PASSWORD: '/forgetPassword',
    DASHBOARD: '/admin/dashboard',
    USER: {
        DASHBOARD: '/user/dashboard',
        SALARY: '/user/dashboard/salary',
        TIME_CHECKING: '/user/dashboard/timeChecking',
        CHECK_WAREHOUSE: '/user/dashboard/checkWarehouse',

    },
    ADMIN: {
        DASHBOARD: '/admin/dashboard',
        MANAGEMENT_STAFF: '/admin/dashboard/management/staff',
        SETTING_SALARY: '/admin/dashboard/management/salary/setting',
        CHECK_IN_OUT: '/admin/dashboard/management/salary/checkInOut',
        CHECK_IN_OUT_APP: '/admin/dashboard/management/salary/checkInOutApp',
        CALC_SALARY: '/admin/dashboard/management/salary/calc',
        PRODUCT_WAREHOUSE: '/admin/dashboard/management/warehouse/product',
        GAME_WHEEL: '/admin/dashboard/management/eventSystem/wheel',
        GIFT_FOR_BILL_TOTAL: '/admin/dashboard/management/eventSystem/gift-for-bill-total',
        DISCOUNT_FOR_BILL_TOTAL: '/admin/dashboard/management/eventSystem/discount-for-bill-total',
        INCREASE_FOR_BILL_TOTAL: '/admin/dashboard/management/eventSystem/increase-for-bill-total',
        SYSTEM: '/admin/dashboard/management/system/common-install',
    },
    CODE_TO_START_GAME: {
        INDEX: '/code-to-start-game',
        ADD: '/code-to-start-game/add',
        VALIDATE: '/code-to-start-game/check'
    },
    CODE_TO_WIN_GAME: {
        INDEX: '/code-to-win-game',
        ADD: '/code-to-win-game/add',
        VALIDATE: '/code-to-win-game/check'
    },
    CUSTOMER_POS: {
        INDEX: '/customer',
        GET_ONE: '/customer/member-for-pos',
        ADD_ONE: '/customer/add-from-web-pos'
    },
    TOKEN_ACCESS_CUSTOMER_POS: {
        INDEX: '/token-access-registry-from-pos',
        GET_ONE: '/token-access-registry-from-pos/get',
        ADD_ONE: '/token-access-registry-from-pos/add',
        DEL_ONE: '/token-access-registry-from-pos/delete',
    },
}
export const API_PATH = {
    // API_LINK: 'http://192.168.1.3:4200/v1/api',
    API_LINK: 'https://api.kaykafe.com/v1/api',
    LOGIN: '/user/sign-in',
    RESET_PWD_STAFF: '/reset-password-staff',
    LOGOUT: '/user/log-out',
    SETTING: {
        ROLE_JOB: {
            ADD_NEW: '/setting/role-job/add-new',
            GET_ALL: '/setting/role-job/get-all',
            UPDATE: '/setting/role-job',
            DELETE: '/setting/role-job',
            GET_ONE: '/setting/role-job',
        },
        INCREASE_SALARY: {
            ADD_NEW: '/setting/increase-salary/add-new',
            GET_ALL: '/setting/increase-salary/get-all',
            DELETE: '/setting/increase-salary',
        },
    },
    ROLE: {
        GET_ALL: '/role/get-all'
    },
    BONUS_HOLIDAY: {
        GET_ALL_BY_DATE_ID: '/bonus-holiday/get-all-by-id-date'
    },
    ROLE_STAFF: {
        GET_ALL: '/role-staff/get-all'
    },
    USER_STAFF: {
        ADD_NEW: '/user/add',
        GET_ALL: '/user/staff/get-all',
        GET_ALL_EMAIL: '/user/staff/get-all-email',
        GET_ACTIVE_EMAILS: '/user/staff/get-active-emails',
        GET_BY_ID: '/user/staff',
        UPDATE: '/user/staff',
        GET_INFO_VIEW_SALARY: '/user/info-view-salary',
        GET_INFO_ADDRESS_WORKING: '/user/info-address-working',
        UPDATE_INFO_VIEW_SALARY: '/user/info-view-salary',
        CHANGE_PASSWORD: '/user/change-password',
    },
    // UPLOAD_FILE_TIME_KEEPING: `http://192.168.1.3:4200/v1/api/upload-file`,
    UPLOAD_FILE_TIME_KEEPING: `https://api.kaykafe.com/v1/api/upload-file`,
    SALARY: {
        ON_CALC: '/salary/on-calc',
        GET_ALL: '/salary/get-all',
        GET_ONE: '/salary/detail',
        UPDATE: '/salary/get-all',
        SEND_COMPLAIN: '/salary/complain',
        CALC_SALARY_PREV_MONTH: '/salary/calc-salary-prev-month',
        CALC_SALARY_PREV_MONTH_MOBILE_APP: '/salary/calc-salary-prev-month-mobile-app',
        GET_ONE_VIEW_SALARY_INFO: '/salary/get-one-view-salary-info',
        UPDATE_INFO_VIEW_SALARY: '/salary/update-salary-info',
        SEND_EMAIL_POST_CAST: '/salary/send-email-post-cast',
    },
    CONSTANT: {
        GET_BY_KEY_BE: '/constant/keyBE',
        UPDATE_STATUS: '/constant/update'
    },
    TIME_CHECKING: {
        GET_ALL: '/time-checking/get-all',
        GET_BY_USER_ID_FOR_STAFF_VIEW: '/time-checking/get-salary-user-view-staff',
        GET_BY_ID: '/time-checking',
        UPDATE: '/time-checking',
    },
    TIME_CHECKING_MOBILE_APP: {
        GET_ALL: '/time-checking-mobile-app/get-all',
        GET_INFO_TOTAL_CHECK_IN_OUT: 'time-checking-mobile-app/get-info-total-check-in-out',
        GET_BY_USER_ID_FOR_STAFF_VIEW: '/time-checking/get-salary-user-view-staff',
        GET_BY_ID: '/time-checking-mobile-app',
        UPDATE: '/time-checking-mobile-app',
    },
    WAREHOUSE: {
        CATEGORY: {
            GET_ALL: '/warehouse/category/get-all'
        },
        PRODUCT: {
            GET_ALL: '/warehouse/product/get-all',
            GET_ONE: '/warehouse/product',
            UPDATE: '/warehouse/product',
            ADD_NEW: '/warehouse/product',
            DELETE: '/warehouse/product',
        }
    },
    POLICY: {
        CHECK_USER_VIEW: '/policy/check-view-for-user'
    },
    RE_CHECK_TIME_KEEPING: {
        GET_ALL: '/re-check-time-keeping/get-all',
        GET_BY_STATUS: '/re-check-time-keeping/get-by-status',
        GET_BY_ID: '/re-check-time-keeping/get-by-status',
        GET_BY_USER_ID_AND_STATUS: '/re-check-time-keeping/get-by-status-and-user-id',
        RESPONSE_ITEM: '/re-check-time-keeping/response-item',
        CLOSE_ITEM: '/re-check-time-keeping/close-item',
        ADD_NEW: '/re-check-time-keeping/add-new',
    },
    GAME_WHEEL: {
        INDEX: '/game/wheel',
        ADD: '/game/wheel/add',
        UPDATE_BY_ID: '/game/wheel/update',
        GET_ALL: '/game/wheel/all',
        GET_ALL_FOR_CLIENT: '/game/wheel/all_c',
        GET_BY_ID: '/game/wheel/item',
        DELETE_BY_ID: '/game/wheel/delete',
    },
    EVENT_INFO: {
        INDEX: '/event-info',
        ADD: '/event-info/add',
        GET_BY_ID: '/item',
        GET_BY_KEY_BE: '/event-info/key-be',
        DELETE_BY_ID: '/delete',
        UPDATE: '/event-info/update',
        GET_ALL: '/event-info/get-all'
    },
    EVENT_GIFT_FOR_BILL_TOTAL: {
        INDEX: '/event-for-bill-total',
        ADD: '/event-for-bill-total/add',
        GET_BY_ID: '/item',
        GET_BY_KEY_BE: 'event-for-bill-total/key-be',
        DELETE_BY_ID: '/event-for-bill-total/delete',
        UPDATE: '/event-for-bill-total/update',
        GET_ALL: '/event-for-bill-total/get-all'
    },
    EVENT_DISCOUNT_FOR_BILL_TOTAL: {
        INDEX: '/event-discount-for-bill-total',
        ADD: '/event-discount-for-bill-total/add',
        GET_BY_ID: '/item',
        GET_BY_KEY_BE: 'event-discount-for-bill-total/key-be',
        DELETE_BY_ID: '/event-discount-for-bill-total/delete',
        UPDATE: '/event-discount-for-bill-total/update',
        GET_ALL: '/event-discount-for-bill-total/get-all'
    },
    EVENT_INCREASE_FOR_BILL_TOTAL: {
        INDEX: '/event-increase-for-bill-total',
        ADD: '/event-increase-for-bill-total/add',
        GET_BY_ID: '/item',
        GET_BY_KEY_BE: 'event-increase-for-bill-total/key-be',
        DELETE_BY_ID: '/event-increase-for-bill-total/delete',
        UPDATE: '/event-increase-for-bill-total/update',
        GET_ALL: '/event-increase-for-bill-total/get-all'
    },
    ADDRESS_STORE: {
        INDEX: '/address-store',
        ADD: '/address-store/add',
        DELETE_BY_ID: '/address-store/delete',
        UPDATE: '/address-store/update',
        GET_ONE: '/address-store/get-one',
        GET_ALL: '/address-store/get-all'
    }
};

export const DATE_FORMAT_INTERNATIONAL = 'YYYY-MM-DD';
export const FORMAT_TIME_MINUS = 'HH:mm';
export const FORMAT_TIME = 'HH:mm:ss';
export const FORMAT_DATE = 'DD-MM-YYYY';
export const FORMAT_DATE_TIME = 'DD-MM-YYYY HH:MM';
export const FORMAT_DATE_TIME_FROM_BE = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
export const FORMAT_DATE_FROM_BE = 'YYYY-MM-DD';
export const FORMAT_MONTH_FROM_BE = 'YYYY-MM';
export const FORMAT_DATE_BE = 'YYYY-MM-DD';
export const FORMAT_MONTH = 'MM-YYYY';
export const FORMAT_MONTH_BE = 'YYYY-MM';
export const FORMAT_DAY_MONTH = 'DD-MM';

export const REGEX_PASSWORD_STRONG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,32}$/;
export const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
export const REGEX_PHONE_NUMBER_JP = /^0\d{2}\s?\d{6}$/;
export const REGEX_PHONE_NUMBER_SIMPLE = /^0\d{9}$/;
export const LOCALSTORAGE_ITEM = {
    ACCESS_TOKEN: 'tka',
    ROLE: 'conRy',
    ROLE_STAFF: 'conRySt',
    REFRESH_TOKEN: 'tkr',
    TOKEN_EXPIRED: 'tke',
    IS_FIRST: 'is_first',
    INFO_COLOR: 'color',
    USER_ID: 'tkeri',
    ADDRESS_STORE: 'sts'
};


export const ERROR_CODE_RESPONSE = [
    {
        err_code: '001',
        msg: 'Email hoặc mật khẩu không đúng!'
    },
    {
        err_code: '002',
        msg: 'Email hoặc mật khẩu không đúng!'
    },
    {
        err_code: '003',
        msg: 'Email đã tồn tại. Vui lòng chọn một email khác!'
    },
    {
        err_code: '004',
        msg: 'Email không tồn tại!'
    },
    {
        err_code: '006',
        msg: 'Mã chấm công đã tồn tại. Vui lòng chọn mã khác!'
    },
    {
        err_code: '007',
        msg: 'Cập nhật thất bại. Không thể lấy thông tin nhân viên!'
    },
    {
        err_code: '008',
        msg: 'Mật khẩu cũ không chính xác!'
    },
    {
        err_code: '009',
        msg: 'Đã tồn tại một tên tương tự!'
    },
    {
        err_code: '010',
        msg: 'Bạn không có quyền truy cập!'
    },
    {
        err_code: '011',
        msg: 'Lỗi gửi thắc mắc thất bại. Vui lòng liên hệ quản lí!'
    },
    {
        err_code: '012',
        msg: 'Sai mật khẩu! Vui lòng nhập lại.'
    }, {
        err_code: '013',
        msg: 'Bạn chưa được cấp quyền, Vui lòng liên hệ quản lí.'
    },
    {
        err_code: '014',
        msg: 'Ngày đã tồn tại trong hệ thống!'
    },
    {
        err_code: '014',
        msg: 'Ngày đã tồn tại trong hệ thống!'
    },
    {
        err_code: '015',
        msg: 'Địa chỉ đã tồn tại trong hệ thống!!'
    },
    {
        err_code: '017',
        msg: 'Email đã tồn tại trong hệ thống!!'
    },

];

export const FILE_EXTEND_UPLOAD = {
    PDF: 'application/pdf',
    CSV: 'text/csv',
    WORD_NEW: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    WORD_OLD: 'application/msword',
    JPG_JPEG: 'image/jpeg',
    PNG: 'image/png',
    GIF: 'image/gif',
    TIFF: 'image/tiff',
    TXT: 'text/plain',
    PPT: 'application/vnd.ms-powerpoint',
    PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    EXCEL_NEW: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    EXCEL_OLD: 'application/vnd.ms-excel',
};

export const LIMIT_STRING_INPUT = {
    SMALL: 50,
    BIG: 500,
};


export const STATUS_STAFF_WORKING = {
    PENDING: {
        KEY: 'pending',
        value: 'Chưa đổi mật khẩu'
    },
    LOCKED: {
        KEY: 'locked',
        value: 'Khoá tài khoản'
    },
    ACTIVE: {
        KEY: 'active',
        value: 'Đang hoạt động'
    },
}
export const STATUS_STAFF_WORKING_OPTIONS = [
    {
        label: STATUS_STAFF_WORKING.PENDING.value,
        value: STATUS_STAFF_WORKING.PENDING.KEY
    },
    {
        label: STATUS_STAFF_WORKING.LOCKED.value,
        value: STATUS_STAFF_WORKING.LOCKED.KEY
    },
    {
        label: STATUS_STAFF_WORKING.ACTIVE.value,
        value: STATUS_STAFF_WORKING.ACTIVE.KEY
    },
]

export const PAGINATION = {
    PAGE_SIZE: 8
}
