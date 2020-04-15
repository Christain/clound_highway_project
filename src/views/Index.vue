<template>
    <div>
        <Map ref="map" @clickPoint="clickPoint"></Map>
        <Control @clickHighWay="clickHighWay" @clickCamera="clickCamera"></Control>
        <Video ref="video"></Video>
    </div>
</template>

<script>
    import Map from "../components/Map";
    import Control from "../components/Control";
    import Video from "../components/Video";

    export default {
        components: {Video, Control, Map},
        data() {
            return {}
        },
        mounted() {
            this.$api.login.getUserInfo()
                .then(res => {
                    console.log(res)
                    this.$toast({
                        message: res.name,
                        duration: 1000,
                        forbidClick: true
                    })
                }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            clickHighWay(isShowHighWay) {
                if (isShowHighWay) {
                    this.$refs.map.showHighWayData()
                } else {
                    this.$refs.map.hideOrShowHighwayLayer()
                }
            },
            clickCamera(isShowCamera) {
                if (isShowCamera) {
                    this.$refs.map.showCameraData()
                } else {
                    this.$refs.map.hideOrShowCamera()
                }
            },
            clickPoint(videoUrl, videoName) {
                this.$refs.video.videoPlay(videoUrl, videoName)
            }
        }
    }
</script>

<style scoped>

</style>