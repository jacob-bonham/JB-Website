// Select the button
const btn = document.querySelector("#toggle-theme");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

const react = document.querySelector("#toggle-theme")
react.addEventListener("click", (e) => console.log(e.target) );

// Listen for a click on the button
btn.addEventListener("click", function() {
    console.log(`mode button clicked`)
  // If the current URL contains "light-theme.css"
  if (theme.getAttribute("href") == "assets/css/main.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "assets/css/dark-theme.css";
    btn.textContent = "Light Mode";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "assets/css/main.css";
    btn.textContent = "Dark Mode"
  }
});


//f09b for github
//f08c for linked-in
//f0e0 for email