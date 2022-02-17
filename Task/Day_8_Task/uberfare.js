class uber{
    constructor(kilometerFare,pickupTime){
        this.BaseFare=100;                      // base fare
        this.KilometerFare=kilometerFare*15;   //per Km cost Rs 15 
        this.Pickup=pickupTime;                 //time in 24hrs(8pm to 6am, every night)

        this.uberFare =()=>{
               var cost = this.BaseFare+this.KilometerFare; 
               var nightSurcharge = 50; 
               if (this.Pickup >= 20 || this.Pickup < 6) {
                cost += nightSurcharge;
        }
        return cost;
    };
}
}
var Uber= new uber(150,7)
console.log(Uber.uberFare());