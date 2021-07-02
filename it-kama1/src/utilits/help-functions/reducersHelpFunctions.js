export const updateObject = (item, actionValue, objPropName, valueObj  ) => {

    return item.map(u => {
        if (u[objPropName] === actionValue) {
            return {...u, ...valueObj};
        }

        return u;
    })

}

export const parseError = (error="The AboutMe field is required. (AboutMe)")=>{
    let errorContent='';
    let result = '';
    let isInContacts = false;
    const firstBracket = error.indexOf('(');
    for (let i = 0; i<firstBracket-1; i++){
        errorContent+=error[i];
    }
    if(error.includes("->")) {
        error = error.toLowerCase();
        isInContacts = true;
        const arrowPosition = error.indexOf('->');
        const length = error.length;
        for (let i = arrowPosition + 2; i < length - 1; i++) {
            result += error[i];
        }
    } else {
        let counter = 0;

        const secondBracket = error.indexOf(')');
        for(let i=firstBracket+1; i<secondBracket; i++) {
            counter===0? result= error[i].toLowerCase():
            result +=error[i];
            counter+=1;
        }

    }
    let object={};
    if(isInContacts){
        object.contacts = {};
        object.contacts[result] = errorContent;
    } else{
        object[result] = errorContent;
    }
    return object;
}
