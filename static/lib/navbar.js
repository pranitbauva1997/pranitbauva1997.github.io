function toggleNavButton() {
  let navBars = document.getElementsByClassName("navigation");
  if (navBars[0].className === "navigation") {
    navBars[0].className += " responsive";
    navBars[0].style.flexDirection = "column";
  } else {
    navBars[0].className = "navigation";
    navBars[0].style.flexDirection = "row";
  }

  let navItems = document.getElementsByClassName("navigation-item");
  for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].style.display === "block") {
      if (i == 0) {
        continue
      }
      navItems[i].style.display = "none";
    } else {
      navItems[i].style.display = "block";
      navItems[i].style.lineHeight = "2em";
      navItems[i].style.textAlign = "center";
    }
  }
}
