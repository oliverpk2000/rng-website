import React from 'react';
import './App.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import NumberDisplayField from './components/NumberDisplayField';
import RngUtil from './components/rngUtil';


type GenerationSettings = {
  amount: number,
  minValue: number,
  maxValue: number,
  onlyIntegers: boolean,
  cryptoGenerated: boolean,
};

let numberList: number[] = [];

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<GenerationSettings>();
  const onSubmit: SubmitHandler<GenerationSettings> = data => {

    let rngUtil = new RngUtil();

    if (data.cryptoGenerated) {
      numberList = rngUtil.generateRandomNumbersSecure(data.amount, data.minValue, data.maxValue, data.onlyIntegers);
    } else {
      numberList = rngUtil.generateRandomNumbers(data.amount, data.minValue, data.maxValue, data.onlyIntegers);
    }
  }

  return (
    <div className="App">
      <h1>random number generator</h1>
      <div id="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="amount">amount:</label>
          <input id="amount" type="number" defaultValue="1" {...register("amount", { required: true })} />
          {errors.amount && <span>This field is required</span>}
          <br />
          <label htmlFor="minValue">minimum value:</label>
          <input id="minValue" type="number" defaultValue="0" {...register("minValue")} />
          <br />
          <label htmlFor="maxValue">maximum value:</label>
          <input id="maxValue" type="number" defaultValue="1" {...register("maxValue")} />
          <br />
          <label htmlFor="onlyIntegers">integers:</label>
          <input id="onlyIntegers" type="checkbox" {...register("onlyIntegers")} />
          <label htmlFor="cryptoGenerated">cryptographically secure:</label>
          <input id="cryptoGenerated" type="checkbox" {...register("cryptoGenerated")} />
          <input type="submit" />
        </form>
      </div>
      <NumberDisplayField numbers={numberList}></NumberDisplayField>
    </div>
  );
}

export default App;
