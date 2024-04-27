function randint(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

class IUPAC_GENERATOR { 
    constructor(difficulty, requirement) {
        this.difficulty = difficulty
        this.requirement = requirement

        this.classes = [
            this.alkane
        ]

        this.iprefix = ['meth','eth','prop','but','pent','hex','hept','oct','non','dec']
        this.bprefix = ['','di','tri']

        this.parser()
    }

    tester() {
        this.alkane(5)
    }

    parser() {
        if (this.requirement[0] == true) {
            this.classes[this.requirement[1]]()
        } else {
            this.alkane(false)
            //this.classes[randint(this.difficulty[0],this.difficulty[1])]()
        }
    }

    alkane(n) {
        let length = 0
        if (n==false) {
            length = randint(1,10);
        } else {length=n}{
        if (length<=2) {
            this.compile(`${this.iprefix[length-1]}ane`); 
            return;
        }}
        this.length = length

        let location = randint(2,((length+1)/(2)))
        let blength = randint(1,location-1)
        console.log(this.iprefix[blength-1])

        this.branchlocation = location
        this.branchlength = blength

        this.compile(`${location}-${this.iprefix[blength-1]}yl${this.iprefix[length-1]}ane`)
    }


    compile(name) {
        this.name = name
        document.getElementById('name').innerText=this.name
    }
}
