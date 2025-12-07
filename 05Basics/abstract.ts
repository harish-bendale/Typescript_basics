abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string 
    ) {}

    abstract getSepia() : void
    getReelsTime() : number { // we can't write method implementation in interface
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string,
        public burst: number
    ){
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia ");
    }
}

const hc = new Instagram("hc", "tc", 3);
console.log(hc.getReelsTime());