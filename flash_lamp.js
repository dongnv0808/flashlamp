class Battery{
    energy;
    constructor(energy){
        this.energy = energy;
    }
    setEnergy(energy){
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    decreasEnergy(){
        if(this.energy > 0){
            this.energy--;
        }
    }
}

class FlashLamp{
    statusFlash;
    battery;
    constructor(statusFlash, battery){
        this.statusFlash = statusFlash;
        this.battery = battery;
    }
    setBattery(battery){
        this.battery = battery;
    }
    getBattery(){
        return this.battery.getEnergy();
    }
    getLight(){
        if(this.statusFlash === true){
            document.write(`Den bat<br>`);
        }else{
            document.write(`Den tat<br>`)
        }
    }
    getTurnOn(){
        return this.statusFlash = true;
    }
    getTurnOff(){
        return this.statusFlash = false;
    }
}