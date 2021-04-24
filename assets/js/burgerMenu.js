export function burgerMenu() {
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".middle-side");
    let application = document.querySelector(".application");

    burger.addEventListener("click", (e)=>{
        burger.classList.toggle("open");
        nav.classList.toggle("open-middle-side");

        if ( application.classList.contains("close-application")){
            application.classList.add("open-application")
        }

        application.classList.toggle("close-application");

    });
}