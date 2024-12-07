let devtoolsOpen = false;

  // Function to check if the user is on a mobile device
  const isMobile = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  // Function to show the overlay
  const showBlocker = () => {
    devtoolsOpen = true;
    const blocker = document.getElementById("devtools-blocker");
    if (blocker) {
      blocker.style.display = "block";
    }
  };

  // Function to detect devtools
  const detectDevTools = () => {
    if (isMobile()) return; // Skip on mobile devices
    
    const threshold = 160; // Sensible threshold for width/height changes
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    if (widthDiff || heightDiff) {
      if (!devtoolsOpen) showBlocker();
    } else {
      devtoolsOpen = false;
      const blocker = document.getElementById("devtools-blocker");
      if (blocker) {
        blocker.style.display = "none";
      }
    }
  };

  // Monitor changes in window size
  window.addEventListener("resize", detectDevTools);

  // Check continuously for devtools being open
  setInterval(detectDevTools, 500);

  // Disable right-click (only on desktop)
  if (!isMobile()) {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      alert("Right-click is disabled.");
    });
  }

  // Disable F1 to F12, Ctrl, and other shortcuts (only on desktop)
  if (!isMobile()) {
    document.addEventListener("keydown", function (e) {
      // Disable F1 to F12 keys
      if (e.key.startsWith("F") && !isNaN(e.key.slice(1))) {
        e.preventDefault();
        alert(`${e.key} is disabled.`);
      }
      // Disable Ctrl and combinations
      if (e.ctrlKey) {
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.key === "I" || e.key === "J" || e.key === "U") {
          e.preventDefault();
          showBlocker();
        }
        // General Ctrl key
        e.preventDefault();
        alert("Ctrl key is disabled.");
      }
      // Disable F12 directly
      if (e.key === "F12") {
        e.preventDefault();
        showBlocker();
      }
    });
  }

  // Block left-click (only on desktop)
  if (!isMobile()) {
    document.addEventListener("mousedown", function (e) {
      if (e.button === 0) { // Left-click
        e.preventDefault();
        alert("Left mouse click is disabled.");
      }
    });
  }
})();
