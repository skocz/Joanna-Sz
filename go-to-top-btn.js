// When the user scrolls down 20px from the top of the document, 
//show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 655 || document.documentElement.scrollTop > 655) {
        document.getElementById("mobileBtn").style.display = "block";
    } else {
        document.getElementById("mobileBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// window.onscroll = function() {scrollFunction();};

// function scrollFunction() {
//     if (document.body.scrollTop > 655 || document.documentElement.scrollTop > 655) {
//         document.getElementById("page-Btn").style.display = "block";
//     } else {
//         document.getElementById("page-Btn").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }