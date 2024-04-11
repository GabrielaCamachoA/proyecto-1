const dateNumber= document.getElementById("dateNumber");
const dateText= document.getElementById("dateText");
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
setDate();