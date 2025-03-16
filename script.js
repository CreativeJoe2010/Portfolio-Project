const wordList = ["SINGER", "CREATIVE DESIGNER"];
const wordList2 = ["GRAPHIC DESIGNER", "DESIGN COACH"];

function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
  }

  preload_image("https://i.ibb.co/QvymM59p/Hope-Pic.png");
  preload_image("https://i.ibb.co/3YcGQ7bb/birthday-flyer1.png");
  preload_image("https://i.ibb.co/V0FfG0CX/birthday-flyer2.png");
  preload_image("https://i.ibb.co/BHmBVtp6/birthday-flyer3.png");
  preload_image("https://i.ibb.co/NnHvbTxW/business-flyer1.png");
  preload_image("https://i.ibb.co/9k3npp9n/business-flyer2.png");
  preload_image("https://i.ibb.co/jvRW5V2B/business-flyer3.png");
  preload_image("https://i.ibb.co/YTPzp1X3/church-flyer1.png");
  preload_image("https://i.ibb.co/tPNDBMPn/church-flyer2.png");
  preload_image("https://i.ibb.co/FL65BQ23/church-flyer3.png");

// document.addEventListener("DOMContentLoaded", () => {
    
        const creative = document.querySelector(".wrapper");
        let currentWordIndex = 0;
        const wrapperSec = document.querySelector(".wrapper-sec");
        let currentWord2Index = 0;
        let callanimDur = true;
        function updateHeadingText(currentWordIndex, creative) {
        const currentWord = wordList[currentWordIndex];
        creative.innerHTML = currentWord;
    }

    function updateHeadingTexts(currentWord2Index, wrapperSec) {
        const currentWord2 = wordList2[currentWord2Index];
        wrapperSec.innerHTML = currentWord2;
    }
        setInterval(() => {
            creative.style.animationDuration = '3s, 0.75s';
            creative.style.animationName = 'typing, blink';
            wrapperSec.style.animationDuration = '3s, 0.75s';
            wrapperSec.style.animationName = 'typing, blink';
            updateHeadingText(currentWordIndex, creative);
            updateHeadingTexts(currentWord2Index, wrapperSec);
            currentWordIndex++;
            currentWord2Index++;
            if (currentWordIndex >= wordList.length) {
                currentWordIndex = 0;
            }
            if (currentWord2Index >= wordList2.length) {
                currentWord2Index = 0;
            }
                
                callanimDur = false;
            
        }, 3000);
    

    

