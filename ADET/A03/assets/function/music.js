document.addEventListener('DOMContentLoaded', () => {
    const setupNavbarCollapse = () => {
        const navbarCollapse = document.querySelector('#navbarContent');
        const navbarToggler = document.querySelector('.navbar-toggler');

        if (!navbarCollapse || !navbarToggler) {
            console.warn('Navbar elements not found.');
            return;
        }

        document.addEventListener('click', (event) => {
            const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

            if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        });
    };

    // audio player functionality
    const setupAudioPlayers = () => {
        const players = document.querySelectorAll('.player-container');

        if (!players.length) {
            console.warn('No audio players found.');
            return;
        }

        players.forEach(player => {
            const audio = player.querySelector('.audio-player');
            const playButton = player.querySelector('.play-button');
            const timestamp = player.querySelector('.timestamp');
            const progressBar = player.querySelector('.progress-bar');
            const progress = player.querySelector('.progress');

            if (!audio || !playButton || !timestamp || !progressBar || !progress) {
                console.warn('Missing audio player elements in:', player);
                return;
            }

            // Format time 
            const formatTime = (seconds) => {
                if (isNaN(seconds) || seconds === Infinity) return '0:00';
                const minutes = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
            };

            // timestamp and progress
            audio.addEventListener('loadedmetadata', () => {
                timestamp.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
            });

            // Update timestamp and progress bar during playback
            audio.addEventListener('timeupdate', () => {
                const currentTime = audio.currentTime;
                const duration = audio.duration || 0;
                const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
                progress.style.width = `${progressPercent}%`;
                timestamp.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
            });

            // Handle errors
            audio.addEventListener('error', () => {
                console.error('Error loading audio:', audio.src);
                timestamp.textContent = 'Error';
                playButton.classList.add('disabled');
            });

            // Play/pause toggle
            playButton.addEventListener('click', () => {
                if (audio.paused) {
                    // Pause all other playing audio
                    document.querySelectorAll('.audio-player').forEach(otherAudio => {
                        if (otherAudio !== audio && !otherAudio.paused) {
                            otherAudio.pause();
                            const otherPlayButton = otherAudio.closest('.player-container').querySelector('.play-button');
                            if (otherPlayButton) {
                                otherPlayButton.classList.remove('fa-pause');
                                otherPlayButton.classList.add('fa-play');
                            }
                        }
                    });

                    audio.play().catch(err => {
                        console.error('Error playing audio:', err);
                    });
                    playButton.classList.remove('fa-play');
                    playButton.classList.add('fa-pause');
                } else {
                    audio.pause();
                    playButton.classList.remove('fa-pause');
                    playButton.classList.add('fa-play');
                }
            });

            progressBar.addEventListener('click', (e) => {
                const rect = progressBar.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const width = rect.width;
                const seekPercent = clickX / width;
                audio.currentTime = seekPercent * audio.duration;
            });
        });
    };

    // Initialize 
    setupNavbarCollapse();
    setupAudioPlayers();
});