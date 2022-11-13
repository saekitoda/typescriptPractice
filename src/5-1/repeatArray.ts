class RepeatArray<T> extends Array {

    public repeat(repeatNum: number) {
        const result = new RepeatArray<T>();
        for (let i=0; i < repeatNum; i++) {
            result.push(...this);
        }
        return result;
    }
}

const repeatArr =  new RepeatArray();
repeatArr.push(1);
repeatArr.push(2);

console.log(repeatArr.repeat(3));

