const buttons = document.querySelectorAll(".btns");
const icons = document.querySelectorAll(".icon");
const texts = document.querySelectorAll(".hidden_div");

buttons.forEach((el) => {
  el.addEventListener("click", () => {
    const icon = el.querySelector(".icon");
    const text = el.querySelector(".hidden_div");
    if (text.classList.contains("display")) {
      text.classList.remove("display");
      icon.classList.remove("icon_active");
    } else {
      texts.forEach((e) => {
        e.classList.remove("display");
      });
      icons.forEach((e) => {
        e.classList.remove("icon_active");
      });
      text.classList.add("display");
      icon.classList.add("icon_active");
    }
  });
});
