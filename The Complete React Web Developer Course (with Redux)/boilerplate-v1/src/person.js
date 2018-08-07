export const isAdult = (age)=> {
    if (age >= 18 ) {
        return true;
    }
    return false;
}

export const canDrink = (age) => {
    if (age >= 21) {
        return true;
    }
    return false;
}

const isSenior = (age) =>{
    return age >= 65;
}
export { isSenior as default}