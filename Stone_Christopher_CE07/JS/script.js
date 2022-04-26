/*
    Christopher Stone
    6/26/2021
    Code Exercise 07: Final Project
*/

/* 
=========================================
    Problem #1 - Body Mass Calculator
=========================================
*/

// Set a button listener to start conversion
document.querySelector("#bmiConvert").addEventListener("click", function(e)
{

    // Check for validation
    if(document.querySelector("#heightFt").reportValidity() &&
        document.querySelector("#heightIn").reportValidity() &&
        document.querySelector("#weight").reportValidity())
    {

        // Set variables and parse inputs
        let heightFt = parseInt(document.querySelector("#heightFt").value);
        let heightIn = parseFloat(document.querySelector("#heightIn").value);
        let weight = parseFloat(document.querySelector("#weight").value);

        // Create variable for total height in inches
        let totalHeight;
        
        // Convert user input height in feet into inches for formula
        totalHeight = heightFt * 12;

        // Add user input of inches to total inches
        totalHeight += heightIn;

        // Add variable for BMI calculations and round to 1 decimal place
        let bmiTotal = ((weight / totalHeight / totalHeight) * 703).toFixed(1);

        // Check if BMI is less than 18.5
        if(bmiTotal < 18.5)
        {
            // Target empty h1 and fill with final answer
            document.querySelector("#textResult").innerHTML = `Your BMI is ${bmiTotal}, indicating your weight is in "Under Weight Range" for adults of your height.`;

            // Target img tag and change src to make image visible
            document.querySelector("#imgResult").src = "IMG/underWeight.jpg"
        }
        // Check if BMI is 18.5 to 24.9
        else if((bmiTotal >= 18.5) && (bmiTotal <= 24.9))
        {
            // Target empty h1 and fill with final answer
            document.querySelector("#textResult").innerHTML = `Your BMI is ${bmiTotal}, indicating your weight is in "Normal or Healthy Weight Range" for adults of your height.`;

            // Target img tag and change src to make image visible
            document.querySelector("#imgResult").src = "IMG/healthyWeight.jpg"
        }
        // Check if BMI is 25.0 to 29.9
        else if((bmiTotal >= 25) && (bmiTotal <= 29.9))
        {
            // Target empty h1 and fill with final answer
            document.querySelector("#textResult").innerHTML = `Your BMI is ${bmiTotal}, indicating your weight is in "Over Weight Range" for adults of your height.`;

            // Target img tag and change src to make image visible
            document.querySelector("#imgResult").src = "IMG/overWeight.jpg"
        }
        // Check if BMI is 30.0 to 35 
        else if((bmiTotal >= 30.0) && (bmiTotal < 35))
        {
            // Target empty h1 and fill with final answer
            document.querySelector("#textResult").innerHTML = `Your BMI is ${bmiTotal}, indicating your weight is in "Obese Range" for adults of your height.`;

            // Target img tag and change src to make image visible
            document.querySelector("#imgResult").src = "IMG/obeseWeight.jpg"
        }
        // Check if BMI is 35 or over
        else if(bmiTotal >= 35)
        {
            // Target empty h1 and fill with final answer
            document.querySelector("#textResult").innerHTML = `Your BMI is ${bmiTotal}, indicating your weight is in "Extreme Obese Range" for adults of your height.`;

            // Target img tag and change src to make image visible
            document.querySelector("#imgResult").src = "IMG/extremeObeseWeight.jpg"
        }

    }

});