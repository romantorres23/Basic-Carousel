class Slideshow {
    constructor(el){
        // this.el = document.querySelector(el);
        this.slides = [0, 1, 2, 3, 4, 5];
        this.current = 0;
        let time = 1000;
        // console.log(this.el);
 
        setInterval(() => {
            console.log(this.current);
            this.next();
        }, time);
    }

    next() {
        // console.log(this.el);
        if (this.current >= this.slides.length -1) {
            this.goto(0);
            return
        }

        this.goto(++this.current);
    }

    prev() {
        if (this.current <= 0) {
            this.current = this.slides.length;
        }
        
        this.slides[--this.current];
    }

    goto(i) {
        this.current = i;
        this.slides[i];
    }

    pause() {

    }

    resume() {

    }
}

let ss = new Slideshow(".pictures");

// let slides = [0, 1, 2, 3, 4, 5];
// let current = 0;
// let time = 1000;

// setInterval(() => {
//     console.log(current);
//     if (current >= slides.length -1) {
//         current = -1;
//     }

//     slides[current++];

// }, time);