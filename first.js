let counteElement = document.getElementById("counterValue");

function onIncreament(){
    let previouscounterValue = counteElement.textContent;
    let updatedcounterValue = parseInt(previouscounterValue)+1;
    if (updatedcounterValue>0){
        counteElement.style.color=green;
    }
    else if (updatedcounterValue<0){
        counteElement.style.color=red;
    }
    else {
        counteElement.style.coulor=black;
    }
}

function onDecreament(){
    let previouscounterValue = counteElement.textContent;
    let updatedcounterValue = parseInt(previouscounterValue)+1;
    
    if (updatedcounterValue>0){
        counteElement.style.color=green;
    }
    else if (updatedcounterValue<0){
        counteElement.style.color=red;
    }
    else {
        counteElement.style.coulor=black;
    }
}

function onReset(){
    let updatedcounterValue = 0;
    counteElement.textContent = updatedcounterValue;
    counteElement.style.coulor=black;
}
