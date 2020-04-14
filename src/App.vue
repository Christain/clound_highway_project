<template>
    <div id="app">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->
        <!--    <router-view/>-->
        <Map ref="map" @clickPoint="clickPoint"></Map>
        <Control @clickHighWay="clickHighWay" @clickCamera="clickCamera"></Control>
        <Video ref="video"></Video>
    </div>
</template>

<script>
    import Map from "./components/Map";
    import Control from "./components/Control";
    import Video from "./components/Video";

    export default {
        components: {Video, Control, Map},
        data() {
            return {}
        },
        mounted() {
            this.$api.login.login('xujian', 'xujian')
                .then(res => {
                    console.log(res)
                    this.$toast({
                        message: "登录成功",
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

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>