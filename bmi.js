let button = document.getElementById("button");
    button.onclick = function(){
    let weight = document.getElementById("winput").value;
    let height = document.getElementById("hinput").value;
    
    document.getElementById("weightb").value = weight;
    document.getElementById("heightb").value = height;
    
    let heights = height / 100;
    
    let bmi = weight / (heights * heights);
    document.getElementById("ansb").value = bmi.toFixed(3);
                
    if(bmi < 18.5){
        document.getElementById("statb").value = "Underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9 ){
        document.getElementById("statb").value = "Normal";
    }
    else if(bmi > 24.9 && bmi <= 29.9){
        document.getElementById("statb").value = "Overweight";
    }
    else{
        document.getElementById("statb").value = "Obese";
    }
};            

