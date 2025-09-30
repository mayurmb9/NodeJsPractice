
const person = {
    test() {
        var self = this;
        setTimeout(function () {
            console.log(this);

            // console.log(self);
        }, 2000);
        setTimeout(() => {
            console.log(this);
        })
    }
}

person.test();