

const onSubmit = (e) => {
e.preventDefault();

send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE,
    toSend,
    process.env.REACT_APP_EMAILJS_USER_ID,
)
    .then((response) => {
    //-- TODO:: 03/27/2022 #EP || Update response workflow
    alert(`${response.status} - ${response.text}`)
    })
    //-- clear form
    .then( () => {
    window.location.reload(false);

    })
    .catch((err) => {
    // console.log('FAILED...', err);
    alert(`ERROR: Message did not send: - ${err.status}`,err)
    });
};

//-- As changes happen, ensure what's being sent is up-to-date in the toSend OBJ
const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value,  });
};

//-- Editing input after typing 
function onKeyUpPhone(e){
    //-- if trying to erase, don't try to format
    if(e.key === "Backspace" || e.key === 'Delete'){ return null;}
        
    //-- extract value
        const phoneIn = e.target.value;
        //-- get current stored value
    //  const phoneCurrent = toSend.from_phone;
        
        //-- if nothing just exit
        if(!phoneIn) return;

    //-- clean it up  
    const digits = phoneIn.replace(/\D/g, '');

    //-- format it
    // const formattedDigits = (digits.substring(0,1) + '(' + digits.substring(1,4) + ')' + digits.substring(4,7) + '-' + digits.substring(7,11)); //-- with area code
    const formattedPhone = ('(' + digits.substring(0,3) + ')' + digits.substring(3,6) + '-' + digits.substring(6,10)); //-- without area-code

    console.log(formattedPhone.length)

    //-- inline styling so red border until good.
    var input = e.target;
    var isError = ( (formattedPhone.length) < 13 );
    var color =  (isError) ? "red" : "grey";
    var borderWidth =  (isError)? "3px" : "1px"; 
    input.style.borderColor = color;
    input.style.borderWidth = borderWidth;


    //-- update ui input
    e.target.value = formattedPhone;
    //-- update data to send
    toSend.from_phone = formattedPhone;
    return null;
}