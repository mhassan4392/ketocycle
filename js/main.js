// get btns and different els
let maleBtn = document.querySelector('.btn-male'),
    femaleBtn = document.querySelector('.btn-female'),
    frontPage = document.querySelector('.front-page'),
    formSteps = document.querySelector('.form-steps'),
    stepOneBtn = document.querySelector('#step-one-btn'),
    stepTwoBtn = document.querySelector('#step-two-btn'),
    stepThreeBtn = document.querySelector('#step-three-btn'),
    stepFourBtn = document.querySelector('#step-four-btn'),
    stepFiveBtn = document.querySelector('#step-five-btn'),
    stepSixBtn = document.querySelector('#step-six-btn');
    stepSevenBtn = document.querySelector('#step-seven-btn'),
    preBtn = document.querySelector('.pre-btn'),
    inputGrid = document.querySelector('.input-grid'),
    measureBtns = document.querySelector('.measurement-btns'),
    progressBar = document.querySelector('.progress-bar');
    
if(frontPage){
    // create steps slider
    let stepSlider = document.querySelectorAll('.steps'),
    current = 0;

    console.log(stepSlider);

    // get input grids
    let selectOne = document.querySelectorAll('.select-one'),
        selectMore = document.querySelectorAll('.select-more');

    for(i = 0; i < selectOne.length; i++){
        selectOne[i].addEventListener('click', selectOneValue);
    }

    for(i = 0; i < selectMore.length; i++){
        selectMore[i].addEventListener('click', selectMoreThanOneValue);
    }

    // select one value grid
    function selectOneValue(e){
        let value = '';
        removeActiveClass();
        if(e.target.classList.contains('select-one')){
            e.target.classList.add('input-grid-active');
            e.target.children[1].children[0].classList.add('fa-plus');
            e.target.children[1].children[0].classList.remove('fa-minus');
            
        }
        if(e.target.classList.contains('input-text')){
            e.target.parentElement.classList.add('input-grid-active');
            e.target.nextSibling.nextSibling.children[0].classList.add('fa-plus');
            e.target.nextSibling.nextSibling.children[0].classList.remove('fa-minus');
            
        }
        if(e.target.classList.contains('input-icon')){
            e.target.parentElement.classList.add('input-grid-active');
            e.target.children[0].classList.add('fa-plus');
            e.target.children[0].classList.remove('fa-minus');
        }
        if(e.target.classList.contains('fa')){
            e.target.parentElement.parentElement.classList.add('input-grid-active');
            e.target.classList.remove('fa-minus');
            e.target.classList.add('fa-plus');
        }
    }

    // select one value grid
    function selectMoreThanOneValue(e){
        if(e.target.classList.contains('select-more')){
            e.target.classList.toggle('input-grid-active');
            e.target.children[1].children[0].classList.toggle('fa-plus');
            e.target.children[1].children[0].classList.toggle('fa-minus');
        }
        if(e.target.classList.contains('input-text')){
            e.target.parentElement.classList.toggle('input-grid-active');
            e.target.nextSibling.nextSibling.children[0].classList.toggle('fa-plus');
            e.target.nextSibling.nextSibling.children[0].classList.toggle('fa-minus');
            
        }
        if(e.target.classList.contains('input-icon')){
            e.target.parentElement.classList.toggle('input-grid-active');
            e.target.children[0].classList.toggle('fa-plus');
            e.target.children[0].classList.toggle('fa-minus');
        }
        if(e.target.classList.contains('fa')){
            e.target.parentElement.parentElement.classList.toggle('input-grid-active');
            e.target.classList.toggle('fa-minus');
            e.target.classList.toggle('fa-plus');
        }
    }

    // function to remove active class from all input grids
    function removeActiveClass(e){
        let faPlus = document.querySelectorAll('.fa-plus');
        for(i = 0; i < selectOne.length; i++){
            selectOne[i].classList.remove('input-grid-active');
        }
        for(i = 0; i < faPlus.length; i++){
            faPlus[i].classList.remove('fa-plus');
            faPlus[i].classList.add('fa-minus');
        }
    }

    // run reset function to display none all the form steps in the begining
    reset();

    // get female and male btns click events
    maleBtn.addEventListener('click', maleShowSlider);
    femaleBtn.addEventListener('click', femaleShowSlider);

    // function when user click female and male btns
    function maleShowSlider(){
        current = 0;
        frontPage.style.display = 'none';
        formSteps.style.display = 'block';
        startSlider();
    }
    function femaleShowSlider(){
        current = 0;
        frontPage.style.display = 'none';
        formSteps.style.display = 'block';
        startSlider();
    }



    // function to start slider
    function startSlider(){
        let stepSlider = document.querySelectorAll('.steps');
        current = 0;
        reset();
        stepSlider[current].style.display = 'block';
    }

    // reset function to style display none all the steps of the form
    function reset(){
        for(i = 0; i < stepSlider.length; i++){
            stepSlider[i].style.display = 'none';
        }
    }

    // step one function
    // function when user clear step one

    stepOneBtn.addEventListener('click', stepOne);
    stepTwoBtn.addEventListener('click', stepTwo);
    stepThreeBtn.addEventListener('click', stepThree);
    stepFourBtn.addEventListener('click', stepFour);
    stepFiveBtn.addEventListener('click', stepFive);
    stepSixBtn.addEventListener('click', stepSix);
    stepSevenBtn.addEventListener('click', stepSeven);
    preBtn.addEventListener('click', preStep);

    function stepOne(){
        reset();
        current = 1;
        stepSlider[current].style.display = 'block';
        progressBar.style.width = '14.30%';
    }

    function stepTwo(){
        reset();
        current = 2;
        stepSlider[current].style.display = 'block';
        progressBar.style.width = '28.6%';
    }

    function stepThree(){
        reset();
        current = 3;
        stepSlider[current].style.display = 'block';
        progressBar.style.width = '42.9%';
    }

    function stepFour(){
        reset();
        current = 4;
        stepSlider[current].style.display = 'block';
        progressBar.style.width = '57.2%';
    }

    function stepFive(){
        reset();
        current = 5;
        stepSlider[current].style.display = 'block';
        progressBar.style.width = '71.5%';
    }

    function stepSix(){
        reset();
        current = 6;
        stepSlider[current].style.display = 'block';
        measureBtns.style.display = 'block';
        progressBar.style.width = '85.8%';
    }

    function stepSeven(){
        // reset();
        // current = 5;
        // stepSlider[current].style.display = 'block';
        stepSevenBtn.text = 'Processing....';
        progressBar.style.width = '100%';
        setTimeout(function(){
            window.location = 'summary.html';
        }, 3000);
    }

    function preStep(){
        measureBtns.style.display = 'none';
        if(current == 0){
            formSteps.style.display = 'none';
            frontPage.style.display = 'block';
        }else{
            reset();
            current--;
            stepSlider[current].style.display = 'block';
            progressAttr = progressBar.style.width;
            progressAttr = progressAttr.replace('%', '');
            progressAttr = progressAttr - '14.3';
            progressBar.style.width = progressAttr + '%';
        }
    }

    let imperialBtn = document.querySelector('.imperial-btn'),
        matricBtn = document.querySelector('.matric-btn');
        imperialForm = document.querySelector('.imperial-form');
        matricForm = document.querySelector('.matric-form');

    imperialBtn.addEventListener('click', function(){
        imperialForm.style.display = 'block';
        matricForm.style.display = 'none';
        matricBtn.classList.remove('active-btn');
        imperialBtn.classList.add('active-btn');
    });

    matricBtn.addEventListener('click', function(){
        matricForm.style.display = 'block';
        imperialForm.style.display = 'none';
        imperialBtn.classList.remove('active-btn');
        matricBtn.classList.add('active-btn');
    });
}


