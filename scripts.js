// Task 1
function calculateChange() {
    const taka = parseInt(document.querySelector('.inputs input:nth-child(1)').value);
    const appleCost = parseInt(document.querySelector('.inputs input:nth-child(2)').value);
    const orangeCost = parseInt(document.querySelector('.inputs input:nth-child(3)').value);

    if (isNaN(taka) || isNaN(appleCost) || isNaN(orangeCost)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const totalCost = appleCost + orangeCost;

    const change = taka - totalCost;

    const resultDiv = document.getElementById('task1-result');
    resultDiv.textContent = `Your change : ${change}Tk`;
}



// Task 2 
// Task 2: Average Marks Calculator
function calculateAverage() {
    const math = parseFloat(document.getElementById('math').value);
    const biology = parseFloat(document.getElementById('biology').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    const physics = parseFloat(document.getElementById('physics').value);
    const bangla = parseFloat(document.getElementById('bangla').value);

    if (isNaN(math) || isNaN(biology) || isNaN(chemistry) || isNaN(physics) || isNaN(bangla)) {
        alert("Please enter valid numbers for all subjects.");
        return;
    }

    const totalMarks = math + biology + chemistry + physics + bangla;
    const averageMarks = totalMarks / 5;

    const resultDiv = document.getElementById('task2-result');
    resultDiv.textContent = `Your average marks : ${averageMarks.toFixed(2)}`;
}



// Task 3
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputRemainder');
    const resultDiv = document.getElementById('task3-result');

    inputField.addEventListener('input', () => {
        if(inputField.value.trim() === ''){
            resultDiv.textContent = '';
        }
    })
})

function showRemainder() {
    const inputValue = parseInt(document.getElementById('inputRemainder').value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    const findRemainder = inputValue % 5;
    const resultDiv = document.getElementById('task3-result');
    resultDiv.textContent = `The Remainder : ${findRemainder}`;
}



// Task 4
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const resultDiv = document.getElementById('task4-result');

    inputField.addEventListener('input', () => {
        if (inputField.value.trim() === '') {
            resultDiv.textContent = '';
        }
    });
});



function checkIfNumber() {
    const input = document.getElementById('inputField').value.trim();
    const resultDiv = document.getElementById('task4-result');
    const checkmark = document.getElementById('animeCheckmark');
    const redcross = document.getElementById('animeRedCross');

    if (input === '') {
        resultDiv.textContent = '';
        return;
    }


    checkmark.classList.remove('show');
    redcross.classList.remove('show');
    checkmark.style.visibility = 'visible';
    redcross.style.visibility = 'visible';



    if (isNaN(input)) {
        resultDiv.textContent = `${input} is NOT a valid number`;
        resultDiv.style.color = 'red';

        redcross.classList.add('show');
        redcross.style.visibility = 'visible';

        const anim = window.lottieAnimations.redCross;
        if (anim) {
            anim.goToAndPlay(0, true);

            anim.removeEventListener('complete');

            anim.addEventListener('complete', () => {
                redcross.classList.remove('show');
                setTimeout(() => {
                    redcross.style.visibility = 'hidden';
                }, 500);
            });
        }

    } else {
        resultDiv.textContent = `${input} is a valid number`;
        resultDiv.style.color = 'green';

        checkmark.classList.add('show');
        checkmark.style.visibility = 'visible';

        const anim = window.lottieAnimations.checkMark;


        if (anim) {
            anim.goToAndPlay(0, true);

            anim.removeEventListener('complete');

            anim.addEventListener('complete', () => {
                checkmark.classList.remove('show');
                setTimeout(() => {
                    checkmark.style.visibility = 'hidden';
                }, 500);
            });
        }
    }
}




