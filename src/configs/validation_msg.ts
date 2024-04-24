export const TOAST_STATUS = {
    SUCCESS: 'success',
    ERROR: 'error',
};

export const VALIDATION_MESSAGE = {
    REQUIRED: 'Trường bắt buộc.',
    NOT_NUMBER_POSITIVE: 'Không chấp nhập số âm.',
    ONLY_NUMBER: 'Chỉ chấp nhân kiểu số.',
    MIN_ZERO: 'Nhỏ nhất là 0.',
    INVALID_EMAIL: 'Email không đúng định dạng.',
    PHONE_NUMBER_WRONG_FORMAT: 'Số điện thoại không đúng định dạng.',
    PASSWORD_NOT_MATCH: 'Mật khẩu xác nhận không giống nhau.',
    PASSWORD_NEW_NOT_SAME_OLD: 'Mật khẩu mới không được giống mật khẩu cũ.',
    MIN_PASSWORD: 'Mật khẩu phải từ 6 kí  tự trở lên.'
};

export const TOAST_MESSAGE = {
    CONTACT_ADMIN: 'Lỗi truy cập hệ thống. Vui lòng liên hệ quản lí.',
    RESET_PASS_SUCCESS: 'Yêu cầu đã được thực hiện. Vui lòng kiểm tra email để tiếp tục.',
    RESET_PASS_FAILURE: 'Đổi mật khẩu thất bại. Vui lòng làm mới trang và thực hiện lại!',
    RESET_PASS_SUCCESS_SPAN: 'Yêu cầu đã được thực hiện. Vui lòng kiểm tra email để tiếp tục!.',
    SOMETHING_WRONG: 'Lỗi hệ thống. Vui lòng quay lại sau!',
    POLICY: {
        NOT_ALLOW_VIEW: 'Bạn chưa được cấp quyền truy cập. Vui lòng liên hệ quản lí!'
    },
    LOGIN: {
        FAIL: 'Email hoặc mật khẩu không đúng!',
    },
    LOGOUT: {
        FAIL: 'Lỗi, không thể đăng xuất!',
    },
    ROLE_STAFF: {
        GET_ALL_FAIL: 'Lỗi, không thể lấy danh sách chức vụ!'
    },
    AUTH: {
        PASSWORD: {
            CHANGE_PASSWORD: {
                SUCCESS: 'Đổi mật khẩu thành công.',
                FAIL: 'Đổi mật khẩu thất bại.',
            }
        }
    },
    SETTING: {
        ROLE_JOB: {
            ADD_NEW: {
                SUCCESS: 'Thêm công việc thành công',
                FAIL: 'Thêm công việc thất bại'
            },
            UPDATE: {
                SUCCESS: 'Cập nhật công việc thành công',
                FAIL: 'Cập nhât công việc thất bại'
            },
            DELETE: {
                SUCCESS: 'Xoá công việc thành công',
                FAIL: 'Xoá công việc thất bại'
            },
            GET_ALL_FAIL: 'Lỗi, không thể lấy danh sách công việc!',
            GET_ONE_FAIL: 'Lỗi, không thể lấy thông tin công việc!',
        },
        INCREASE_SALARY: {
            ADD_NEW: {
                SUCCESS: 'Thêm thành công',
                FAIL: 'Thêm  thất bại'
            },
            DELETE: {
                SUCCESS: 'Xoá  thành công',
                FAIL: 'Xoá thất bại'
            },
            GET_ALL_FAIL: 'Lỗi, không thể lấy danh sách dữ liệu!',
        },
        SEND_EMAIL_POST_CAST: {
            SUCCESS: 'Gửi email thành công',
            FAIL: 'Gửi email thất bại',
        }
    },
    ADMIN: {
        STAFF_MANAGEMENT: {
            ADD_NEW: {
                SUCCESS: 'Thêm nhân viên thành công',
                FAIL: 'Thêm nhân viên thất bại'
            },
            UPDATE: {
                SUCCESS: 'Cập nhật nhân viên thành công',
                FAIL: 'Cập nhât nhân viên thất bại'
            },
            GET_ALL_FAIL: 'Lỗi, không thể lấy danh sách nhân viên!',
            GET_ALL_EMAIL_FAIL: 'Lỗi, không thể lấy danh sách email nhân viên!',
            GET_ONE: 'Lỗi, không thể lấy thông tin nhân viên!',
        },
        SALARY: {
            ON_CALC: {
                SUCCESS: 'Cập nhật dữ liệu chấm công hoàn tất',
                FAIL: 'Cập nhật dữ liệu chấm công thất bại!'
            },
        },
        TIME_CHECKING: {
            GET_ALL_ERROR: 'Lỗi, lấy danh sách chấm công!',
            GET_BY_ID_CHECKING_FAIL: 'Lỗi, lấy danh sách chấm công!',
            UPDATE: {
                SUCCESS: 'Cập nhật thành công',
                FAIL: 'Cập nhật thất bại!'
            }
        },
        CALC_SALARY: {
            GET_ALL_ERROR: 'Lỗi, lấy danh sách lương!',
            UPDATE: {
                SUCCESS: 'Cập nhật thành công',
                FAIL: 'Cập nhật thất bại!'
            }
        }
    },
    STAFF: {
        SEND_COMPLAIN: {
            SUCCESS: 'Đã gửi thắc mắc thành công. Vui lòng đợi phản hồi của quản lí!',
            FAIL: 'Gửi thắc mắc thất bại, Vui lòng liên hệ quản lí!'
        },
        VIEW_SALARY: {
            VIEW: {
                FAIL: 'Không thể xem lương, Vui lòng liên hệ quản lí.'
            }
        },
        BONUS_HOLIDAY: {
            VIEW: {
                FAIL: 'Lỗi không thể lấy thông tin ngày lễ.'
            }
        }
    },
    WAREHOUSE: {
        CATEGORY: {
            GET_ALL_ERROR: 'Lỗi, lấy danh sách categories!',
            UPDATE: {
                SUCCESS: 'Cập nhật thành công',
                FAIL: 'Cập nhật thất bại!'
            }
        },
        PRODUCT: {
            GET_ALL_ERROR: 'Lỗi, lấy danh sách sản phẩm!',
            GET_ONE_ERROR: 'Lỗi, lấy thông tin sản phẩm!',
            UPDATE: {
                SUCCESS: 'Cập nhật thành công',
                FAIL: 'Cập nhật thất bại!'
            },
            DELETE: {
                SUCCESS: 'Xoá thành công',
                FAIL: 'Xoá thất bại!'
            },
            ADD_NEW: {
                SUCCESS: 'Thêm mới thành công',
                FAIL: 'Thêm mới thất bại!'
            },
        },
    },
    RE_CHECK_TIME_KEEPING: {
        ADD_NEW: {
            FAIL: 'Gửi yêu cầu thất bại!',
            SUCCESS: 'Đã gửi yêu cầu. Hệ thống sẽ gửi email khi có phản hồi.'
        },
        GET_ALL_FAIL: 'Không thể lấy dữ liệu! ',
        RESPONSE: {
            FAIL: 'Gửi tin nhắn thất bại!',
            SUCCESS: 'Gửi tin nhắn thành công.'
        }
    },
    ADD_SUCCESS: 'Thêm mới thành công',
    UPDATE_SUCCESS: 'Cập nhật thành công',
    DEL_SUCCESS: 'Xoá thành công',
    DEL_FAIL: 'Xoá thất bại',
    UPDATE_FAIL: 'Cập nhật thất bại',
    ADD_FAIL: 'Thêm mới thất bại!',
    GET_INIT_FAIL: 'Lấy dữ liệu khỏi tạo thất bại!',
};

export const MSG_ERROR_POST = {
    AZURE_POST_DOCUMENT: {
        FAIL: '書類登録が失敗しました',
    },
    GET_URL_UPLOAD_DOCUMENT: {
        FAIL: '書類登録が失敗しました',
    },
};