// get summary page els

let summaryPage = document.querySelector('.summary-page'),
    emailForm = document.querySelector('.email-form'),
    emailPreBtn = document.querySelector('.email-pre-btn'),
    buyBtn = document.querySelector('.buy-btn');
    formEmail = document.querySelector('.email-form form');
    formEmailBtn = document.querySelector('.email-form-btn');

if(summaryPage){
    buyBtn.addEventListener('click', showEmailForm);

    function showEmailForm(){
        summaryPage.style.display = 'none';
        emailForm.style.display = 'block';
    }

    emailPreBtn.addEventListener('click', showSummaryPage);

    function showSummaryPage(){
        summaryPage.style.display = 'block';
        emailForm.style.display = 'none';
    }

    formEmail.addEventListener('submit', submitEmailForm);

    function submitEmailForm(e){
        e.preventDefault();
        formEmailBtn.value = 'Processing...';

        setTimeout(function(){
            window.location = 'checkout.html';
        }, 3000);
    }
}

let checkoutPage = document.querySelector('.checkout-page');
    

if(checkoutPage){
    // for(i = 0; i < plans.length; i++){
    //     plans[i].addEventListener('click', )
    // }

    let plans = document.querySelectorAll('.select-plans .card'),
        plan1 = document.querySelector('.plan-1'),
        plan2 = document.querySelector('.plan-2');

    plan1.addEventListener('click', function(){
        plan1.classList.add('active-plan');
        plan2.classList.remove('active-plan');
    });

    plan2.addEventListener('click', function(){
        plan2.classList.add('active-plan');
        plan1.classList.remove('active-plan');
    });
}

