class Slideshow {
    constructor(el){
        // this.el = document.querySelector(el);
        this.slides = [0, 1, 2, 3, 4, 5];
        this.current = 0;
        this.time = 1000;
        // console.log(this.el);
        
        this.resume();
    }

    next() {
        this.current = this.current + 1;

        if (this.current < this.slides.length) {
            this.goto(this.current); 
            return
        }
        
        this.goto(0);
    }

    prev() {
        if (this.current === 0) {
            this.current = this.slides.length;
        }

        this.current = this.current - 1;
        this.slides[this.current];
    }

    goto(i) {
        this.current = i;
        this.slides[i];
    }

    pause() {
        clearInterval(this.slideShow);
    }

    resume(el) {
        this.slideShow = setInterval(() => {
            console.log(this.current);
            this.next();
        }, this.time);
    }
}

let ss = new Slideshow(".pictures");