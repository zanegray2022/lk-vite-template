// rem.js
function setRem() {
    const deviceWidth = document.documentElement.clientWidth;
    const baseWidth = 375; // 移动端设计稿宽度
    const baseFontSize = 100; // 基准字体大小
    document.documentElement.style.fontSize = `${(deviceWidth / baseWidth) * baseFontSize}px`;
}

setRem();
window.addEventListener('resize', setRem);
