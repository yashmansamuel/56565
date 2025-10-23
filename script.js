window.addEventListener("load", () => {
  const iframe = document.getElementById("myFrame");
  const loader = document.getElementById("loader");

  // 👇 Apni local file ka path yahaan likho (Write your local file path here)
  const filePath = "file:///C:/Users/Ideal%20Garden/Downloads/index%20-%202025-10-21T002905.490.html";
  iframe.src = filePath; // Sets the iframe content

  // Jab iframe load ho jaye to loader hatayein aur iframe show karein
  // (When the iframe loads, hide the loader and show the iframe)
  iframe.onload = () => {
    loader.style.display = "none";
    iframe.classList.add("visible");
  };

  // Agar file load hone me zyada waqt lag jaye, to loader visible rahe
  // (If the file takes a long time to load, the loader will remain visible)
  // This setTimeout is mainly a fallback/check, but the loader is already visible by default.
  setTimeout(() => {
    if (!iframe.classList.contains("visible")) {
      loader.style.display = "block"; 
    }
  }, 500);
});
