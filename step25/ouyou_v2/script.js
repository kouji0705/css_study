// 開始時刻を取得
let startTime = Date.now();

function updateSeconds() {
    let currentTime = Date.now();
    let elapsedSeconds = ((currentTime - startTime) / 1000).toFixed(2);

    document.getElementById('seconds').textContent = elapsedSeconds;
    requestAnimationFrame(updateSeconds);
}

updateSeconds();