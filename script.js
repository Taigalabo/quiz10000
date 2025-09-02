// 各問題の複数のパターンを二次元配列で定義します。
const questionPatterns = [
    [
        "高原地域は北海道に似た気候な一方、盆地部は夏の暑さが顕著であるなど、8割を山岳地が占めているため気候の地域差も大きい、ミネラルウォーターの生産量一位の都道府県はどこ？",
        "高原地域は北海道に似た気候な一方、盆地部では夏期に猛暑日を記録することもある、大部分を飛騨山脈をはじめとする山岳地帯で構成される都道府県はどこ？",
        "旧暦の月の異名である、「夢見月」を苗字とする、夢喰い獏の心理療法士は誰？",
        "旧暦の月の異名である、「師走」とは、何月を指す言葉？"
    ],
    [
        "記憶を保ちやすくするために、「七二三四、七二三四…」と自分の名前も交えて数を数える待機ボイスがある、原神のキャラクターは誰？",
        "記憶を保ちやすくするために、長い文章などを覚える際に、小さな単位・まとまりに分割することを何化という？",
        "日本一でない時期もあった、関連する文化財群とともに世界文化遺産に登録された日本一高い山は？",
        "日本一でない時期もあったが、小笠原諸島復帰により再度日本最南端になった島は？"
    ],
    [
        "基本的に麺を野菜と共に味噌仕立ての汁で煮込む、山梨県の郷土料理は何？",
        "基本的に麺を野菜と共に味噌や醤油仕立ての汁で煮込む郷土料理「おきりこみ」がある都道府県はどこ？",
        "本一冊の始まりから終わりまでという意味から転じて、全部という意味を持つようになった四字熟語は？",
        "本一冊の始まりから終わりまでの長さはユネスコで49ページ以上と定義されているが、小冊子は何ページ以上と定義されている？"
    ],
    [
        "効果で攻撃力を大幅に上げられる、狼と騎士との絆がこの剣に力を与えたとされる、恒常星5両手剣は何？",
        "効果で攻撃力を大幅に上げられるほか、弱点撃破後に与ダメージが上昇する、ヘルタショップで購入可能な壊滅光円錐は？",
        "今回の合宿のしおりに原石はいくつありますか？",
        "今回の合宿のしおりに最も多くいるキャラは誰？"
    ]
];

// 各問題の現在表示しているパターンのインデックスを追跡します。
const currentPatternIndexes = [0, 0, 0, 0];

// 問題文を表示するHTML要素を取得します。
const questionElements = [
    document.getElementById('q1'),
    document.getElementById('q2'),
    document.getElementById('q3'),
    document.getElementById('q4')
];

// 現在表示されている文字の数を追跡します。初期値は1です。
let currentCharIndex = 1;

// すべての問題文のパターンの中で最も短いものの長さを計算します。
function getMinLength() {
    let minLen = Infinity;
    for (let i = 0; i < questionPatterns.length; i++) {
        const currentPatternText = questionPatterns[i][currentPatternIndexes[i]];
        if (currentPatternText.length < minLen) {
            minLen = currentPatternText.length;
        }
    }
    return minLen;
}

// すべての問題の表示を更新する関数です。
function updateQuestions() {
    for (let i = 0; i < questionPatterns.length; i++) {
        const currentText = questionPatterns[i][currentPatternIndexes[i]];
        questionElements[i].textContent = currentText.substring(0, currentCharIndex);
    }
}

// 各問題の「＋」ボタンがクリックされたときに実行される関数です。
function nextQuestionPattern(questionIndex) {
    const totalPatterns = questionPatterns[questionIndex].length;
    // 次のパターンにインデックスを進めます。最後のパターンなら0に戻します。
    currentPatternIndexes[questionIndex] = (currentPatternIndexes[questionIndex] + 1) % totalPatterns;
    
    // パターンを切り替えたら、現在の文字数に合わせて表示を更新します。
    updateQuestions();
}

// 「進む」ボタンがクリックされたときに実行される関数です。
function forward() {
    if (currentCharIndex < getMinLength()) {
        currentCharIndex++;
        updateQuestions();
    }
}

// 「戻る」ボタンがクリックされたときに実行される関数です。
function backward() {
    if (currentCharIndex > 1) {
        currentCharIndex--;
        updateQuestions();
    }
}

// ページが読み込まれたときに、最初の1文字を表示します。
updateQuestions();

