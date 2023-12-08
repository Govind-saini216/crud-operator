import Chance from "chance";

const chance = Chance();

export const fakedatauser = () => {

    return chance.name({middle:true});

}