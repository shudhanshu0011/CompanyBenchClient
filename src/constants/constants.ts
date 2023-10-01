export const ENV = {
    LOCAL: process.env.NODE_ENV === 'development' ||  process.env.NODE_ENV === 'mock',
    DEV: process.env.NODE_ENV === 'development',
    MOCK: process.env.NODE_ENV === 'mock',
    PROD: process.env.NODE_ENV === 'production',
    TEST: process.env.NODE_ENV === 'test'
}

export const VENDOR_ID = 4321;
export const QueryID = {
    postJob: 'PostJob',
    createUser: 'CreateUser',
    postLogin: 'PostLogin'
}
