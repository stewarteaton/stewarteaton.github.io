function myFunction(x) {
    
    x.classList.toggle("change");
    //document.getElementById("slideMenu").style.display = flex;
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("allContent").style.marginLeft= "250px";
   // document.getElementById("allContent").style.float = "right";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("allContent").style.marginLeft= "0px";
}

// expands description paragraph into more details
function expandDetails(){
    document.getElementById("moreDetails").style.display = "block";
    document.getElementById("moreDetailsBtn").style.display = "none";
}
// collapse extra details 
function collapseDetails() {
    document.getElementById("moreDetails").style.display = "none";
    document.getElementById("moreDetailsBtn").style.display = "block";
}

function expandiOS(){
    document.getElementById("iOSDetails").style.display = "block";
    document.getElementById("moreiOSDetailsBtn").style.display = "none";
}

function collapseiOS(){
    document.getElementById("iOSDetails").style.display = "none";
    document.getElementById("moreiOSDetailsBtn").style.display = "block";
}