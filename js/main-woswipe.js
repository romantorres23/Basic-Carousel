class Slideshow {
    constructor(el){
        this.el = document.querySelector(el);
        this.allPics = this.el.querySelectorAll('img');
        this.indicators = this.el.querySelectorAll('li');
        this.current = 0;
        this.time = 1000;
        this.arrowLeft = this.el.querySelector('.fa-arrow-left');
        this.arrowRight = this.el.querySelector('.fa-arrow-right');
        
        ///***Initial active image and fill */
        this.allPics[0].classList.add("active");
        this.indicators[0].classList.add("fill");

        ///***Starts the slideshow */
        this.resume();

        ///***pauses the slideshow on mouseenter */
        this.el.addEventListener("mouseenter", () =>{
            this.pause();
        });

        ///***resumes the slideshow on mouseleave */
        this.el.addEventListener("mouseleave", () =>{
            this.resume();
        });

        ///***prev on click of left arrow */
        this.arrowLeft.addEventListener("click", () =>{
            this.prev();
        });

        ///***next on click of right arrow */
        this.arrowRight.addEventListener("click", () =>{
            this.next();
        });

        ///***goto i on click of indicator*/
        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].addEventListener("click", () =>{
                this.goto(i);
            });
        };

        // ///***Swipes */   
        // window.mySwipe = new Swipe(this.el, {
        // startSlide: 0,
        // auto: 0,
        // draggable: false,
        // autoRestart: false,
        // continuous: true,
        // disableScroll: true,
        // stopPropagation: true,
        // callback: function(index, element) {},
        // transitionEnd: function(index, element) {}
        // });
    }

    next() {
        var i = this.current + 1;

        ///***Loops back to one at the last slide */
        if (i < this.allPics.length) {
            this.goto(i); 
        } else { 
            this.goto(0);
        }
    }

    prev() {
        var i = this.current - 1;

        ///***Loops back to last slide at 0 */
        if (i < 0) {
            this.goto(this.allPics.length - 1); 
        } else { 
            this.goto(i);
        }
    }

    goto(i) {
        this.current = i;

        let activeEl = this.el.querySelector(".active");
        let filledEl = this.el.querySelector(".fill");

        ///**Remove active classes */
        if (activeEl,filledEl !== null) {
            activeEl.classList.remove("active");
            filledEl.classList.remove("fill");
        }
   
        ///***Make active classes */
        this.allPics[this.current].classList.add("active");
        this.indicators[this.current].classList.add("fill");
        
        //console.log(i);
        
        // this.allPics[i];
    }

    pause() {
        ///***Pauses slideshow */
        clearInterval(this.slideShow);
    }

    resume() {
        ///***Starts interval */
        this.slideShow = setInterval(() => {
            //console.log(this.current);
            this.next();
        }, this.time);
    }
}

let ss = new Slideshow(".pictures");