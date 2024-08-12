let markHigherBMI = false;
let raspuns = "";

//VARIANTA 1: Vadim are greutatea de 78 kg și are 1,69 m înălțime. Alex cântărește 92 kg și are 1,95 m înălțime.

const person1  = {}
person1.nume = "Vadim";
person1.masa = 78;
person1.inaltimea = 1.69;
person1.BMI = person1.masa / (person1.inaltimea ** 2);

const person2  = {}
person2.nume = "Alex";
person2.masa = 92;
person2.inaltimea = 1.95;
person2.BMI = person2.masa / (person2.inaltimea ** 2);

function higherBMI(VadimBMI ,AlexBMI)
{
    if( VadimBMI  == AlexBMI)
        {
            raspuns = " BMI Egale ";
        }
        
        if( VadimBMI > AlexBMI )
        {
            markHigherBMI = true;
            raspuns = "Da";
        }
        else 
        {
            markHigherBMI = false;
            raspuns = "Nu";
        }
        
        console.log("Vadim are un BMI mai mare decât Alex ? " + raspuns);
}

higherBMI(person1.BMI, person2.BMI);

//VARIANTA  2: Vadim are greutatea de 95 kg și are 1,88 m înălțime. Alex cântărește 85 kg și are 1,76 m înălțime.

person1.masa = 95;
person1.inaltimea = 1.88;
person1.BMI = person1.masa / (person1.inaltimea ** 2);

person2.masa = 85;
person2.inaltimea = 1.76;
person2.BMI = person2.masa / (person2.inaltimea ** 2);

higherBMI(person1.BMI, person2.BMI);