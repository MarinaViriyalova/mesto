export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
        this._profileAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.userName = this._profileName.textContent;
        this._userInfo.userJob = this._profileJob.textContent;
        this._userInfo.userAvatar = this._profileAvatar.src;
        return this._userInfo;
    }

    setUserInfo(data) {
        this._profileName.textContent = data.userName;
        this._profileJob.textContent = data.userJob;
    }

    setUserAvatar(data) {
        this._profileAvatar.src = data.userAvatar;
    }

}