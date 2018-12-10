window.addEventListener("resize", resizeNav);

function resizeNav(){
    var x = window.matchMedia("(max-width: 750px)")
    if(x.matches){
        document.getElementById("mySideNav").style.width = "0";
        document.getElementById("allContent").style.marginLeft= "0px";
    }
}

var x = window.matchMedia("(max-width: 750px)")

/* Set the width of the side navigation to 250px */
function openNav() {
    if(x.matches){
        //document.getElementById("mySideNav").style.position = "";
        document.getElementById("mySideNav").style.width = "100vw";
    }
    else{
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("allContent").style.marginLeft= "250px";
    }
   // document.getElementById("allContent").style.float = "right";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("allContent").style.marginLeft= "0px";
}



// expands description paragraph into more details
function expandAbout(){
    document.getElementById("inDepth").style.display="block";
    document.getElementById("inDepthBtn").style.display="none";
}
// collapse extra details 
function collapseAbout(){
    document.getElementById("inDepth").style.display="none";
    document.getElementById("inDepthBtn").style.display="block";
}
function expandDetails(){
    document.getElementById("moreDetails").style.display = "block";
    document.getElementById("moreDetailsBtn").style.display = "none";
    document.getElementById("travelUtilized").style.display = "none";
    document.getElementById("travelUtilizedParagraph").style.display="none";
}
function collapseDetails() {
    document.getElementById("moreDetails").style.display = "none";
    document.getElementById("moreDetailsBtn").style.display = "block";
    document.getElementById("travelUtilized").style.display = "block";
    document.getElementById("travelUtilizedParagraph").style.display="block";
}
function expandiOS(){
    document.getElementById("iOSDetails").style.display = "block";
    document.getElementById("moreiOSDetailsBtn").style.display = "none";
}
function collapseiOS(){
    document.getElementById("iOSDetails").style.display = "none";
    document.getElementById("moreiOSDetailsBtn").style.display = "block";
}
function expandAlgae(){
    document.getElementById("algaeDetails").style.display = "block";
    document.getElementById("moreAlgaeBtn").style.display = "none";
}
function collapseAlgae(){
    document.getElementById("algaeDetails").style.display = "none";
    document.getElementById("moreAlgaeBtn").style.display = "block";
}
function expandSolar(){
    document.getElementById("solarDetails").style.display = "block";
    document.getElementById("moreSolarBtn").style.display = "none";
}
function collapseSolar(){
    document.getElementById("solarDetails").style.display = "none";
    document.getElementById("moreSolarBtn").style.display = "block";
}


//Highlight nav items on hover

// function softwareProjectsHover(){
//     document.getElementById("softwareProjectsNav").style.color = "rgb(255, 113, 255);";
// }
// function softwareProjectsLeave(){
//     document.getElementById("softwareProjectsNav").style.color = "white";
// }


