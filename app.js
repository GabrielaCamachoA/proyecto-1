const dateNumber= document.getElementById("dateNumber");
const dateText= document.getElementById("dateText");
const clock= document.getElementById("clock")
const dateMonth= document.getElementById("dateMonth");
const dateYear= document.getElementById("dateYear");
const tastksContainer= document.getElementById("tasksContainer");

const setDate= () => {
    const date= new Date ()
    dateNumber.textContent= date.toLocaleDateString("es",{ day: "numeric"});
    dateText.textContent= date.toLocaleDateString("es",{ weekday: "long"});
    dateMonth.textContent= date.toLocaleDateString("es",{ month: "short"});
    dateYear.textContent= date.toLocaleDateString("es",{ year: "numeric"});
}

const setTime= () =>{
    const date= new Date ();
    const hours= date.getHours().toString().padStart(2,'0');
    const minutes= date.getMinutes().toString().padStart(2, '0')
    const seconds= date.getSeconds().toString().padStart(2, '0')
    clock.textContent= `${hours}:${minutes}:${seconds}`;
};

setTime();
setDate();

/*llamar la constante setTime cada segundo */
setInterval(setTime, 1000);
