class People {

    //Не дивись на мене так, я сам не понімаю
    #peopleCount;
    #balance;
    #menCount;
    #womenCount;
    #pregnancy;
    #death;
    #pregnancyWomen;
    #bornPeople;
    #deathPeople;
    thisWeek = 0;
    dateBorn = [];
    dateDeath = [];
    #deathPeopleCount;
    #RNI;

    constructor(resources) {
        this.#updateInput(resources);
        this.#menCount = this.getRandomValue(this.#peopleCount * 0.4, this.#peopleCount * 0.6);
        this.#womenCount = this.#peopleCount - this.#menCount;
        this.#pregnancy = 4;
        this.#death = 1;
        this.#pregnancyWomen = 0;
        this.#bornPeople = 0;
        this.#deathPeopleCount = 0;
        this.#deathPeople = 0;
        this.#RNI = 0;
    }


    oneYear(res, time) {
        // this.#peopleCount += Math.trunc(this.#peopleCount * res.getRNI());

        this.pregnancyWomen();
        this.getDateBorn();
        this.getDateDeath();
        this.#RNI = ((this.#bornPeople - this.#deathPeopleCount)/this.#peopleCount) * 1000;
        this.showData(res);
        this.#updateOutput(res);
        this.thisWeek = 0;

    }

    oneMonth(res, time) {
        // res.setRNI(res.getRNI() + 0.01);
        // res.setLifeQuality(res.getLifeQuality() + 0.03);
        this.giveTax();

    }

    oneWeek(res, time) {
        this.thisWeek++;
        if (this.thisWeek > 52) this.thisWeek = 0;
        this.born();
        this.deathPeople()
    }

    pregnancyWomen() {
        let i = 0;
        while (i < this.#womenCount) {
            let chancePregnancy = this.getRandomValue(0, 100);
            if (chancePregnancy <= this.#pregnancy) {
                this.#pregnancyWomen++;
            }
            i++;
        }
    }

    born() {
        let i;

        this.dateBorn.forEach(i => {
            //48 тижнів,а не 53
            // В умові не всі елементи масіва ловить!

            if (this.thisWeek === i) {

                this.#peopleCount++;
                this.#bornPeople++;
                this.getGenderBorn();
            }

        });
    }

    getDateBorn() {
        this.dateBorn.length = 0;
        if (this.#pregnancyWomen > 0) {
            for (let i = 0; i < this.#pregnancyWomen; i++) {
                let dateBornPeople = this.getRandomValue(1, 53);
                this.dateBorn[i] = dateBornPeople;
            }
            this.#pregnancyWomen = 0;
        }
        this.dateBorn.sort((a, b) => a - b);
    }

    deathPeople() {
        let i;
        this.dateDeath.forEach(i => {
            if (this.thisWeek === i) {
                this.#peopleCount--;
                this.#deathPeopleCount++;
                this.getGenderDeath();
            }
        });
    }

    getDateDeath() {
        let i = 0;
        while (i < this.#peopleCount) {
            let chanceDeath = this.getRandomValue(0, 100);
            if (chanceDeath <= this.#death) {
                this.#deathPeople++;
            }
            i++;

        }

        this.dateDeath.lenght = 0;
        if (this.#deathPeople > 0) {
            for (let i = 0; i < this.#deathPeople; i++) {
                let dateDeathPeople = this.getRandomValue(1, 53);
                this.dateDeath[i] = dateDeathPeople;
            }
            this.#deathPeople = 0;
        }
        this.dateDeath.sort((a, b) => a - b);

    }

    getGenderBorn() {
        let gender = Math.floor(this.getRandomValue(0, 2));
        gender === 1 ? this.#menCount++ : this.#womenCount++;
    }

    getGenderDeath() {
        if (this.#menCount !== 0 && this.#womenCount !== 0) {
            let gender = Math.floor(this.getRandomValue(0, 2));
            gender === 1 ? this.#menCount-- : this.#womenCount--;
        } else if (this.#menCount !== 0 && this.#womenCount === 0) this.#menCount--;
        else if (this.#menCount === 0 && this.#womenCount !== 0) this.#womenCount--;
        else {
            console.log("All people death! Congratulations!");
        }
    }


    thisYearTax = 0;

// плоти нолог
    giveTax() {
        this.thisYearTax = this.#peopleCount * 5;
        this.#balance += this.thisYearTax;
    }

    showData(res) {
        console.log(this.dateBorn.length + " pregnancy women");
        console.log(this.#bornPeople + " born people for the year");
        this.#bornPeople = 0;
        console.log(this.#deathPeopleCount + " death people for the year");
        this.#deathPeopleCount = 0;
        console.log(this.#menCount + " mens");
        console.log(this.#womenCount + " womens");
        console.log("New tax money for the year: " + this.thisYearTax + "$");
        console.log("Balance city: " + this.#balance + "$");
        console.log("\t People number: " + this.#peopleCount + "\n");
        console.log("\t RNI: " + Math.floor(this.#RNI * 100) / 100);
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