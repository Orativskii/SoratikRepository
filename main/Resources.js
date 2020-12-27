"use strict";

class Resources {

    #happiness; //[0, 100], in percent
    #balance; //[0, infinity), in money char
    #peopleCount; //[0, 2 000 000 000]
    #lifeQuality; //[0, 100], in percent
    #RNI; //The rate of natural increase (RNI). [-1.0, 1.0], in percent. Example, 0.7
    #menCount;
    #womenCount;
    //Params example:
    // params = {
    //         'happy': 68,
    //         'balance': 4999,
    //         'peopleCount': 239000,
    //         'lifeQuality': 70,
    //         'RNI': 0.42,
    //     }
    constructor(optionsObject) {
        this.#happiness = 50;
        this.#balance = 3000000;
        this.#peopleCount = 200000;
        this.#lifeQuality = 50;
        this.#RNI = 0;
        this.#menCount = 0;
        this.#womenCount = 0;
        for (const option in optionsObject) {
            let value = optionsObject[option];
            switch (option) {
                case 'happy':
                    if (value >= 0 && value <= 100) {
                        this.#happiness = value;
                    }
                    break;
                case 'balance':
                    if (value >= 0) {
                        this.#balance = value;
                    }
                    break;
                case 'peopleCount':
                    if (value >= 0 && value <= 2000000000) {
                        this.#peopleCount = value;
                    }
                    break;
                case 'lifeQuality':
                    if (value >= 0 && value <= 100) {
                        this.#lifeQuality = value;
                    }
                    break;
                case 'RNI':
                    if (value >= -1 && value <= 1) {
                        this.#RNI = value;
                    }
                    break;
            }
        }
    }

    //Happiness
    setHappy(value) {
        if (value >= 0 && value <= 100) {
            this.#happiness = value;
        }
    }

    getHappy() {
        return this.#happiness;
    }

    //Balance
    setBalance(value) {
        if (value >= 0) {
            this.#balance = value;
        }
    }

    getBalance() {
        return this.#balance;
    }

    //PeopleCount
    setPeopleCount(value) {
        if (value >= 0 && value <= 2000000000) {
            this.#peopleCount = value;
        }
    }

    getPeopleCount() {
        return this.#peopleCount;
    }

    //LifeQuality
    setLifeQuality(value) {
        if (value >= 0 && value <= 100) {
            this.#lifeQuality = value;
        }
    }

    getLifeQuality() {
        return this.#lifeQuality;
    }

    //RNI
    setRNI(value) {
        if (value >= -1 && value <= 1) {
            this.#RNI = value;
        }
    }

    getRNI() {
        return this.#RNI;
    }

    setMenCount(value) {
        if (value >= 0) {
            this.#menCount = value;
        }
    }

    getMenCount() {
        return this.#menCount;
    }

    setWomenCount(value) {
        if (value >= 0) {
            this.#menCount = value;
        }
    }

    getWomenCount() {
        return this.#menCount;
    }
}