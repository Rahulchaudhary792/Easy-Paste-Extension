document.querySelectorAll("input, textarea").forEach((el) => {
	el.removeAttribute("onpaste");
	el.style.userSelect = "auto";
	el.style.webkitUserSelect = "auto";
});
  document.addEventListener(
	"paste",
	(e) => {
	  e.stopPropagation();
	},
	true
);
