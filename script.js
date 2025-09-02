// ボタンがクリックされたときに実行される関数
function loadTable() {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector("#dataTable tbody");
            const tableBody2 = document.querySelector("#dataTable2 tbody");
            tableBody.innerHTML = ""; // テーブルの中身をクリア
            tableBody2.innerHTML = "";
            // キャラクターをランダムに選択
            const characters = data.characters;
            const selectedCharacters = [];
            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(
                    Math.random() * characters.length
                );
                selectedCharacters.push(characters[randomIndex]);
                characters.splice(randomIndex, 1); // 選択されたキャラクターをリストから削除
            }

            // ボスをランダムに選択
            const bosses = data.bosses;
            const randomBossIndex = Math.floor(Math.random() * bosses.length);
            const selectedBoss = bosses[randomBossIndex];

            // ボスをランダムに選択
            const sibari = data.sibari;
            const randomsibariIndex = Math.floor(Math.random() * sibari.length);
            const selectedsibari = sibari[randomsibariIndex];

            // 選択されたキャラクターとボスをテーブルに挿入
            let count = 1;
            selectedCharacters.forEach((character) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${count++}P</td>
                    <td>${character}</td>
                `;
                tableBody.appendChild(row);
            });

            const sibariRow = document.createElement("tr");
            sibariRow.innerHTML = `
                <td>全員</td>
                <td>${selectedsibari}</td>
            `;
            tableBody2.appendChild(sibariRow);
        const bossRow = document.createElement("tr");
            bossRow.innerHTML = `
                <td>ボス</td>
                <td>${selectedBoss}</td>
            `;
            tableBody.appendChild(bossRow);
        })
        .catch((error) => console.error("Error fetching JSON:", error));
}

// HTMLが読み込まれたときに実行される初期化関数
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".executer");
    btn.addEventListener("click", loadTable);
    loadTable();
});
