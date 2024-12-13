
// const exchengeRate = 26;

// for (let i = 10; i <= 100; i += 10) {
//     const result = exchengeRate * i;
//     console.log(result);
// }

const exchengeRate = 26;

const resultExchenges = [];

for (let i = 10; i <= 100; i += 10) {

    const result = ` ${i} USD - ${exchengeRate * i} UAN `;
    resultExchenges.push(result);

}
console.log(resultExchenges.join("\n"));
