document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.play();
});

document.getElementById('pause-button').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.pause();
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleAsideButton = document.getElementById('toggle-aside');
    const closeAsideButton = document.getElementById('close-aside');
    const sidebar = document.getElementById('sidebar');

    toggleAsideButton.addEventListener('click', function() {
        sidebar.style.display = 'block'; // 사이드바 표시
        toggleAsideButton.style.display = 'none'; // 열기 버튼 숨김
    });

    closeAsideButton.addEventListener('click', function() {
        sidebar.style.display = 'none'; // 사이드바 숨김
        toggleAsideButton.style.display = 'block'; // 열기 버튼 표시
    });
});