var game_rules=document.getElementById('rules')
var game_rules_cancel_btn=document.getElementById('cancel_btn')

var user_selection_container=document.getElementById('tri_rules')
var header=document.getElementById('header')
// var winner_section=document.getElementById('on_selection')

var box1=document.getElementsByClassName('box1')

var box3=document.getElementsByClassName('box3')
var box4=document.getElementsByClassName('box4')

var result=document.getElementById('result_outcome')

var comp_box1=document.getElementById('comp_box1')
var comp_box2=document.getElementById('comp_box2')
var comp_box3=document.getElementById('comp_box3')
var comp_box4=document.getElementById('comp_box4')

var user_box1=document.getElementById('user_box1')
var user_box2=document.getElementById('user_box2')
console.log(user_box2.style.backgroundColor)
var user_box3=document.getElementById('user_box3')
var user_box4=document.getElementById('user_box4')
var computer=document.getElementById('computer')

var won_game_section=document.getElementById('won_game')
var on_selection_section=document.getElementById('on_selection')

var rules_btn=document.getElementById('rules_btn')
var next_btn=document.getElementById('next_btn')

var container=document.getElementById('container')

var user_img=document.getElementById('user_img')
var computer_img=document.getElementById('computer_img')
user_img.style.width='60px'
computer_img.style.width='60px'

var against= document.getElementById('against')
// var user_score=document.getElementById('user_score')
// var computer_score=document.getElementById('computer_score')

function display_rules_and_cancel_btn(){
    game_rules.style.display='block'
    game_rules_cancel_btn.style.display='inline-block'

}

function do_not_display_rulesAndCancelBtn(){
    game_rules.style.display='none'
    game_rules_cancel_btn.style.display='none'

}

function get_random(){
    const random_list=['rock','paper','scissor']
    const randomIndex = Math.floor(Math.random() * random_list.length);

    return random_list[randomIndex];
}

function user_vs_comp(user_sel,computer_sel){
    if(user_sel=='rock'){
        if (computer_sel==='scissor'){
            return 'user'
        }
        return 'computer'
    }
    if(user_sel=='paper'){
        if (computer_sel==='rock'){
            return 'user'
        }
        return 'computer'
    }
    if(user_sel=='scissor'){
        if (computer_sel==='paper'){
            return 'user'
        }
        return 'computer'
    }
}

function change_img(user_selection,computer_selection){
    on_selection_section.style.display='flex'
    // container.style.height='100vh'
    console.log(user_selection)
    if(user_selection==='rock'){
        user_img.src="rock.png"

    }
    if(user_selection==='paper'){
        user_img.src="paper.png"

    }
    if (user_selection==='scissor'){
        user_img.src="scissor.png"

    }

    if(computer_selection==='rock'){
        computer_img.src="rock.png"

    }
    if(computer_selection==='paper'){
        computer_img.src="paper.png"

    }
    if (computer_selection==='scissor'){
        computer_img.src="scissor.png"

    }
    

}

const initial_user_value = parseInt(localStorage.getItem("user_value")) || 0;
document.getElementById("user_score").textContent = initial_user_value.toString()

const initial_comp_value = parseInt(localStorage.getItem("comp_value")) || 0;
document.getElementById("computer_score").textContent = initial_comp_value.toString()

localStorage.setItem("CompScore", computer_score.getItem)
localStorage.setItem("userScore", user_score.getItem)

function change_score(flag){
    if(flag){
        let value = parseInt(localStorage.getItem("user_value")) || 0;
        value++;
        document.getElementById("user_score").textContent = value;
        localStorage.setItem("user_value", value.toString());
    }
    else{
        let value1 = parseInt(localStorage.getItem("comp_value")) || 0;
        value1++;
        document.getElementById("computer_score").textContent = value1;
        localStorage.setItem("comp_value", value1.toString());

    }
}

function tie_game(user_selection,computer_selection){

    change_img(user_selection,computer_selection)

    for(let i=0;i<box1.length;i++){
        box1[i].style.backgroundColor="#8CC461";
    }
    for(let i=0;i<box3.length;i++){
        box3[i].style.backgroundColor='#8CC461'
    }
    for(let i=0;i<box4.length;i++){
        box4[i].style.backgroundColor="#8CC461"
    }

    computer.style.backgroundColor="#8CC461"

    result.innerHTML='Game Tied'
    against.innerHTML=''
    user_box2.style.backgroundColor='#0074B6'
    comp_box2.style.backgroundColor='#0074B6'





}

function user_won(user_selection,computer_selection){
    
    change_img(user_selection,computer_selection)
    comp_box1.style.backgroundColor= '#8CC461'
    comp_box3.style.backgroundColor='#8CC461'
    comp_box4.style.backgroundColor='#8CC461'
    // container.style.height='100vh'

    next_btn.style.display='inline-block'
    

    result.innerHTML='You Win'
    against.innerHTML='Against PC'
    user_box2.style.backgroundColor='#BD00FF'
    comp_box2.style.backgroundColor='#FFA943'

    change_score(1)

}

function comp_won(user_selection,computer_selection){
    change_img(user_selection,computer_selection)
    user_box1.style.backgroundColor='#8CC461'
    user_box3.style.backgroundColor='#8CC461'
    user_box4.style.backgroundColor='#8CC461'

    result.innerHTML='You lost'
    against.innerHTML='Against You'
    user_box2.style.backgroundColor='#FFA943'
    comp_box2.style.backgroundColor='#BD00FF'
    change_score(0)

}

function next(){
    on_selection_section.style.display='none'
    user_selection_container.style.display='none'
    won_game_section.style.display='block'
    header.style.display='none'
    next_btn.style.display='none'
    container.style.height='100vh'

    

}

function reset_default(flag){

    if (flag==1){
        won_game_section.style.display='none'
    }
    on_selection_section.style.display='none'
    user_selection_container.style.display='flex'
    header.style.display='flex'
    


    for(let i=0;i<box1.length;i++){
        box1[i].style.backgroundColor='#66b032'
    }
    for(let i=0;i<box3.length;i++){
        box3[i].style.backgroundColor='#50c878'
    }
    for(let i=0;i<box4.length;i++){
        box4[i].style.backgroundColor='#7EE87E'
    }
    container.style.height='70vh'

}

function game(user_selection){
    user_selection_container.style.display='none'
    // header.style.display='none'
    
    console.log(user_selection)
    var computer_selection=get_random()
    console.log(computer_selection)
    if (user_selection===computer_selection){
        tie_game(user_selection,computer_selection)

    }
    else{
        var game_winner=user_vs_comp(user_selection,computer_selection)
        console.log(game_winner)
        if (game_winner==='user'){
            user_won(user_selection,computer_selection)
        }
        else{
            comp_won(user_selection,computer_selection)
        }
    }
}