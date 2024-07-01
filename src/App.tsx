import React from 'react';
import './App.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import NumberDisplayField from './components/NumberDisplayField';


type GenerationSettings = {
  amount: number,
  minValue: number,
  maxValue: number,
};

let numberList: number[] = [];

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<GenerationSettings>();
  const onSubmit: SubmitHandler<GenerationSettings> = data => {
    numberList = [];
    for (let index = 0; index < data.amount; index++) {
      let generatedNumber = Math.random() * (data.maxValue - data.minValue) + data.minValue;
      numberList.push(generatedNumber);
    }
    console.log(numberList);
  }

  return (
    <div className="App">
      <h1>random number generator</h1>
      <div id="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="amount">amount:</label>
          <input id="amount" type="number" defaultValue="1" {...register("amount", { required: true },)} />
          {errors.amount && <span>This field is required</span>}
          <br />
          <label htmlFor="minValue">minimum value:</label>
          <input id="minValue" type="number" defaultValue="0" {...register("minValue")} />
          <br />
          <label htmlFor="maxValue">maximum value:</label>
          <input id="maxValue" type="number" defaultValue="1" {...register("maxValue")} />
          <br />
          <input type="submit" />
        </form>
      </div>
      <NumberDisplayField numbers={numberList}></NumberDisplayField>
    </div>
  );
}

export default App;
