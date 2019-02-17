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
    imperialFormBtn = document.querySelector('#imperial-form-btn'),
    matricFormBtn = document.querySelector('#matric-form-btn'),
    preBtn = document.querySelector('.pre-btn'),
    inputGrid = document.querySelector('.input-grid'),
    measureBtns = document.querySelector('.measurement-btns'),
    progressBar = document.querySelector('.progress-bar');
    
// if front page is active
if(frontPage){
    // create steps slider
    // vars for storing step form values
    let stepSlider = document.querySelectorAll('.steps'),
    current = 0;
    let value = '';
    let productarray = [];
    let meatarray = [];
    let preparationValue = '';
    let activeValue = '';
    let familiarValue = '';
    let loseWeightValue = '';
    let meatValues = [];
    let productsValues = [];


    // get input grids
    let selectOne = document.querySelectorAll('.select-one'),
        preparation = document.querySelectorAll('.preparation'),
        activeVal = document.querySelectorAll('.activeVal'),
        familiar = document.querySelectorAll('.familiar'),
        loseWeight = document.querySelectorAll('.lose-weight'),
        meat = document.querySelectorAll('.meat');
        products = document.querySelectorAll('.products'),
        formDanger = document.querySelectorAll('.form-danger');

    // event listener to get the preparation value
    for(i = 0; i < preparation.length; i++){
        preparation[i].addEventListener('click', function(e){
            preparationValue = selectOneValue(e);
        });
    }

    // event listener to get the activeVal value
    for(i = 0; i < activeVal.length; i++){
        activeVal[i].addEventListener('click', function(e){
            activeValue = selectOneValue(e);
        });
    }

    // event listener to get the familiar value
    for(i = 0; i < familiar.length; i++){
        familiar[i].addEventListener('click', function(e){
            familiarValue = selectOneValue(e);
        });
    }

    // event listener to get the loseWeight value
    for(i = 0; i < loseWeight.length; i++){
        loseWeight[i].addEventListener('click', function(e){
            loseWeightValue = selectOneValue(e);
        });
    }
    
    // event listener to get the meat array values
    for(i = 0; i < meat.length; i++){
        meat[i].addEventListener('click', function(e){
            meatValues = selectMoreThanOneValue(e, 'meat');
        });
    }

    // event listener to get the products array values
    for(i = 0; i < products.length; i++){
        products[i].addEventListener('click', function(e){
            productsValues = selectMoreThanOneValue(e, 'products');
        });
    }

    // select one value function
    function selectOneValue(e){
        
        // first remove the active class when click on different grid input
        removeActiveClass();
        if(e.target.classList.contains('select-one')){
            e.target.classList.add('input-grid-active');
            e.target.children[1].children[0].classList.add('fa-plus');
            e.target.children[1].children[0].classList.remove('fa-minus');
            value = e.target.children[0].textContent;
        }
        if(e.target.classList.contains('input-text')){
            e.target.parentElement.classList.add('input-grid-active');
            e.target.nextSibling.nextSibling.children[0].classList.add('fa-plus');
            e.target.nextSibling.nextSibling.children[0].classList.remove('fa-minus');
            value = e.target.textContent;
        }
        if(e.target.classList.contains('input-icon')){
            e.target.parentElement.classList.add('input-grid-active');
            e.target.children[0].classList.add('fa-plus');
            e.target.children[0].classList.remove('fa-minus');
            value = e.target.previousElementSibling.textContent;
        }
        if(e.target.classList.contains('fa')){
            e.target.parentElement.parentElement.classList.add('input-grid-active');
            e.target.classList.remove('fa-minus');
            e.target.classList.add('fa-plus');
            value = e.target.parentElement.previousElementSibling.textContent;
        }
        // return the value
        return value;
    }

    // select more than on value function for meat and products
    function selectMoreThanOneValue(e, input){
        let getValue = '';
        
        if(e.target.classList.contains('select-more')){
            e.target.classList.toggle('input-grid-active');
            e.target.children[1].children[0].classList.toggle('fa-plus');
            e.target.children[1].children[0].classList.toggle('fa-minus');
            getValue = e.target.children[0].textContent.trim();
            
        }
        if(e.target.classList.contains('input-text')){
            e.target.parentElement.classList.toggle('input-grid-active');
            e.target.nextSibling.nextSibling.children[0].classList.toggle('fa-plus');
            e.target.nextSibling.nextSibling.children[0].classList.toggle('fa-minus');
            getValue = e.target.textContent.trim();
            
        }
        if(e.target.classList.contains('input-icon')){
            e.target.parentElement.classList.toggle('input-grid-active');
            e.target.children[0].classList.toggle('fa-plus');
            e.target.children[0].classList.toggle('fa-minus');
            getValue = e.target.previousElementSibling.textContent.trim();
            
        }
        if(e.target.classList.contains('fa')){
            e.target.parentElement.parentElement.classList.toggle('input-grid-active');
            e.target.classList.toggle('fa-minus');
            e.target.classList.toggle('fa-plus');
            getValue = e.target.parentElement.previousElementSibling.textContent.trim();
            
        }

        let addel = true;

        if(input == 'meat'){
            meatarray.forEach(function(el,i){
                if(el == getValue){
                   meatarray.splice(i,1);
                   addel = false;
                }
            });
    
            if(addel == true){
                meatarray.push(getValue);
            }
            return meatarray;
        }

        if(input == 'products'){
            productarray.forEach(function(el,i){
                if(el == getValue){
                   productarray.splice(i,1);
                   addel = false;
                }
            });
    
            if(addel == true){
                productarray.push(getValue);
            }
    
            return productarray;
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

    // function to display error user not select any value
    function displayDanger(){
        formDanger.forEach(function(el){
            el.style.display = 'block';
        });
    }

    // functio to remove danger error
    function hideDanger(){
        formDanger.forEach(function(el){
            el.style.display = 'none';
        });
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
    imperialFormBtn.addEventListener('click', imperialFunc);
    matricFormBtn.addEventListener('click', matricFunc);
    preBtn.addEventListener('click', preStep);

    // function for step one to select preparation
    function stepOne(){
        if(preparationValue == ''){
            displayDanger();
        }else{
            reset();
            current = 1;
            stepSlider[current].style.display = 'block';
            progressBar.style.width = '14.30%';
            hideDanger();
            document.querySelector('#preparation_input').value = preparationValue;
        }
        
    }

    // function for step two to select meat values
    function stepTwo(){
        if(meatValues.length < 1){
            displayDanger();
        }else{
            reset();
            current = 2;
            stepSlider[current].style.display = 'block';
            progressBar.style.width = '28.6%';
            hideDanger();
            document.querySelector('#meat_input').value = meatValues;
        }
    }

    // function for step three to select products
    function stepThree(){
        if(productsValues.length < 1){
            displayDanger();
        }else{
            reset();
            current = 3;
            stepSlider[current].style.display = 'block';
            progressBar.style.width = '42.9%';
            hideDanger();
            document.querySelector('#products_input').value = productsValues;
        }
    }

    // function for step four to select activeVal
    function stepFour(){
        if(activeValue == ''){
            displayDanger();
        }else{
            reset();
            current = 4;
            stepSlider[current].style.display = 'block';
            progressBar.style.width = '57.2%';
            hideDanger();
            document.querySelector('#activeVal_input').value = activeValue;
        }
    }

    // function for step five to select familiar
    function stepFive(){
        if(familiarValue == ''){
            displayDanger();
        }else{
            reset();
            current = 5;
            stepSlider[current].style.display = 'block';
            progressBar.style.width = '71.5%';
            hideDanger();
            document.querySelector('#familiar_input').value = familiarValue;
        }
    }

    // function for step six to select lose weight
    function stepSix(){
        if(loseWeightValue == ''){
            displayDanger();
        }else{
            reset();
            current = 6;
            stepSlider[current].style.display = 'block';
            measureBtns.style.display = 'block';
            progressBar.style.width = '85.8%';
            hideDanger();
            document.querySelector('#loseWeight_input').value = loseWeightValue;
        }
    }

    // function when user submit the imperial form
    function imperialFunc(){
        // get the form values
        let age = document.querySelector('#imperial_age_input'),
            heightFt = document.querySelector('#imperial_height_ft_input'),
            heightIn = document.querySelector('#imperial_height_in_input'),
            weight = document.querySelector('#imperial_weight_input'),
            targetWeight = document.querySelector('#imperial_target_weight_input');
            // check if values are empty
            if(age.value == '' || heightFt.value == '' || heightIn.value == '' || weight.value == '' || targetWeight.value == ''){
                displayDanger();
            }else{
                hideDanger();
                imperialFormBtn.text = 'Processing....';
                progressBar.style.width = '100%';
                setTimeout(function(){
                    window.location = 'summary.html';
                }, 3000);
            }
    }

    // function when user submit the matric form
    function matricFunc(){
        // get the form values
        let age = document.querySelector('#matric_age_input'),
            height = document.querySelector('#matric_height_input'),
            weight = document.querySelector('#matric_weight_input'),
            targetWeight = document.querySelector('#matric_target_weight_input');
            // check if values are empty
            if(age.value == '' || height.value == '' || weight.value == '' || targetWeight.value == ''){
                displayDanger();
            }else{
                hideDanger();
                matricFormBtn.text = 'Processing....';
                progressBar.style.width = '100%';
                setTimeout(function(){
                    window.location = 'summary.html';
                }, 3000);
            }
    }

    // function when user click the back icon and go back to previous step
    function preStep(){
        measureBtns.style.display = 'none';
        hideDanger();
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

    // get the measurement form els
    let imperialBtn = document.querySelector('.imperial-btn'),
        matricBtn = document.querySelector('.matric-btn');
        imperialForm = document.querySelector('.imperial-form');
        matricForm = document.querySelector('.matric-form');

    // event listener to get the imperial form
    imperialBtn.addEventListener('click', function(){
        imperialForm.style.display = 'block';
        matricForm.style.display = 'none';
        matricBtn.classList.remove('active-btn');
        imperialBtn.classList.add('active-btn');
    });

    // event listener to get the matric form
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

// if summary page active
if(summaryPage){
    buyBtn.addEventListener('click', showEmailForm);

    // functio to show email form
    function showEmailForm(){
        summaryPage.style.display = 'none';
        emailForm.style.display = 'block';
    }

    emailPreBtn.addEventListener('click', showSummaryPage);

    // functio to show summary page
    function showSummaryPage(){
        summaryPage.style.display = 'block';
        emailForm.style.display = 'none';
    }

    formEmail.addEventListener('submit', submitEmailForm);

    // functio to submit email form
    function submitEmailForm(e){
        e.preventDefault();
        let emailValue = document.querySelector('#email_input').value;
        if(emailValue == ''){
            document.querySelector('.form-danger').style.display = 'block';
        }else{
            document.querySelector('.form-danger').style.display = 'none';
            formEmailBtn.value = 'Processing...';
            setTimeout(function(){
                window.location = 'checkout.html';
            }, 3000);
        }
        
        
    }
}

let checkoutPage = document.querySelector('.checkout-page');
    
// if checkout page active
if(checkoutPage){

    let plans = document.querySelectorAll('.select-plans .card'),
        plan1 = document.querySelector('.plan-1');
        // plan2 = document.querySelector('.plan-2');

    plan1.addEventListener('click', function(){
        plan1.classList.add('active-plan');
        // plan2.classList.remove('active-plan');
    });

    // plan2.addEventListener('click', function(){
    //     plan2.classList.add('active-plan');
    //     plan1.classList.remove('active-plan');
    // });
}

