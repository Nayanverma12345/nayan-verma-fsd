function dosomething(){
    throw new Error(
        'a is error thrown from dosomething'
    );
}
function init(){
    try{
        dosomething();
    }
    catch(e){
        console.log(e);
    }
    console.log(
        "after successful error handling"
    );
}
init();
