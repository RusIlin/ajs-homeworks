export default class ErrorRepository {
    constructor(array) {
        if (array !== undefined) {
            this.errorList = new Map(array);
        } else this.errorList = new Map();
    }

    translate(code) {
        if (!this.errorList.has(code)) return 'Unknown error';
        return this.errorList.get(code);
    }
}