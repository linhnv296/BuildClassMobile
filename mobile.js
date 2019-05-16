let Mobile = function (name) {

    this.name = name;
    this.battery = 100;
    this.inbox = [""];
    this.outbox = [""];
    this.status = true;
    this.message = "";


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
    this.useBattery = function () {
        if (this.battery > 0){
            this.battery--;
            console.log(this.battery);
        }
    }
    //Ham viet tin nhan - nhan tham so tu ngoai: Msg
    this.writeMessage = function (Meg) {
        if (this.status) {
            this.message = Meg;
        } else {
            console.log("May dang tat");
        }
        this.useBattery();
    };
    //gui tin nhan den phone va them vao tin nhan vao outbox dien thoai gui
    this.sendMessage = function (phone) {
        if (this.status) {
            phone.inbox.push(this.message);
            this.outbox.push(this.message);
        } else {
            console.log("May dang tat");
        }
        this.useBattery();
    };
    this.readInbox = function () {
        if (this.status) {
            return this.inbox;
        } else {
            console.log("May dang tat");
        }
        this.useBattery();
    };

    this.readOutbox = function () {
        if (this.status) {
            return this.outbox;
        } else {
        console.log("May dang tat");
        }
        this.useBattery();
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
console.log("inbox iphone: " + iphone.readInbox());
console.log("outbox nokia: " + nokia.readOutbox());