const nickNamesArr = ['A DROP OF LOVE','A MOMENT IN TIME','SANCAL','CHANDLER BING','BARON SETRAK','LIGHT OF DARKNESS','PASTOR','EAGLE PAW','FANTASTIC SOLUTION','ANGRY BEAUTIFUL','NAKIT','LEXINGTON FIRE','HIGH SPEED TRAIN','LANDLADY','HIMALAYAN','ARTS MAN','LADY ELMENDORF','PALAWAN','GOLD DESIGN','MORE THAN A GAME'];
const sexArr = ['Male', 'Female'];
const raceArr = ['Quarter', 'Arabian', 'Thoroughbred', 'Appaloosa', 'Andalusian'];
const colorArr =['Perlino', 'Sabino', 'Bay', 'Dark Bay', 'Chestnut Rabicano'];
const behavioursArr = ['Aggressive','Chatty','Farter','Goofy','Whine']


class MyRunner {

    constructor(){
        this.nickName = this.generate_nickName();
        this.sex = this.generate_sex();
        this.race = this.generate_race();
        this.color = this.generate_color();
        this.behaviour = this.generate_behaviour();
        this.speed = this.generate_speed();
        this.age = this.generate_age();
    }
    
    randomIndex(arrLength){
        return Math.floor(Math.random()* arrLength);
    }

    generate_nickName (){
        return nickNamesArr[this.randomIndex(nickNamesArr.length)];
    }

    generate_sex(){
        return sexArr[this.randomIndex(sexArr.length)];
    }

    generate_race(){
        return raceArr[this.randomIndex(raceArr.length)];
    }

    generate_color(){
        return colorArr[this.randomIndex(colorArr.length)];
    }

    generate_behaviour(){
        return behavioursArr[this.randomIndex(behavioursArr.length)];
    }

    generate_speed(){
        return Math.floor(Math.random()* (11 - 7) + 7);
    }

    generate_age(){
        return Math.floor(Math.random()* (7 - 4) + 4);
    }

    generate_message(){
        let nickName_part = '';
        let sex_part = ''; 
        let age_part = '';
        let speed_part = '';
        let race_part = '';
        let behaviour_part = '';

        
        switch (this.nickName) {
            case "A DROP OF LOVE":
            case "FANTASTIC SOLUTION":
            case "LADY ELMENDORF":
            case "LANDLADY":
            case "ANGRY BEAUTIFUL":
            case "GOLD DESIGN":
            case "A MOMENT IN TIME":
                nickName_part = `${this.nickName} is a marvel of grace.`;
            break;
            case "SANCAL":
            case "CHANDLER BING":
            case "BARON SETRAK":
            case "LIGHT OF DARKNESS":
            case "PASTOR":
            case "EAGLE PAW":
            case "NAKIT":
            case "LEXINGTON FIRE":
            case "HIGH SPEED TRAIN":
            case "HIMALAYAN":
            case "ARTS MAN":
            case "PALAWAN":
            case "MORE THAN A GAME":
                nickName_part = `Mighty ${this.nickName}, whispers of breeze.`;
            break;
        };

        switch (this.age) {
            case 4:
                age_part = 'This young';
            break;
            case 5:
                age_part = 'This bachelor';
            break;
            case 6:
                age_part = 'This old fart';
            break;
        };
        
        switch (this.sex) {
            case "Male":
                sex_part = 'gentlemen';
            break;
            case "Female":
                sex_part = 'lady';
            break;
        };

        switch (this.speed) {
            case 7, 8:
                speed_part = 'is lagging behind like a sinister priest';
            break;
            case 9, 10:
                speed_part = 'is sonic around here';
            break;
        };

        switch (this.race) {
            case "Quarter":
            case "Appaloosa":
                race_part =', yet a great breed from the land of dreams America!';
            break;
            case "Thoroughbred":
            case "Andalusian":
                race_part = ', yet has been the great protector of Europa!';
            break;
            case "Arabian":
                race_part = ', yet a Küheylan of the Middle East!';
            break;
            };

        switch (this.behaviour) {
            case "Aggressive":
                behaviour_part = 'But also, it is challenging to ride this AGGERSSIVE piece, because you are not sure whether you riding or ridden..\.';
            break;
            case "Chatty":
                behaviour_part = 'But also, very CHATTY, you might find yourselve looking at it\'s beautiful eyes all the time.';
            break;
            case "Farter":
                behaviour_part = 'But also, it is a FART machine.';
            break;
            case "Goofy":
                behaviour_part = 'But also, it is not a surprise when you find this maniac GOOFING around.';
            break;
            case "Whine":
                behaviour_part = 'But also, our delicate partner is a big WHINE and puts you in some trouble.';
            break;
            };

        

        let message = nickName_part + ' ' + age_part + ' ' + sex_part + ' ' + speed_part + race_part + ' ' + behaviour_part;
        
        return message;
    }


};
const randomHorse = new MyRunner();
console.log(randomHorse);