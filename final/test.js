var namelist =
    "八角,列當,大青,天草,山菊,月桃,杜鵑,番杏,秋葵,竊衣,紅皮,紫珠,絲瓜,羊蹄,薯蕷,薯豆,酸模,野桐,風藤,香蕉,鼠刺,九節木,假菝葜,冷清草,刀傷草,南國薊,地耳草,地錢草,夏枯草,大還魂,大頭茶,小海米,山林頭,山櫻花,山螞蝗,岩大戟,昆蘭樹,木防巳,束心蘭,松葉蕨,桔梗蘭,濱旋花,濱蘿蔔,濱防風,烏來栲,烏心石,無心菜,無根藤,牛皮消,瓜子金,白匏子,白背樹,石板菜,稜果榕,米飯花,老金藤,臭黃荊,菊花木,藤花椒,變葉藜,雙面刺,雞屎樹,雞眼草,青剛櫟,食茱萸,鵝掌柴,三葉五家,倒地蜈蚣,假吐金菊,呂宋莢蒾,基隆澤蘭,基隆葡萄,墨點櫻桃,大瓜垂草,密毛蕨床,日本前胡,枝狀地衣,濱剪刀股,琉球女楨,短柱山茶,箭葉菫菜,紅毛杜鵑,細梗絡實,銳葉牽牛,厚葉石斑木,台灣牛嬭菜,台灣牛皮消,台灣胡頹子,大頭艾納香,小葉黃鱔藤,斯氏懸鉤子,榿葉懸鉤子,森氏紅淡比,橢圓葉赤楠,爪哇婆婆納,琉球豬殃殃,疏花佛甲草,矮行光莖草,細葉剪刀股,細葉饅頭果,絨毛芙蓉蘭,芒穗鴨嘴草,茅毛珍珠菜,蓬萊珍珠菜,裂葉月見草,裏白鼠麴草,角花烏蘞莓,鄧氏胡頹子,雙花蟛蜞菊,台北玉葉金花,小傅氏鳳尾蕨,粗莖麝香百合,翅果假吐金菊";
var list = namelist.split(",");
var photolist = [];

for (i = 0; i < 116; i++) {
    var listnum = `photo/${list[i]}.PNG`
    photolist[i] = listnum
}

function random(n) {
    return Math.floor(Math.random() * n)
}

function ans() {
    return list[random(list.length)];
}

function Q(s) {
    if (isSwap.checked)
        return s.split("=")[1];
    else
        return s.split("=")[0];
}

function A(s) {
    if (isSwap.checked)
        return s.split("=")[0];
    else
        return s.split("=")[1];
}

var question = null,
    answers = [],
    choice = null,
    q = null,
    msg = null;
var correct = 0,
    wrong = 0,
    isChecked = false;

function load() {
    question = document.getElementById("question");
    answers = [];
    answers[1] = document.getElementById("answer1");
    answers[2] = document.getElementById("answer2");
    answers[3] = document.getElementById("answer3");
    answers[4] = document.getElementById("answer4");
    choice = document.getElementById("choice");
    msg = document.getElementById("msg");
    countMag = document.getElementById("countMsg");
    isAudio = document.getElementById("isAudio");
    isSwap = document.getElementById("isSwap");
}

function chooseA(obj) {
    choice.innerHTML = obj.innerHTML;
}

function test() {
    isChecked = false;
    choice.innerHTML = "?";
    msg.innerHTML = "";
    q = selectQA();
    question.innerHTML = Q(q);
    answer = A(q);
    if (isSwap.checked) {
        audioControlQ.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=zh&q=' + Q(q);
        audioControlA.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=' + A(q);
    } else {
        audioControlQ.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=' + Q(q);
        audioControlA.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=zh&q=' + A(q);
    }
    var set = {};
    set[q] = "";
    for (i = 1; i <= 4;) {
        a = selectQA();
        answers[i].innerHTML = A(a);
        if (set[a] == "") continue;
        else i++;
        set[a] = "";
    }
    answers[1 + rand(4)].innerHTML = A(q);
}

function check() {
    if (isAudio.checked) {
        if (choice.innerHTML != A(q)) {
            setTimeout(function() {
                playAudio('audio_error');
            }, 1000);
        } else {
            setTimeout(function() {
                playAudio('audio_correct');
            }, 1000);
        }
        setTimeout(function() {
            playAudio('audio');
        }, 3000);
        setTimeout(function() {
            playAudio('audio_zh');
        }, 4000);
    }
    if (isChecked) return (choice.innerHTML == A(q));
    isChecked = true;
    if (choice.innerHTML == A(q)) {
        msg.innerHTML = "答對了！" + Q(q) + "=" + A(q);
        correct++;
    } else {
        msg.innerHTML = "答錯了！" + Q(q) + "=" + A(q) + "，請更正！";
        wrong++;
    }
    countMsg.innerHTML = "答對 " + correct + " 題，答錯 " + wrong + " 題！";
    return (choice.innerHTML == A(q));
}

function pass() {
    if (check()) {
        if (isAudio.checked)
            passDelay = 6000;
        else
            passDelay = 0;
        setTimeout(function() {
            test();
        }, passDelay);
    }
}

function playAudio(name) {
    document.getElementById(name).play();
}