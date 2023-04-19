"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Creature = /** @class */ (function () {
    function Creature(name, size, type, armor, hitpoints, speed, str, dex, con, skills, challengeRating, senses, traits, actions) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.armor.value = armor.value;
        this.armor.type = armor.type;
        this.hitpoints = hitpoints;
        this.speed = speed;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.skills = skills;
        this.challengeRating = challengeRating;
        this.senses = senses;
        this.traits = traits;
        this.actions = actions;
    }
    Creature.prototype.statCalc = function (stat) {
        if (stat % 2 !== 0) {
            stat--;
        }
        var number = (stat - 10) / 2;
        if (number <= 0) {
            return "".concat(number);
        }
        else {
            return "+".concat(number);
        }
    };
    return Creature;
}());
exports.default = Creature;
