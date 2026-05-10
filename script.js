document.addEventListener("DOMContentLoaded", function () {
    function showGreeting() {
        //fetch the html element
        const greeting_h3 = document.getElementById("greeting_msg");
        //get the local time
        const curr_hour = new Date().getHours();

        if (curr_hour < 12) {
            greeting_h3.textContent = "Good Morning!!";
        } else if (curr_hour < 18) {
            greeting_h3.textContent = "Good Afternoon!!";
        } else {
            greeting_h3.textContent = "Good evening!!";
        }
    }
    //always call the function
    //showGreeting();

    // const contact_form = document.getElementById("my_form");
    // const console_view = document.getElementById("console_view");

    // contact_form.addEventListener('submit', function (event) {
    //     event.preventDefault(); //prevent page from refreshing

    //     // array of check boxes 
    //     // let chkboxs = document.getElementsByClassName('lang');
    //     // let chk_vals;
    //     // for(var i = 1; i < chkboxs.length; ++i){
    //     //     if(chkboxs[i].checked){
    //     //         chk_vals.push(chkboxs[i].value);
    //     //         break;
    //     //     }
    //     // }
    //     //create new object
    //     const userData = {
    //         fname: document.getElementById('fname').value,
    //         email: document.getElementById('email').value,
    //         //fav_lang: chk_vals,
    //     };

    //     //create a representation for data
    //     console_view.textContent = "New Data Received....\n"
    //         + JSON.stringify(userData, null, 2);

    //     // show in colsole
    //     console.log("Form Data Object:", userData);

    // });

    // let calc_btns = document.getElementsByClassName('flex-item');
    // calc_btns.addEventListener('onClick', function () {
    //     const num1 = parseFloat(document.getElementById('num1').value);
    //     const num2 = parseFloat(document.getElementById('num2').value);
    //     const result = document.getElementById('result');
    //     let res = 0; //temp value

    //     if (symbol === '+')
    //         res = num1 + num2;
    //     if (symbol === '-')
    //         res = num1 - num2;
    //     if (symbol === '*')
    //         res = num1 * num2;

    //     result.textContent = res;
    // });
    window.calc = function (symbol) {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const result = document.getElementById('result');
        let res = 0; //temp value

        if (num1 == null || num2 == null) {
            result.textContent = 0;
            return;
        }

        if (symbol === '+') {
            res = num1 + num2;
        } else if (symbol === '-') {
            res = num1 - num2;
        } else if (symbol === '*')
            res = num1 * num2;

        result.textContent = res;
    }


});



