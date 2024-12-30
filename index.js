document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.play();
});

document.getElementById('pause-button').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.pause();
});

        $(document).ready(function() {
            var currentUrl = window.location.pathname;
            $('.lang-link').each(function() {
                var linkUrl = $(this).attr('href');
                if (linkUrl === currentUrl) {
                    $(this).addClass('active');
                }
            });
        });
