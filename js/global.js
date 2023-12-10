function checkWindowSize(){
    if (window.innerWidth < 900){
        document.querySelector('body').innerHTML = `<h1>Mobiles and Tablets are not Yet Supported</h1>`;
    }
}
window.addEventListener("load", checkWindowSize);
