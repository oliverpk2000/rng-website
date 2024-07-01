function NumberDisplayField(props: { numbers: number[] }) {
    return <div className="NumberFieldDisplay">
        {props.numbers.map((num, i) => {
            return <div id={"" + i}>{num}</div>
        })}
    </div>
}

export default NumberDisplayField;