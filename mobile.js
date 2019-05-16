let Mobile = function (name) {

    this.name = name;
    this.battery = 100;
    this.inbox = [""];
    this.outbox = [""];
    this.status = true;
    this.message = "";

    this.getName = function () {
        return this.name;
    };
    // Kiem tra trang thai dien thoai dang bat hay tat
    this.checkStatus = function () {
        if (this.status) {
            console.log("on");
        } else {
            console.log("off");
        }
    };
    //phuong thuc bat tat dien thoai
    this.TurnOn = function () {
        this.status = true;
    };
    this.TurnOff = function () {
        this.status = false;
    };
    //Sac pin dien thoai
    this.changeBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
    };
    this.useBattery = function (phone) {

        if (phone.battery > 0){
            phone.battery--;
            console.log( phone.getName()+"is" +phone.battery);
        }
    }
    //Ham viet tin nhan - nhan tham so tu ngoai: Msg
    this.writeMessage = function (Meg) {
        if (this.status) {
            this.message = Meg;
        } else {
            console.log("May dang tat");
        }
        // this.useBattery(phone);
    };
    //gui tin nhan den phone va them vao tin nhan vao outbox dien thoai gui
    this.sendMessage = function (phone) {
        if (this.status) {
            phone.inbox.push(this.message);
            this.outbox.push(this.message);
        } else {
            console.log("May dang tat");
        }
        this.useBattery(phone);
    };
    this.readInbox = function (phone) {
        if (this.status) {
            return this.inbox;
        } else {
            console.log("May dang tat");
        }
        this.useBattery(phone);
    };

    this.readOutbox = function (phone) {
        if (this.status) {
            return this.outbox;
        } else {
        console.log("May dang tat");
        }
        this.useBattery(phone);
    };
}

let nokia = new Mobile("nokia");
let iphone = new Mobile("iphone");
nokia.TurnOff();
iphone.TurnOff();
nokia.TurnOn();
iphone.TurnOn();
nokia.writeMessage("hello iphone. i send message");
nokia.sendMessage(iphone);
nokia.writeMessage("fdsfdsfdsfds");
nokia.sendMessage(iphone);
iphone.writeMessage("hello iphone. i send message");
iphone.sendMessage(nokia);
console.log("inbox iphone: " + iphone.readInbox(iphone));
console.log("outbox nokia: " + nokia.readOutbox(nokia));