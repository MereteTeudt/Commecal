class Bike 
{
    /**
     * 
     * @param {number} modelNmbr 
     * @param {string} name 
     * @param {number} price 
     * @param {string} type 
     * @param {string} image 
     */
    constructor(modelNmbr, name, price, type, image)
    {
        this.modelNmbr = modelNmbr;
        this.name = name;
        this.price = price;
        this.type = type;
        this.image = image;
    }

    get Price()
    {
        return this.price;
    }

    ConvertRow2Obj(bikeRow)
    {
        var bike = new Bike(bikeRow);
        return bike;
    }
    SaveAll()
    {
        var bikeTableString="", error=false,
        nmbrOfBikes = Object.keys(Bike.instances).length;
        try
        {
            bikeTableString = JSON.stringify(Bike.instances);
            localStorage["bikeTable"] = bikeTableString
        }
        catch(e)
        {
            alert("error when writing to local storage\n"+ e);
            error = true;
        }
        if(!error)
        {
            console.log(nmbrOfBikes + " bikes saved.");
        }
    }
    LoadAll() 
    {
        var i=0, key=[], bikeTableString="", bookTable={};
        try 
        {
            if(localStorage["bikeTable"])
            {
                bikeTableString = localStorage["bikeTable"];
            }
        }
        catch(e)
        {
            alert("Error when reading from Local Storage" + e)
        }
        if(bikeTableString)
        {
            bikeTable = JSON.parse(bikeTableString);
            keys = Object.keys(bikeTable);
            console.log(keys.length + "bikes loaded.");
            for (i=0; i < keys.length; i++)
            {
                
            }
        }
    }
    static CreateTestData()
    {
        LoadAll();

        let testOne = {modelNmbr:001, name:"SpeedRacerOne", price:1000, type:"Racer", image:"img/Kids.jpg"};
        let testTwo = {modelNmbr:002, name:"SpeedRacerTwo", price:2000, type:"Racer", image:"img/City.jpg"};
        let testThree = {modelNmbr:003, name:"SpeedRacerThree", price:3000, type:"Racer", image:"img/Street.jpg"};

        Bike.instances[testOne.modelNmbr] = new Bike(testOne);
        Bike.instances[testTwo.modelNmbr] = new Bike(testTwo);
        Bike.instances[testThree.modelNmbr] = new Bike(testThree);

        SaveAll();
    }
}
Bike.instances = {};


