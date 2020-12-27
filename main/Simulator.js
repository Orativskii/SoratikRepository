"use strict";
// import {Resources} from "./Resources.js";
// import {Time} from "./Time.js";

class Simulator {

    #resources;
    #time;
    #simulationRun;
    #timeSimulation //Time work main cycle, in weeks. For example, 1440. It is 30 years


    constructor(resources, timeSimulation) {
        this.#resources         = resources === undefined? new Resources(): resources;
        this.#time              = new Time();
        this.#simulationRun     = false;
        this.#timeSimulation    = timeSimulation === undefined? 30 /*Years*/ * 12 /*Months*/ * 4 /*Weeks*/ : timeSimulation;
    }

    start(year, month, week){
        this.#simulationRun = true;

        let monthCounter = 0;
        let weekCounter = 0;

        while(this.#simulationRun){
            //One week later
            weekCounter++;
            this.#time.increaseWeek();

            //Week callback
            week(this.#resources, this.#time);

            if(weekCounter >= 4){
                //Month callback
                monthCounter++;
                weekCounter = 0;
                this.#time.increaseMonth();
                month(this.#resources, this.#time);
            }
            if(monthCounter >= 12){
                //Year callback
                monthCounter = 0;
                this.#time.increaseYear();
                year(this.#resources, this.#time);
            }

            //Check time for end simulation
            if(this.#time.week() > this.#timeSimulation){
                this.#simulationRun = false;
            }
        }
    }

    getTime(){
        return this.#time;
    }

    stop(){
        this.#simulationRun = false;
    }
}

