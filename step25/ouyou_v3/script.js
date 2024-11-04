// 開始時刻を取得
let startTime = Date.now();

function updateYears() {
    let currentTime = Date.now();
    let elapsedSeconds = (currentTime - startTime) / 1000;
    let elapsedYears = (elapsedSeconds / 10).toFixed(2); // 地球の公転周期を10秒と設定

    document.getElementById('years').textContent = elapsedYears;
    requestAnimationFrame(updateYears);
}

updateYears();