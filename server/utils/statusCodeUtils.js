const status = {
    Success: {
        code: '200',
        message: 'Success'
    },
    ObjectNotFound: {
        code: '201',
        message: 'No Data Found',
    },
    SystemError: {
        code: '500',
        message: 'SystemError',
    },
    AccessDenied: {
        code: '401',
        message: 'Access Denied',
    },
    InvalidParameter: {
        code: '501',
        message: 'Invalid Parameters',
    },
    Unauthorized: {
        code: '401',
        message: 'Unauthorized'
    }
}

module.exports = status;