export default function sortingHeroes(arr) {
    arr.sort((a, b) => (a.health < b.health ? 1 : -1));
    return arr;
}
console.log(sortingHeroes([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
]));