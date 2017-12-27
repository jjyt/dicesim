window.onload = function () {
    var balance = document.getElementById('balance').value;//
    var maxlosses = document.getElementById('maxlosses').value;//
    var maxlossesvalue = document.getElementById('maxlossesvalue').value;//
    var baseBet = document.getElementById('basebet').value;//
    var betincrease = document.getElementById('betincrease').value;//
    var betbatches = document.getElementById('betbatches').value;//
    var betchance = document.getElementById('betchance').value;//
    var wincondition = document.getElementById('wincondition').value;//
    var bank = document.getElementById('bank'.value);//

    function getRandomIntInclusive(min, max) {
        const randomBuffer = new Uint32Array(1);
    
        window.crypto.getRandomValues(randomBuffer);
    
        let randomNumber = randomBuffer[0] / (0xffffffff + 1);
    
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(randomNumber * (max - min + 1)) + min;
    }

    function formatInputBTC(event) {
        this.value = parseFloat(this.value).toFixed(8);
    }

    function formatInputChance(event) {
        if(this.value < 0 || this.value > 99.99){
            this.value = 49.95;
        }
        this.value = parseFloat(this.value).toFixed(2);
    }

    function formatInputIncrease(event) {
        if(this.value <= 1 || this.value >= 20.00){
            this.value = 2.00;
        }
        this.value = parseFloat(this.value).toFixed(2);
    }
    
    function startSim() {
        if (document.getElementById('simbutton').innerText === "Start Sim"){
            document.getElementById('simbutton').innerText = "Stop Sim";
            setTimeout(function(){
                if (document.getElementById('simbutton').innerText === "Stop Sim"){
                    var rolls = [];
                    var lossStreak = 0;
                    for (var i = 0; i < document.getElementById('betbatches').value; i++) {
                        let roll = getRandomIntInclusive(1,9999);
                        rolls.push(roll);
                    }
                    for (var i = 0; i < rolls.length; i++) {
                        if (rolls[i] <= (document.getElementById('betchance').value*100)) { // win
                            
                        }
                    }
                    console.log(rolls);

                }
                else{
                    return
                }
                setTimeout(arguments.callee,10);
                },10)
        } 
        else {
            document.getElementById('simbutton').innerText = "Start Sim";
            return
        }
    }

    // * Event Listeners * //
    document.getElementById('simbutton').addEventListener('click', startSim);
    document.getElementById('balance').addEventListener('change', formatInputBTC);
    document.getElementById('bank').addEventListener('change', formatInputBTC);
    document.getElementById('basebet').addEventListener('change', formatInputBTC);
    document.getElementById('betchance').addEventListener('change', formatInputChance);
    document.getElementById('wincondition').addEventListener('change', formatInputBTC);
    document.getElementById('maxlossesvalue').addEventListener('change', formatInputBTC);
};
