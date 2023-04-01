game = function() {
    playerPT= 0;
    systemPT= 0;

    startGame= function() {
        startBTN = document.querySelector('.start button'); // definisce il bottone dentro classe start
        startSCN = document.querySelector('.start'); // definisce tutta la sezione start
        vs = document.querySelector('.vs'); // quello che risulta offuscato in gameout

        startBTN.addEventListener('click', function() { //stabilire cosa succede al click di startBTN

            startSCN.classList.add('gameout'); // per far scomparire il BTN start dopo il click
            vs.classList.add('gamein'); // per far apparire contenuto gamein
            vs.classList.remove('gameout'); // per far scomparire sezione gameout
        });
    };

    playvs = function(){
        check = document.querySelectorAll('.check button'); // bottone dentro classe check
        launch = document.querySelectorAll('.launch img'); // img dentro class  launch
        playerHand = document.querySelector('.player_game');
        systemHand = document.querySelector('.system_game');

        systemcheck = ['rock', 'paper', 'scissors'];

        check.forEach((opt1)=> {
            opt1.addEventListener('click', function() {
                systemNumber = Math.floor(Math.random()*3);
                systemChoice = systemcheck[systemNumber];
                
                setTimeout(() => {
                    compareLaunch(this.textContent, systemChoice);

                    playerHand.src = `${this.textContent}.png`;
                    systemHand.src = `${systemChoice}.png`;
                }, 2000);
            });
        });
    };

    compareLaunch = (playerChoice, systemChoice) => { // compare chi ha vinto
        ps_win = document.querySelector('.ps_win');

        if (playerChoice === systemChoice) { // se player e pc hanno scelto lo stesso segno
            ps_win.textContent = "Draw"; // pareggio
            return;
        }

        if (playerChoice === 'rock') {  // se player sceglio sasso
            if (systemChoice === 'schissors') {     // e se pc sceglie forbici
                ps_win.textContent = "Player Wins";     //scrive player vince
                playerPT++;     // e aumenta i punti di player
                endGame();      // finisce gioco
                updatescore(); // aggiorna risultato
                return;
            } else {
                ps_win.textContent = "System Wins";    
                systemPT++;    
                endGame();     
                updatescore(); 
                return;
            }
        }
        if (playerChoice === 'paper') {  // se player sceglio carta
            if (systemChoice === 'schissors') {     // e se pc sceglie forbici
                ps_win.textContent = "System Wins";     //scrive System vince
                systemPT++;     // e aumenta i punti di player
                endGame();      // finisce gioco
                updatescore(); // aggiorna risultato
                return;
            } else {
                ps_win.textContent = "Player Wins";    
                playerPT++;    
                endGame();     
                updatescore(); 
                return;
            }
        }
        if (playerChoice === 'schissors') {  
            if (systemChoice === 'rock') {     
                ps_win.textContent = "System Wins";    
                systemPT++;    
                endGame();     
                updatescore(); 
                return;
            } else {
                ps_win.textContent = "Player Wins";    
                playerPT++;    
                endGame();     
                updatescore(); 
                return;
            }
        }
    }

    updatescore = function() {
        playerScore = document.querySelector('.player_pt p'); // mette sulla var 'playerscore' il collegamento al <p> di player_pt
        systemScore = document.querySelector('.system_pt p');
        playerScore.textContent = playerPT; // mette sulla var 'playerscore' il punteggio di player_pt
        systemScore.textContent = systemPT;
    };

    restartGame = () => {
        reStart = document.querySelector('.ps_winend button'); // bottone RESTART
        reStart.addEventListener('click', () => {
            window.location.reload();        // ricarica la pagina completa (rps.js)
        });
    };
    restartGame();

endGame = ()=> {
    ps_winend = document.querySelector('.ps_winend');
    vs = document.querySelector('.vs');
    ps_win_stop = document.querySelector('.ps_win_stop');

    if (playerPT === 2) {
        vs.classList.remove('gamein'); // operazione inversa della riga 13 e 14
        vs.classList.add('gameout');
        setTimeout(()=> {
            ps_winend.classList.add('gamein');
            ps_winend.classList.remove('gameout');
            ps_win_stop.textContent = "Player won the Game!";
        }, 1000);
    } else if (systemPT === 2) {
        vs.classList.remove('gamein'); // operazione inversa della riga 13 e 14
        vs.classList.add('gameout');
        setTimeout(()=> {
            ps_winend.classList.add('gamein');
            ps_winend.classList.remove('gameout');
            ps_win_stop.textContent = "System won the Game!";
        }, 1000);
};
};

    startGame();
    playvs();
};

game();