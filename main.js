window.onload = function () {
    var balance = document.getElementById('balance');
    var maxlosses = document.getElementById('maxlosses');
    var baseBet = document.getElementById('basebet');
    var betincrease = document.getElementById('betincrease');
    var betchance = document.getElementById('betchance');
    var wincondition = document.getElementById('wincondition');
    var betchance = document.getElementById('bank');
    var simIsRunning = false;

    function formatInputBTC(event) {
        this.value = parseFloat(this.value).toFixed(8);
    }

    function formatInputChance(event) {
        if(this.value < 0 || this.value > 99.99){
            this.value = 49.95;
        }
        this.value = parseFloat(this.value).toFixed(2);
    }

    function startSim() {
        if (document.getElementById('simbutton').innerText === "Start Sim" ){
            document.getElementById('simbutton').innerText = "Stop Sim";
            simIsRunning = !simIsRunning;

        } 
        else {
            document.getElementById('simbutton').innerText = "Start Sim";
            simIsRunning = !simIsRunning;
        }
    }

    document.getElementById('simbutton').addEventListener('click', function(){startSim()});
    
    document.getElementById('balance').addEventListener('change', formatInputBTC);
    document.getElementById('bank').addEventListener('change', formatInputBTC);
    document.getElementById('basebet').addEventListener('change', formatInputBTC);
    document.getElementById('betchance').addEventListener('change', formatInputChance);
    
};
//startingBalance = float64(600) // int64 so can be big if you're using DOGE for safer betting or smth
//maxBet = float64(43.14320869)
//baseBet = float64(0.00015000)
//currentBet = baseBet
//betIncrease := float64(1.5)
//betChance = int64(2488) // ( 0 - 9999 ) 5000 would be ~50%

//winCondition = 601
//bank = 0
//losses := 0
//lossMaxBets := 0