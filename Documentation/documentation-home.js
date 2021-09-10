function ScrollUp() {
    console.log("scrollup")
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; //for For Chrome, Firefox, IE and Opera
}