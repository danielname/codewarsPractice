const Work = {
    googleRate: 400,
    amazonRate: 380,
    facebookRate: 350,
    payFunction(googleHours, amazonHours, facebookHours){
        return (googleHours * Work.googleRate) + (amazonHours * Work.amazonRate) + (facebookHours * Work.facebookRate);
    }
}
console.log(Work.payFunction(6,4,10));