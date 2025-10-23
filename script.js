window.addEventListener("load", () => {
  const iframe = document.getElementById("myFrame");
  const loader = document.getElementById("loader");

  // 👇 Apni local file ka path yahaan likho
  const filePath = "file:///C:/Users/Ideal%20Garden/Downloads/index%20-%202025-10-21T002905.490.html";
  iframe.src = filePath;

  // Jab iframe load ho jaye to loader hatayein aur iframe show karein
  iframe.onload = () => {
    loader.style.display = "none";
    iframe.classList.add("visible");
  };

  // Agar file load hone me zyada waqt lag jaye, to loader visible rahe
  setTimeout(() => {
    if (!iframe.classList.contains("visible")) {
      loader.style.display = "block";
    }
  }, 500);
});