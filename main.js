"use strict";
let questions = ["ًWhich is largest animal in the world",
    "Which is the smallest country in the world",
    "Which is largest desert in the world ",
    "Which is the smallest continent in the world"];
let buttons = document.querySelectorAll(".ans");
let n = document.getElementById("next");
console.log(buttons);
let question_cont = document.getElementById("question");
class question {
    constructor(questiontext, answers, right_answer) {
        this.questiontext = questiontext;
        this.answers = answers;
        this.right_answer = right_answer;
        this.questiontext = questiontext;
        this.answers = answers;
        this.right_answer = right_answer;
    }
    show_answers() {
        for (var i = 0; i < this.answers.length; i++) {
            buttons[i].innerHTML = this.answers[i];
        }
    }
    put_question(i) {
        question_cont.innerHTML = `${i} - ${this.questiontext}`;
    }
    right_button() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].innerHTML == this.right_answer)
                return i;
        }
        return -1;
    }
}
let questions_div = [new question(questions[0], ["Shark", "Blue Whale", "Elephant", "Giraffe"], "Blue Whale"),
    new question(questions[1], ["Vatican City", "Bhutan", "Nepal", "Shri lanka"], "Vatican City"),
    new question(questions[2], ["Kalahari", "Gobi", "Sahara", "Antarctica"], "Antarctica"),
    new question(questions[3], ["Asia", "Australia", "Europe", "Africa"], "Australia")];
let count = 0, r_ans = 0;
;
let f = false, f2 = false, flag = false;
if (!f) {
    questions_div[count].put_question(count + 1);
    questions_div[count].show_answers();
    count++;
    f = true;
}
function Next() {
    if (count == 4)
        score();
    else {
        if (flag) {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("hidden");
            }
            count = 0;
            f = false;
            f2 = false;
            r_ans = 0;
            n.innerHTML = "Next";
            flag = false;
        }
        f2 = false;
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains("right"))
                buttons[i].classList.remove("right");
            else if (buttons[i].classList.contains("wrong"))
                buttons[i].classList.remove("wrong");
        }
        questions_div[count].put_question(count + 1);
        questions_div[count].show_answers();
        count++;
    }
}
function Check(i) {
    if (!f2) {
        let ans = buttons[i].innerHTML;
        if (ans == questions_div[count - 1].right_answer) {
            buttons[i].classList.add("right");
            r_ans++;
        }
        else {
            buttons[i].classList.add("wrong");
            buttons[questions_div[count - 1].right_button()].classList.add("right");
        }
        f2 = true;
    }
}
function score() {
    question_cont.innerHTML = `You Scored ${r_ans} out of 4!`;
    n.innerHTML = "Play Again";
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("hidden");
    }
    flag = true;
    count = 0;
}
//# sourceMappingURL=main.js.map