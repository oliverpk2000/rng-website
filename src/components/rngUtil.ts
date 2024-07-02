class RngUtil {

    generateRandomNumbers(amount: number, min: number, max: number, integers: boolean): number[] {
        let numberList = [];
        for (let index = 0; index < amount; index++) {
            let seed = Math.random();

            let generatedNumber = seed * (max - min) + (1.0 * min);

            if (integers) {
                generatedNumber = Math.floor(generatedNumber);
            }

            numberList.push(generatedNumber);
        }

        return numberList;
    }

    generateRandomNumbersSecure(amount: number, min: number, max: number, integers: boolean) {
        let numberList = [];
        const array = new Uint32Array(amount);

        crypto.getRandomValues(array);

        for (const num of array) {
            let seed = num / 4_294_967_295;
            let generatedNumber = seed * (max - min) + (1.0 * min);

            if (integers) {
                generatedNumber = Math.floor(generatedNumber);
            }

            numberList.push(generatedNumber);
        }

        return numberList;
    }
}

export default RngUtil;