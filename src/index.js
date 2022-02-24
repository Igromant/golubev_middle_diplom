import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import calculator from "./modules/calculator";
import scroll from "./modules/scroll";
import valid from "./modules/valid";
import sendForm from "./modules/sendForm";
import comments from "./modules/comments";



scroll()
modal()
timer('28 Feb 2022')
calculator()
slider()
valid()
sendForm({
    idForm: ('#formActionOrder1, #formActionOrder2, #formModalAction, #formServModalAction'),
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ]
});
comments();