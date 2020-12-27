class People {

    #peopleCount;
    #balance;
    #menCount;
    #womenCount;

    constructor(resources) {
        this.#updateInput(resources);
        this.#menCount = this.getRandomValue(this.#peopleCount * 0.4, this.#peopleCount * 0.6);
        this.#womenCount = this.#peopleCount - this.#menCount;
    }


    oneYear(res, time) {
        this.#peopleCount += Math.trunc(this.#peopleCount * res.getRNI());
        this.getGender(res);
        this.showData(res);
        this.#updateOutput(res);
        console.log()
    }

    oneMonth(res, time) {
        res.setRNI(res.getRNI() + 0.01);
        res.setLifeQuality(res.getLifeQuality() + 0.03);
        this.#balance += this.#peopleCount * 5;

    }

    oneWeek(res, time) {

    }


    getGender(res) {
        for (let i = 0; i < this.#peopleCount - res.getPeopleCount(); i++) {
            let gender = Math.floor(this.getRandomValue(0, 2));
            gender === 1 ? this.#menCount++ : this.#womenCount++;
        }
    }

    showData(res) {
        if (this.#peopleCount > res.getPeopleCount()) {
            console.log("New peoples: " + (this.#peopleCount - res.getPeopleCount()));
        }
        console.log(this.#menCount + " mens");
        console.log(this.#womenCount + " womens");
        console.log("New tax money for the year: " + (this.#balance - res.getBalance()) + "$");
        console.log("Balance city: " + this.#balance + "$");
    }

    getRandomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    #updateInput(resources) {
        this.#peopleCount = resources.getPeopleCount();
        this.#balance = resources.getBalance();
    }

    #updateOutput(resources) {
        resources.setPeopleCount(this.#peopleCount);
        resources.getBalance(this.#balance);
        resources.getMenCount(this.#menCount);
        resources.getWomenCount(this.#womenCount);
    }
}