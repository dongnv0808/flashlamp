let battery = new Battery();
battery.setEnergy(50);
let flashlamp = new FlashLamp();
flashlamp.setBattery(battery)
document.write(`Trang thai pin truoc khi bat: ${flashlamp.getBattery()}<br>`);

flashlamp.getTurnOn();
flashlamp.getLight();
battery.decreasEnergy();
document.write(`Trang thai pin sau khi bat: ${flashlamp.getBattery()}<br>`);

flashlamp.getTurnOff();
flashlamp.getLight();
document.write(`Trang thai pin sau khi tat: ${flashlamp.getBattery()}<br>`);

