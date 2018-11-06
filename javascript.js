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
function expandAbout(){
    document.getElementById("inDepth").style.display="block";
    document.getElementById("inDepthBtn").style.display="none";
}
function collapseAbout(){
    document.getElementById("inDepth").style.display="none";
    document.getElementById("inDepthBtn").style.display="block";
}

//Highlight nav items on hover
function softwareProjectsHover(){
    document.getElementById("softwareProjectsNav").style.color = "white";
}
function softwareProjectsLeave(){
    document.getElementById("softwareProjectsNav").style.color = "rgb(224, 200, 224)";
}


