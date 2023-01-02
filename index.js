
let countHome = 0;
let countGuest = 0;



// home
 function add1Home() {
     countHome += 1 ;
     document.getElementById("home-points-text").innerHTML = countHome;    
 }
 
  function add2Home() {
     countHome += 2 ; 
     document.getElementById("home-points-text").innerHTML = countHome;   
 }
 
   function add3Home() {
     countHome += 3 ;
     document.getElementById("home-points-text").innerHTML = countHome;   
 }
 
 // guest
  function add1Guest() {
     countGuest += 1 ;
     document.getElementById("guest-points-text").innerHTML = countGuest;    
 }
 
  function add2Guest() {
     countGuest += 2 ;
     document.getElementById("guest-points-text").innerHTML = countGuest;   
 }
 
   function add3Guest() {
     countGuest += 3 ;  
     document.getElementById("guest-points-text").innerHTML = countGuest;
 }
 
 // Reset
 function reset() {
    countGuest = 0;
    countHome = 0;
    document.getElementById("guest-points-text").innerHTML = countGuest;  
    document.getElementById("home-points-text").innerHTML = countHome;    
}

 
 
 
 
 
 
 
 
 
