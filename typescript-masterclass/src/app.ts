const elem = document.querySelector(".click");

function handleClick(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log(this.href);
}

elem.addEventListener("click", handleClick, false);
