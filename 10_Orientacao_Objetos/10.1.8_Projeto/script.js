class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 120;
        this.attack = 16;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logEl) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = new Log(logEl);
    }

    start() {
        this.update();

        // Botões de ataque
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        // Atualiza nome
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name;
        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name;

        // Atualiza barra de vida
        this.fighter1El.querySelector('.bar').style.width = `${(this.fighter1.life / this.fighter1.maxLife) * 100}%`;
        this.fighter2El.querySelector('.bar').style.width = `${(this.fighter2.life / this.fighter2.maxLife) * 100}%`;

        // Atualiza cor da barra (opcional)
        this.fighter1El.querySelector('.bar').style.background = '#0f0';
        this.fighter2El.querySelector('.bar').style.background = '#f00';
    }

    doAttack(attacker, defender) {
        if (attacker.life <= 0 || defender.life <= 0) {
            this.log.addMessage('Alguém já está morto!');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacker.attack * attackFactor;
        const actualDefense = defender.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            let damage = actualAttack - actualDefense;
            defender.life -= damage;
            this.log.addMessage(`${attacker.name} causou ${damage.toFixed(2)} de dano em ${defender.name}`);
        } else {
            this.log.addMessage(`${defender.name} defendeu o ataque de ${attacker.name}`);
        }

        this.update();
    }
}

class Log {
    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        let li = document.createElement('li');
        li.innerText = msg;
        this.listEl.appendChild(li);
    }
}

// Execução do Script
let char = new Knight("Jogador");
let monster = new LittleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    document.querySelector(".log")
);

stage.start();