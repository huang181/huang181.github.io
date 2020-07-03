var namelist =
    "八角,列當,天草,山菊,番杏,秋葵,竊衣,紫珠,絲瓜,羊蹄,薯蕷,酸模,野桐,風藤,香蕉,九節木,假菝葜,刀傷草,南國薊,地錢草,夏枯草,大還魂,小海米,山林頭,岩大戟,昆蘭樹,木防巳,束心蘭,桔梗蘭,濱旋花,濱蘿蔔,濱防風,烏來栲,烏心石,無心菜,無根藤,牛皮消,瓜子金,白背樹,石板菜,稜果榕,米飯花,老金藤,臭黃荊,變葉藜,雙面刺,雞屎樹,雞眼草,青剛櫟,食茱萸,三葉五家,倒地蜈蚣,假吐金菊,基隆澤蘭,基隆葡萄,大瓜垂草,密毛蕨床,日本前胡,濱剪刀股,琉球女楨,短柱山茶,箭葉菫菜,紅毛杜鵑,細梗絡實,銳葉牽牛,厚葉石斑木,台灣牛皮消,台灣胡頹子,小葉黃鱔藤,斯氏懸鉤子,橢圓葉赤楠,爪哇婆婆納,琉球豬殃殃,疏花佛甲草,矮行光莖草,細葉剪刀股,細葉饅頭果,絨毛芙蓉蘭,芒穗鴨嘴草,茅毛珍珠菜,蓬萊珍珠菜,裂葉月見草,角花烏蘞莓,雙花蟛蜞菊,台北玉葉金花,小傅氏鳳尾蕨,粗莖麝香百合,翅果假吐金菊";
var list = namelist.split(",");

function random(n) {
    return Math.floor(Math.random() * n)
}

function Q() {
    return list[random(list.length)];
}

var questpic = null,
    Qwers = [],
    choice = null,
    q = null;
var correct = 0,
    wrong = 0,
    isChecked = false;

function load() {
    questpic = document.getElementById("questpic");
    answers = [];
    answers[1] = document.getElementById("answer1");
    answers[2] = document.getElementById("answer2");
    answers[3] = document.getElementById("answer3");
    answers[4] = document.getElementById("answer4");
    choice = document.getElementById("choice");
    countMag = document.getElementById("countMsg");
}

function chooseA(obj) {
    choice.innerHTML = obj.innerHTML;
}

function test() {
    choice.innerHTML = "?";
    q = Q();
    questpic.src = `/photo/${q}.PNG`;
    var set = {};
    for (i = 1; i <= 4;) {
        a = Q();
        answers[i].innerHTML = a;
        i++;

    }
    answers[1 + random(4)].innerHTML = q;
}

function check() {
    if (choice.innerHTML == q) {
        msg.innerHTML = "答對了！";
        correct++;
    } else {
        msg.innerHTML = "答錯了！答案是" + q;
        wrong++;
    }
    var all = correct + wrong;
    countMsg.innerHTML = `共 ${all}${` 題。答對：${correct}${` 題、答錯：${wrong} 題`}`}`;
    return (choice.innerHTML == q);
}
