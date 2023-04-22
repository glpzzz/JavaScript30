document.addEventListener('alpine:init', () => {
    Alpine.data('player', () => ({

        // values
        currentTime: 0,
        currentProgressPercent: 0,
        status: false,
        volume: 1,
        playbackRate: 1,
        isProgressPressed: false,

        init() {
            const video = this.$refs.video;

            this.$watch('status', (value) => {
                if (value) {
                    video.play();
                } else {
                    video.pause();
                }
            });

            this.$watch('volume', (value) => {
                video.volume = value;
            });

            this.$watch('playbackRate', (value) => {
                video.playbackRate = value;
            });

        },

        skip(value) {
            this.$refs.video.currentTime += value;
        },

        onProgressClick(e){
            this.$refs.video.currentTime = e.offsetX / this.$refs.progress.offsetWidth * this.$refs.video.duration;
        }

    }));
});