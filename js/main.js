class Slideshow {
    constructor(el){
        this.el = document.querySelector(el);
        this.allPics = document.querySelectorAll('img');
        this.indicators = document.querySelectorAll('li');
        this.current = 1;
        this.time = 1000;
        this.arrowLeft = document.querySelector('.fa-arrow-left');
        this.arrowRight = document.querySelector('.fa-arrow-right');
        
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
                    this.next();
                });
            };

    }

    next() {
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
        this.current = this.current + 1;

        ///***Loops back to one at the last slide */
        if (this.current < this.allPics.length) {
            this.goto(this.current); 
            return
        }
        
        this.goto(0);
    }

    prev() {
        ///***Loops back to end of slide when prev on 0 */
        if (this.current === 0) {
            this.current = this.allPics.length;
        }

        ///***goes backward one slide */
        this.current = this.current - 1;
        this.allPics[this.current];
    }

    goto(i) {
        //console.log(i);
        this.current = i;
        this.allPics[i];
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