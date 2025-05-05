// main.js - Versi terbaru sesuai struktur HTML Discord Online

document.addEventListener("DOMContentLoaded", () => {
    // Scroll reveal untuk animasi
    const revealElements = document.querySelectorAll(".scroll-reveal");
  
    const isInView = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
    };
  
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        if (isInView(el)) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  
    // Update hanya Discord Online
    const onlineSpan = document.getElementById("discord-online");
  
    if (onlineSpan) {
      fetch("https://discord.com/api/guilds/1219156501873164338/widget.json")
        .then((res) => res.json())
        .then((data) => {
          onlineSpan.textContent = data.presence_count ?? "-";
        })
        .catch(() => {
          onlineSpan.textContent = "-";
        });
    }
  });
  