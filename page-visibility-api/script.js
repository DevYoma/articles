console.log("working")

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    console.log("The page is visible."); // Actions to perform when the page is visible
  } else {
    console.log("The page is hidden."); // Actions to perform when the page is hidden
  }
});