function hoverOnNavBar() {
  const privateBus = document.querySelector("#private_bus");
  const business = document.querySelector("#business");

  privateBus.addEventListener("mouseover", () => {
    document.querySelector("#private_bus_menu").classList.remove("hidden");
    document.querySelector("#private_bus_menu").classList.add("flex");
  });
  privateBus.addEventListener("mouseout", () => {
    document.querySelector("#private_bus_menu").classList.remove("flex");
    document.querySelector("#private_bus_menu").classList.add("hidden");
  });

  business.addEventListener("mouseover", () => {
    document.querySelector("#business_menu").classList.remove("hidden");
    document.querySelector("#business_menu").classList.add("flex");
  });
  business.addEventListener("mouseout", () => {
    document.querySelector("#business_menu").classList.remove("flex");
    document.querySelector("#business_menu").classList.add("hidden");
  });
}

function MenuBtn() {
  const btn = document.querySelector("#HamMenu");
  let isMenuOpen = false;

  btn.addEventListener("click", () => {
    const menu = document.querySelector("nav > ul");
    if (!isMenuOpen) {
      menu.classList.remove("MenuClose");
      menu.classList.add("MenuOpen");
      isMenuOpen=true;
    }
    else{
        menu.classList.remove("MenuOpen");
        menu.classList.add("MenuClose");
        isMenuOpen=false;
    }
  });
}

hoverOnNavBar();
MenuBtn();
