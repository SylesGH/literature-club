/* parallax */
const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_front = document.getElementById("mountains_front");
const mountains_behind = document.getElementById("mountains_behind");
const text = document.getElementById("text");
const account = document.getElementById("account");
const search = document.getElementById("search");
const parallaxText = document.getElementById("text")

window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;

    if (scrollValue <= 750) {
      stars.style.left = scrollValue * 0.25 + "px";
      text.style.right = scrollValue * 4 + "px";
    }

    if (scrollValue <= 520) {
        moon.style.top = scrollValue * 1.05 + "px";
    }
    if (scrollValue <= 650) {
        mountains_behind.style.top = scrollValue * 0.2 + "px";
    }

    if (scrollValue >= 50 && scrollValue <= 485) {
        search.style.top = (scrollValue * -0.08) + 49 + "%"
    } else {
        search.style.top = null
    }

    if (scrollValue <= 65) {
        parallaxText.style.display = "none"
        parallaxText.style.visibility = "hidden"
    } else {
        parallaxText.style.display = null
        parallaxText.style.visibility = null
    }
    
    mountains_front.style.top = scrollValue * 0 + "px";

    console.log(scrollValue);
})

/* device type */
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

console.log(params.s);
  