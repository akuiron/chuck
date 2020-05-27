let facts = [
    'Chuck Norris threw a grenade and killed 50 people, then it exploded.',
    'Chuck Norris can hear sign language.',
    'Chuck Norris knows Victoria\'s secret.',
    'Once a cobra bit Chuck Norris\' leg. After five days of excruciating pain, the cobra died.',
    'When Chuck Norris was in middle school, his English teacher assigned an essay: "What is courage?" He received an A+ for turning in a blank page with only his name at the top.',
    'Chuck Norris can kill your imaginary friends.',
    'Chuck Norris\'s daughter lost her virginity, he got it back.',
    'The reason the Holy Grail has never been recovered is because nobody is brave enough to ask Chuck Norris to give up his favourite coffee mug.',
    'Chuck Norris doesn\'t play "hide-and-seek." He plays "hide-and-pray-I-don\'t-find-you."',
    'Chuck Norris is the only person that can punch a cyclops between the eye.'
];

let b1 = document.querySelector('button');

b1.onclick = function role() {
    let color = ('#'+(Math.random()*0xFFFFFF<<0).toString(16));
    document.getElementById('facts_citation').innerHTML = facts[Math.floor(Math.random() * 10)];
    document.getElementById('facts_citation').style.color = color;
    document.getElementById('facts_author').style.color = color;
    document.getElementById('button').style.background = color;
    document.getElementById('background_color').style.background = color;
}