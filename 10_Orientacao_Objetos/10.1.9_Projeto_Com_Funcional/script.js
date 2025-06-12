const defaultCharacter = {
    name: "",
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name, 
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: "Little Monster",
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 5
    }
}

const createBigMonster = () => {
    return{
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

// Sistema de Log
const log = {
    list: [],
    add(message) {
        this.list.push(message);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for (let m of this.list.slice(-10)) {
            let li = document.createElement('li');
            li.innerText = m;
            logEl.appendChild(li);
        }
    }
}

// Criando o Cenario do Jogo
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter1, this.fighter2);
        });
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter2, this.fighter1);
        });

        this.update();
    },

    update() {
        // Atualiza os dados do personagem 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        // Atualiza os dados do personagem 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacker, defender) {
        if (attacker.life <= 0 || defender.life <= 0) {
            log.add("O jogo acabou!");
            return;
        }

        const attackFactor = Math.random() * 2;
        const defenseFactor = Math.random() * 2;

        const actualAttack = attacker.attack * attackFactor;
        const actualDefense = defender.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            let damage = actualAttack - actualDefense;
            defender.life -= damage;
            if (defender.life < 0) defender.life = 0;
            log.add(`${attacker.name} causou ${damage.toFixed(2)} de dano em ${defender.name}`);
        } else {
            log.add(`${defender.name} defendeu o ataque de ${attacker.name}!`);
        }

        this.update();

        if (defender.life <= 0) {
            log.add(`${attacker.name} venceu a batalha!`);
        }
    }
}

// Inicialização do jogo
const knight = createKnight("Arus");
const monster = createBigMonster();

stage.start(
    knight,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);