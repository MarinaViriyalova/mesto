export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.userName = this._profileName.textContent;
        this._userInfo.userJob = this._profileJob.textContent;
        return this._userInfo;
    }

    setUserInfo(data) {
        this._profileName.textContent = data.userName;
        this._profileJob.textContent = data.userJob;
    }

}