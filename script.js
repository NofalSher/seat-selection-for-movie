//     Get DOM elements
const container=document.querySelector(".container");
const seats=document.querySelectorAll(".row .seat:not(.occupied)");
const count=document.getElementById("count");

const total=document.getElementById("total");
const movieSelect=document.getElementById("movie");

const ticketPrice=+movieSelect.value;  // We have added a plus sign ahead of movieSelect to actually convert it in to number format from string format


  
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll(".row.seat.selected ")
    const selectedSeatsCount=selectedSeats.length;
    // console.log(selectedSeatsCount)
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount* ticketPrice;
}

container.addEventListener("click", e=> {  
    // We have made a function here. In ES6 basically we donot need to make a function 
// Rather we can write   (e)=>{}
    

   // console.log("e.target"); //e.target tells us that at which seat had we clicked
if(e.target.classList.contains("seat") &&  
!e.target.classList.contains("occupied")
){
    e.target.classList.toggle("selected"); // If we click for first time it will be selected and for next click it will be again de selected.
    updateSelectedCount();
}

})    //Initialize an event when it is clicked