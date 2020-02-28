class Slideshow {
    constructor(el){
        this.el = document.querySelector(el);
        this.allPics = document.querySelectorAll('img');
        this.current = 0;
        this.time = 1000;
        

        ///***Starts the slideshow */
        this.resume();

        ///***pauses the slideshow on mouseenter */
        for (let i = 0; i < this.allPics.length; i++) {
            this.allPics[i].addEventListener("mouseenter", () =>{
                this.pause();
            });
        };

        ///***resumes the slideshow on mouseleave */
        for (let i = 0; i < this.allPics.length; i++) {
            this.allPics[i].addEventListener("mouseleave", () =>{
                this.resume();
            });
        };
        
    }

    next() {
        this.current = this.current + 1;

        if (this.current < this.allPics.length) {
            this.goto(this.current); 
            return
        }
        
        this.goto(0);
    }

    prev() {
        if (this.current === 0) {
            this.current = this.allPics.length;
        }

        this.current = this.current - 1;
        this.allPics[this.current];
    }

    goto(i) {
        this.current = i;
        this.allPics[i];
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