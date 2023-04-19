class Creature{
    name: string;
    size: string;
    type: string;
    armor: {
        value: number;
        type: string;
    }
    hitpoints: number;
    speed: string;
    str: number;
    dex: number;
    con: number;
    skills: [{
        name: string;
        value: number;
    }];
    challengeRating: number;
    senses: string;
    traits:[{
        name: string;
        desc: string;
    }];
    actions:[{
        name: string;
        desc: string;
    }];

    constructor(name: string, size: string, type: string,armor: {
        value: number;
        type: string;
        },
        hitpoints: number, speed: string, str: number, dex: number, con: number, skills: [{
            name: string;
            value: number;
        }], challengeRating: number, senses: string, traits:[{
            name: string;
            desc: string;
        }],
        actions:[{
            name: string;
            desc: string;
        }]){
        this.name = name;
        this.size = size;
        this.type = type;
        this.armor = armor
        this.hitpoints = hitpoints;
        this.speed = speed;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.skills = skills;
        this.challengeRating = challengeRating
        this.senses = senses
        this.traits = traits;
        this.actions = actions;
    }
    statCalc(stat: number): string{
        if (stat % 2 !== 0){
            stat--
        }
        let number = (stat-10)/2
        if (number<=0){
            return `${number}`
        }
        else{
            return `+${number}`
        }
    }
}

export default Creature;