onload = () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
   }

    const about1 = document.querySelector('.type1');
    const about2 = document.querySelector('.type2');
    const about3 = document.querySelector('.type3');
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    let speed = 50;
    let text1 = "My name is HOPE MUSA DANJUMA a Nigerian and a Kaduna girl by heart. I am a passionate Graphic Designer, Creative Designer and Design Coach with a deep love for storytelling through visuals. With a keen eye for details and a commitment to excellence, I craft designs that connect, inspire and leave lasting impressions.";
    let text2 = "Over the years, I have worked on diverse projects, ranging from Brand Identity to Digital Marketing campaigns, bringing CREATIVITY and INNOVATION to every design. As a Design Coach, I empower aspiring designers with practical skills, fostering their growth and confidence in the Creative Industry.";
    let text3 = "Driven by a vision to merge artistry with strategy, I believe great design is more than AESTHETICS. It's about solving problems and delivering value. Whether collaborating with clients or mentoring students, I am dedicated to shaping a world where creativity thrives and ideas transform into Impactful Realities.";

    let isScrolling = false;
    let scrollTimeout = null;
    let lastScrollY = window.scrollY;
    let typingInterval = null;
    let isPaused = false;
    let fullHeight = window.innerHeight;
    let aboutElem = document.querySelector('.about');
    const type = () => {
        if (i1 < text1.length) {
            about1.innerHTML += text1.charAt(i1);
            i1++;
            // if (lastScrollY >= fullHeight/2) {
            //     if (!isPaused) { 
            //         scrollDown();
            //     }
            // }
        } else if (i2 < text2.length) {
            about2.innerHTML += text2.charAt(i2);
            i2++;
            // if (lastScrollY >= fullHeight/2) {
            //     if (!isPaused) { 
            //         scrollDown();
            //     }
            // }
        } else if (i3 < text3.length) {
            about3.innerHTML += text3.charAt(i3);
            i3++;
            // if (lastScrollY >= fullHeight/2) {
            //     if (!isPaused) { 
            //         scrollDown();
            //     }
            // }
        } else {
            clearInterval(typingInterval);
            document.querySelector('.about').style.height = 'fit-content';
        }
    };

    // const scrollDown = () => {
    //     if (!isScrolling) {
    //         window.scrollTo(0, document.body.scrollHeight);
    //     }
    // };

    // window.addEventListener('scroll', () => {
    //     const currentScrollY = window.scrollY;
    //     const bottomThreshold = document.body.scrollHeight - window.innerHeight - 50;console.log("This is how much you have scrolled: " + currentScrollY);
    //     console.log("This is the bottom threshold: " + bottomThreshold);
    //     if (currentScrollY < lastScrollY) {
    //         isPaused = true;
    //     } else if (currentScrollY >= bottomThreshold) {
    //         isPaused = false;
    //         if (!isScrolling) {
    //             scrollDown();
    //         }
    //     }

    //     isScrolling = true;
    //     lastScrollY = currentScrollY;

    //     clearTimeout(scrollTimeout);
    //     scrollTimeout = setTimeout(() => {
    //         isScrolling = false;
    //     }, 100);
    // });

    typingInterval = setInterval(type, speed);

    let birthdayFlier1 = document.querySelector('.b-day-flier1');
    let birthdayFlier2 = document.querySelector('.b-day-flier2');
    let birthdayFlier3 = document.querySelector('.b-day-flier3');
    let birthdayDropdown = document.querySelector('.birthday-title');
    let dropdownIcon = document.querySelector('.dropdown');
    let birthdayMessage = document.querySelector('.birthday-message');
    let isMessage = false;

    let businessFlier1 = document.querySelector('.b-flier1');
    let businessFlier2 = document.querySelector('.b-flier2');
    let businessFlier3 = document.querySelector('.b-flier3');
    let businessDropdown = document.querySelector('.business-title');
    let dropdownIcon2 = document.querySelector('.dropdown2');
    let businessMessage = document.querySelector('.business-message');
    let isMessage2 = false;

    let churchFlier1 = document.querySelector('.ch-flier1');
    let churchFlier2 = document.querySelector('.ch-flier2');
    let churchFlier3 = document.querySelector('.ch-flier3');
    let churchDropdown = document.querySelector('.church-title');
    let dropdownIcon3 = document.querySelector('.dropdown3');
    let churchMessage = document.querySelector('.church-message');
    let isMessage3 = false;

    document.addEventListener('click', function(event) {
        let element = event.target;
        if (element.classList.contains('b-day-flier')) {
            let tempSrc = birthdayFlier1.src;
            birthdayFlier1.src = element.src;
            element.src = tempSrc;
        }
    })

    document.addEventListener('click', function(event) {
        let element = event.target;
        if (element.classList.contains('b-flier')) {
            let tempSrc = businessFlier1.src;
            businessFlier1.src = element.src;
            element.src = tempSrc;
        }
    })

    document.addEventListener('click', function(event) {
        let element = event.target;
        if (element.classList.contains('ch-flier')) {
            let tempSrc = churchFlier1.src;
            churchFlier1.src = element.src;
            element.src = tempSrc;
        }
    })

    birthdayDropdown.addEventListener('click', function() {
        if (!isMessage) {
            birthdayMessage.style.display = 'flex';
            isMessage = !isMessage;
            dropdownIcon.style.transform = 'rotate(180deg) translateY(55%)';
            birthdayDropdown.style.boxShadow = "0 0 0.5rem 0.2rem rgb(0, 153, 255)";
        }
        else {
            birthdayMessage.style.display = 'none';
            isMessage = !isMessage;
            dropdownIcon.style.transform = 'rotate(0deg) translateY(-30%)';
            birthdayDropdown.style.boxShadow = "0 0 0.5rem 0.5rem #4487ce6d";
        }
    })

    businessDropdown.addEventListener('click', function() {
        if (!isMessage2) {
            businessMessage.style.display = 'flex';
            isMessage2 = !isMessage2;
            dropdownIcon2.style.transform = 'rotate(180deg) translateY(55%)';
            businessDropdown.style.boxShadow = "0 0 0.5rem 0.2rem rgb(0, 153, 255)";
        }
        else {
            businessMessage.style.display = 'none';
            isMessage2 = !isMessage2;
            dropdownIcon2.style.transform = 'rotate(0deg) translateY(-30%)';
            businessDropdown.style.boxShadow = "0 0 0.5rem 0.5rem #4487ce6d";
        }
    })

    churchDropdown.addEventListener('click', function() {
        if (!isMessage3) {
            churchMessage.style.display = 'flex';
            isMessage3 = !isMessage3;
            dropdownIcon3.style.transform = 'rotate(180deg) translateY(55%)';
            churchDropdown.style.boxShadow = "0 0 0.5rem 0.2rem rgb(0, 153, 255)";
        }
        else {
            churchMessage.style.display = 'none';
            isMessage3 = !isMessage3;
            dropdownIcon3.style.transform = 'rotate(0deg) translateY(-30%)';
            churchDropdown.style.boxShadow = "0 0 0.5rem 0.5rem #4487ce6d";
        }
    })
};
// });
