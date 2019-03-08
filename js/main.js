// Variables

const vid = document.querySelector('video');
const captionID = true;

const capTimeArray = [
    0.24,
    4.13,
    7.53,
    11.27,
    13.96,
    17.94,
    22.37,
    26.88,
    32.10,
    34.73,
    39.43,
    42.35,
    46.30,
    49.27,
    57.78,
    53.76,
    59.68,
]


// Initialize Media Element Player

$('video').mediaelementplayer({
	useDefaultControls: true,
	stretching: 'responsive',
	startLangauge: 'en'
});



function transcriptHighlight() {
    vid.addEventListener("timeupdate", function() {
        if (captionID) {
            for (i = 0; i <= capTimeArray.length - 1; i +=1) {
                if (this.currentTime >= capTimeArray[i] && this.currentTime <= capEndTimeArray[i+1]) {
                    const caption = document.getElementById(`caption-${i}`);
                    caption.style.color = "orange";
                }else {
                    const caption = document.getElementById(`caption-${i}`);
                    caption.style.color = "black";
                }      
            }
        }
    })
}



transcriptHighlight();

//  ******Below is my first attempt that worked that I'm refactoring above to make the code more DRY******

// Keep track of current video time and highlight appropriate text

// function highlightTranscript() {
//     vid.addEventListener("timeupdate", function(){
//         if (captionID) {
//             if (this.currentTime >= 0.24 && this.currentTime <= 4.13) {
//                 const caption = document.getElementById('caption-0');
//                 caption.style.color = "orange";
//             } else {
//                 const caption = document.getElementById('caption-0');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 4.13 && this.currentTime <= 7.53) {
//                 const caption = document.getElementById('caption-1');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-1');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 7.53 && this.currentTime <= 11.27) {
//                 const caption = document.getElementById('caption-2');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-2');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 11.27 && this.currentTime <= 13.96) {
//                 const caption = document.getElementById('caption-3');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-3');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 13.96 && this.currentTime <= 17.94) {
//                 const caption = document.getElementById('caption-4');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-4');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 17.94 && this.currentTime <= 22.37) {
//                 const caption = document.getElementById('caption-5');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-5');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 22.37 && this.currentTime <= 26.88) {
//                 const caption = document.getElementById('caption-6');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-6');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 26.88 && this.currentTime <= 30.92) {
//                 const caption = document.getElementById('caption-7');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-7');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 32.10 && this.currentTime <= 34.73) {
//                 const caption = document.getElementById('caption-8');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-8');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 34.73 && this.currentTime <= 39.43) {
//                 const caption = document.getElementById('caption-9');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-9');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 39.43 && this.currentTime <= 41.19) {
//                 const caption = document.getElementById('caption-10');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-10');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 42.35 && this.currentTime <= 46.30) {
//                 const caption = document.getElementById('caption-11');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-11');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 46.30 && this.currentTime <= 49.27) {
//                 const caption = document.getElementById('caption-12');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-12');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 49.27 && this.currentTime <= 53.76) {
//                 const caption = document.getElementById('caption-13');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-13');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 53.76 && this.currentTime <= 57.78) {
//                 const caption = document.getElementById('caption-14');
//                 caption.style.color = "orange";
//             }else {
//                 const caption = document.getElementById('caption-14');
//                 caption.style.color = "black";
//             }
//         }
//         if (captionID) {
//             if(this.currentTime >= 57.78 && this.currentTime <= 59.68) {
//                 const caption = document.getElementById('caption-15');
//                 caption.style.color = "orange";
//             } else {
//                 const caption = document.getElementById('caption-15');
//                 caption.style.color = "black";
//             }
//         }
//     });
// }


// highlightTranscript();

