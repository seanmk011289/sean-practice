import Api from './Api';

export default {
        register(creds) {
            return Api().post('register', creds)
    }
}