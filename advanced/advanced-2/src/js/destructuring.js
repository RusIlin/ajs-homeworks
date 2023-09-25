export default function destructuring(obj) {
    const result = [];
    obj.special.forEach((elem) => {
        const {
            id,
            name,
            icon,
            description = 'Описание недоступно',
        } = elem;
        result.push({
            id,
            name,
            icon,
            description,
        });
    });
    return result;
}