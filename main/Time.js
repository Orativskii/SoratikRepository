"use strict";

class Time {
// export class Time {

    #yearCounter;
    #monthCounter;
    #weekCounter;

    constructor() {
        this.#yearCounter = 0;
        this.#monthCounter = 0;
        this.#weekCounter = 0;
    }


    //Year
    //Set
    increaseYear() {
        this.#yearCounter++;
    }

    //Get
    year() {
        return this.#yearCounter;
    }


    //Month
    //Set
    increaseMonth() {
        this.#monthCounter++;
    }

    //Get
    month() {
        return this.#monthCounter;
    }


    //Week
    //Set
    increaseWeek() {
        this.#weekCounter++;
    }

    //Get
    week() {
        return this.#weekCounter;
    }

    //Get format time
    string() {
        return 'Year: ' + this.#yearCounter + '\t Month: ' + this.#monthCounter + '\t Week: ' + this.#weekCounter;
    }

    static yearToWeek(years){
        return years * 12 * 4;
    }

    static monthToWeek(month){
        return month * 4;
    }
}