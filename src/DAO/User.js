import ApplicationModel from "./ApplicationModel.js";

export default class User extends ApplicationModel {
    id; email; encryptedPassword; authToken;

    static configurar() {
        User.associar('id', 'ID')
        User.associar('email', 'EMAIL')
        User.associar('encryptedPassword', 'ENCRYPTED_PASSWORD')
        User.associar('authToken', 'AUTH_TOKEN')
    }
}