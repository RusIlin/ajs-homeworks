export default class Settings {
    constructor() {
        this.default = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
        this.user = new Map();
    }

    get settings() {
        return new Map([...this.default, ...this.user]);
    }
}