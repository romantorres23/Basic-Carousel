class Slideshow {
    constructor(el){
        this.el = document.querySelector(el);
        this.numOfSlides = this.el.querySelectorAll('img');
        this.indicators = this.el.querySelectorAll('li');
        this.current = 0;
        this.time = 1000;
        this.arrowLeft = this.el.querySelector('.fa-arrow-left');
        this.arrowRight = this.el.querySelector('.fa-arrow-right');
        const that = this;
        
        ///***Initial fill */
        this.indicators[0].classList.add("fill");

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

        ///***Swipes */   
        this.mySwipe = new Swipe(this.el, {
            startSlide: 0,
            auto: 1000,
            draggable: true,
            autoRestart: true,
            continuous: true,
            disableScroll: true,
            stopPropagation: true,
            callback: function(index, element) {
                console.log("swiped");
                console.log(index);
                that.current = index;
                that.setIndicator(that.current);
            },
            transitionEnd: function(index, element) {}
        });
    }

    setIndicator(index) {
        let filledEl = this.el.querySelector(".fill");

        ///**Remove active classes */
        if (filledEl !== null) {
            filledEl.classList.remove("fill");
        }
   
        ///***Make active classes */
        this.indicators[index].classList.add("fill");
    }

    next() {
        var i = this.current + 1;

        ///***Loops back to one at the last slide */
        if (i < this.numOfSlides.length) {
            this.goto(i); 
        } else { 
            this.goto(0);
        }
    }

    prev() {
        var i = this.current - 1;

        ///***Loops back to last slide at 0 */
        if (i < 0) {
            this.goto(this.numOfSlides.length - 1); 
        } else { 
            this.goto(i);
        }
    }

    goto(i) {
        this.current = i;

        this.mySwipe.slide(this.current);
    }

    pause() {
        ///***Pauses slideshow */
        //clearInterval(this.slideShow);
        this.mySwipe.stop();
    }

    resume() {
        ///***Starts interval */
        // this.slideShow = setInterval(() => {
        //     //console.log(this.current);
        //     this.next();
        // }, this.time);
        this.mySwipe.restart();
    }
}

let ss = new Slideshow(".pictures");