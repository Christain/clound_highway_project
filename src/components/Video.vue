<template>
    <div>
        <div v-show="isShow" class="videoContainer">
            <div class="videoNameContainer">
                <img src="../../public/location_point.png" alt="定位图标" style="width: 22px;padding-left: 10px">
                <span id="videoName" class="videoName" v-text="videoName"></span>
                <img src="../../public/close.png" alt="关闭" style="width: 16px;height: 16px;padding-right: 12px"
                     @click="closeVideo()"/>
            </div>
            <video id="myvideo"
                   class="video-js vjs-default-skin vjs-big-play-centered vjs-fluid vjs-16-9"
                   autoplay="autoplay"
                   controls="controls"
                   preload="metadata"
                   x-webkit-airplay="true"
                   x5-playsinline="true"
                   x5-video-player-type="h5-page"
                   webkit-playsinline
                   playsinline
                   muted="muted"
                   poster="">
            </video>
        </div>
    </div>
</template>

<script>
    import Video from 'video.js'
    import 'videojs-contrib-hls'
    import 'video.js/dist/video-js.css'
    import '../style/video.css'

    export default {
        name: "Video",
        data() {
            return {
                isShow: false,
                videoUrl: '',
                currentUrl: '',
                videoName: '',
                player: null,
            }
        },
        created() {

        },
        mounted() {
            let myvideo = document.getElementById("myvideo");
            myvideo.addEventListener("x5videoenterfullscreen", function () {

            })
            myvideo.addEventListener("x5videoexitfullscreen", this.play)
            this.initPlayer()
        },
        beforeDestroy: function () {
            let video = document.getElementById("myvideo")
            video.removeEventListener("x5videoenterfullscreen", null)
            video.removeEventListener("x5videoexitfullscreen", null)
            if (this.player != null) {
                this.player.dispose();
            }
        },
        methods: {
            initPlayer() {
                if (this.player != null) return
                this.player = Video('myvideo', {
                    bigPlayButton: true,
                    textTrackDisplay: true,
                    posterImage: true,
                    errorDisplay: false,
                    controlBar: false,
                    ControlBar: {
                        customControlSpacer: true,
                        volumePanel: false
                    },
                    autoplay: true,
                    controls: true,
                });
            },
            play() {
                if (this.player == null) return
                this.player.play()
            },
            videoPlay(videoUrl, videoName) {
                if (this.currentUrl === videoUrl) return
                this.currentUrl = videoUrl
                this.videoUrl = videoUrl
                this.videoName = videoName
                this.player.src({type: "application/x-mpegURL", src: this.videoUrl})
                this.player.show()
                this.isShow = true
            },
            closeVideo() {
                if (this.player != null) {
                    this.player.pause()
                    this.player.hide()
                }
                this.currentUrl = ''
                this.isShow = false
            },
        }
    }
</script>

<style scoped>
    .videoContainer {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0;
        margin: 0;
    }

    .videoNameContainer {
        display: flex;
        width: 100%;
        height: 45px;
        align-items: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: #FFFFFF;
    }

    .videoName {
        display: block;
        color: #333333;
        font-size: 15px;
        padding-left: 8px;
        padding-right: 5px;
        flex: 1;
        text-align: left;
        vertical-align: center;
        line-height: 18px;
        height: fit-content;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>