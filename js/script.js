function updateCountryView()
{
    var ddTravel = document.getElementById("ddTravel");
    var divCountry = document.getElementById("divCountry");

    if(ddTravel.value == "Yes")
    {
        divCountry.classList.remove("invisible");
    }
    else
    {
        divCountry.classList.add("invisible");
    }
}

function validateForm()
{
    var dob = document.querySelector("#dob");
    var divdobError = document.querySelector("#divdobError");
    var divNameError = document.querySelector("#divNameError");
    var FormIsValid = true;

    if(dob.value == "")
    {
        /* show the error */
        divdobError.classList.remove("invisible");
        divdobError.innerHTML = "The date of birth cannot be empty.";
        dob.classList.add("hasError");
        FormIsValid = false;

    }
    else
    {
        var dobDate = new Date(dob.value);
        var todayDate = new Date();
        if(dobDate >= todayDate)
        {
            /*Show the error */
            divdobError.classList.remove("invisible");
            divdobError.innerHTML = "The date of birth must be before today's date";
            dob.classList.add("hasError");
            FormIsValid = false;
        }
        else
        {
            divdobError.classList.add("invisible");
            divdobError.innerHTML = "";
            dob.classList.remove("hasError");
        }
    }

    //check 2
    var ddTravel = document.querySelector("#ddTravel");
    if(ddTravel.value == "Yes")
    {
        var txtCountry = querySelector("#TxtCountry");
        if(txtCountry.value="")
        {
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            FormIsValid = false;
        }
        else
        {
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }
    }

    //check 3
    var elements = document.getElementsByTagName("input");
    var invalidChars = ["#", "!", "~"]; 
    for(let i=0; i < elements.length;i++)
    {
        for(let j = 0; j < invalidChars.length;j++)
        {
            if(elements[i].value.indexOf(invalidChars[j] != -1))
            {
                elements[i].classList.add("hasError");
                divNameError.innerHTML = "ERROR: Cannot be empty or #, !, ~";
                formIsValid = false;
            }
            else
            {
                elements[i].classList.remove("hasError");
                formIsValid = true;
            }
        }
    }
    return FormIsValid;
}