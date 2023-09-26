export default class Formator {
    static formatPhone(number) {
        let result = number.replace(/\D/g, '');
        if (result.length === 11 && /^[87]/.test(result)) {
            result = result.replace(/^[87]/, '+7');
        } else result = `+${result}`;
        return result;
    }
}