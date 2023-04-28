import React, {useState} from "react";

function BmiCalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [bmi, setBmi] = useState(null);
    const [calorieNeeds, setCalorieNeeds] = useState(null);
    const [calories, setCalories] = useState(null);
    const [loseOrGain, setLoseOrGain] = useState('');
    
    function calculateCaloriesToGainWeight(weight, height, gender, activityLevel) {
      const heightInCm = height;
      const bmr = calculateBmr(weight, heightInCm, gender);
      const calorieNeeds = bmr + calculateCalorieSurplus();
      return calorieNeeds;
    }
    
    function calculateCaloriesToLoseWeight(weight, height, gender, activityLevel) {
      const heightInCm = height;
      const bmr = calculateBmr(weight, heightInCm, gender);
      const calorieNeeds = bmr - calculateCalorieDeficit();
      return calorieNeeds;
    }
    
    function calculateBmr(weight, heightInCm, gender) {
      const heightInM = heightInCm / 100;
      const kgWeight = weight;
      let bmr = null;
      
      if (gender === "male") {
        bmr = 10 * kgWeight + 6.25 * heightInCm - 5 * 25 - 161;
      } else {
        bmr = 10 * kgWeight + 6.25 * heightInCm - 5 * 25 + 5;
      }
    
      return bmr;
    }
    
    function calculateCalorieSurplus() {
      // calculate calorie surplus based on user's activity level
      // add 500-1000 calories to maintenance level for weight gain
      const calorieSurplus = 500;
      return calorieSurplus;
    }
    
    function calculateCalorieDeficit() {
      // calculate calorie deficit based on user's activity level
      // subtract 500-1000 calories from maintenance level for weight loss
      const calorieDeficit = 500;
      return calorieDeficit;
    }
    
    function handleSubmit(event) {
      event.preventDefault();
  
      // calculate BMI
      const heightInM = height / 100;
      const bmi = weight / (heightInM * heightInM);
      setBmi(bmi.toFixed(2));
  
      // calculate daily calorie needs
      let calorieNeeds = null;
     
      
      if (bmi < 18.5) {
        calorieNeeds = calculateCaloriesToGainWeight(weight, height, gender, activityLevel);
        setLoseOrGain('gain weight')
      } 
      else {
        calorieNeeds = calculateCaloriesToLoseWeight(weight, height, gender, activityLevel);
        setLoseOrGain('lose weight')
      }
      setCalories(calorieNeeds);
    }
    return (
      <div >
        <h1 style={{
          
          position: 'relative',
          top: '150px', left: '560px'
        }}>BMI Calculator</h1>
        <form className="bmi" onSubmit={handleSubmit}>
          <label>
            Height (cm):
            <input type="number" value={height} onChange={(event) => setHeight(event.target.value)} required />
          </label>
          <label>
            Weight (kg):
            <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)} required />
          </label>
          <label>
            Gender:
            <select value={gender} onChange={(event) => setGender(event.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Activity Level:
            <select value={activityLevel} onChange={(event) => setActivityLevel(event.target.value)}>
              <option value="sedentary">Sedentary</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
            </select>
          </label>
          <button type="submit">Calculate</button>
          {bmi && (
          <div>
          <br />
            <h3>Your BMI is: {bmi}</h3>
            <h3>Your daily calorie needs are: {calories} to {loseOrGain} </h3>
          </div>
        )}
        </form>
  
       
      </div>
    );
}

export default BmiCalculator