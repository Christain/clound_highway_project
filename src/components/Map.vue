<template>
    <div id="map" class="map">

    </div>
</template>

<script>
    export default {
        name: "Map",
        data() {
            return  {
                hasHighWayData: false,//是否已经加载了高速路数据
                hasCameraData: false,//是否已经加载了摄像头数据
            }
        },
        mounted() {
            this.initLoadMap()
            window.showMenuList = this.showMenuList
        },
        methods: {
            /**
             * 初始化地图加载
             */
            initLoadMap() {
                let option = {}
                option.leftClick = true
                option.leftSelfMenu = ''
                option.rightClick = false
                baseMapFun.initLoadMap("map", null, option)
            },

            /**
             * 显示高速路数据
             */
            showHighWayData() {
                if (this.hasHighWayData) {
                    this.hideOrShowHighwayLayer()
                    return
                }
                let lineDataMapOption = {}
                lineDataMapOption.lineColor = "#45B8C8"
                lineDataMapOption.lineWidth = 3
                lineDataMapOption.isHiddenMouseHoverTip = false
                lineDataMapOption.isCloseClickEvent = false
                lineDataMapOption.lineName = "G6北京段"
                mapFeatureFunc.drawContantLineDataMap("G6_Beijing", lineDataMapOption)
                lineDataMapOption.lineName = "G7北京段"
                mapFeatureFunc.drawContantLineDataMap("G7_Beijing", lineDataMapOption)
                lineDataMapOption.lineName = "G1北京段"
                mapFeatureFunc.drawContantLineDataMap("G1_Beijing", lineDataMapOption)
                lineDataMapOption.lineName = "G2北京段"
                mapFeatureFunc.drawContantLineDataMap("G2_Beijing", lineDataMapOption)
                lineDataMapOption.lineName = "G3北京段"
                mapFeatureFunc.drawContantLineDataMap("G3_Beijing", lineDataMapOption)
                lineDataMapOption.lineName = "G4北京段"
                mapFeatureFunc.drawContantLineDataMap("G4_Beijing", lineDataMapOption)
                lineDataMapOption.lineName = "G5北京段"
                mapFeatureFunc.drawContantLineDataMap("G5_Beijing", lineDataMapOption)
                lineDataMapOption.lineName = "G7河北段"
                mapFeatureFunc.drawContantLineDataMap("G7_Hebei", lineDataMapOption)

                this.hasHighWayData = true
            },

            /**
             * 显示隐藏高速路图层
             */
            hideOrShowHighwayLayer() {
                mapFeatureFunc.hideOrShowHighwayLayer()
            },

            /**
             * 显示摄像机数据
             */
            showCameraData() {
                if (this.hasCameraData) {
                    this.hideOrShowCamera(true)
                    return
                }
                var json = '[{"id":"41","imgName":"camera_on","lat":39.830816,"lng":116.514045,"name":"九如养老院","status":0,"typeId":"4"}' +
                    ',{"id":"42","imgName":"camera_on","lat":39.881180,"lng":116.273291,"name":"北京养老院","status":0,"typeId":"4"}' +
                    ',{"id":"43","imgName":"camera_on","lat":39.976577,"lng":116.386879,"name":"G6北京段1","status":0,"typeId":"4"}' +
                    ',{"id":"44","imgName":"camera_on","lat":39.755510,"lng":116.441447,"name":"G7北京段1","status":0,"typeId":"4"}' +
                    ',{"id":"45","imgName":"camera_on","lat":39.666412,"lng":116.463419,"name":"G7北京段2","status":0,"typeId":"4"}' +
                    ',{"id":"46","imgName":"camera_on","lat":40.072066,"lng":116.338381,"name":"G6北京段2","status":0,"typeId":"4"}' +
                    ',{"id":"47","imgName":"camera_on","lat":40.174330,"lng":116.260104,"name":"G6北京段3","status":0,"typeId":"4"}' +
                    ',{"id":"48","imgName":"camera_on","lat":39.885595,"lng":116.576943,"name":"G3北京段1","status":0,"typeId":"4"}]'
                baseMapFun.initLoadMarker(json)

                this.hasCameraData = true
            },

            /**
             * 隐藏显示摄像机图层
             */
            hideOrShowCamera(show) {
                let typeIdArray = new Array()
                typeIdArray.push(4)
                baseMapFun.hideOrShowLayer(typeIdArray, show, "point")
            },

            /**
             * 摄像头点击事件
             * @param id
             * @param x
             * @param y
             * @param eventArg
             * @param typeId
             * @param obj
             */
            showMenuList(id, x, y, eventArg, typeId, obj) {
                let url
                if (obj.name === '北京养老院') {
                    url = 'http://hls.xinleyou.cn/live/1/index.m3u8'
                } else if (obj.name === '九如养老院') {
                    url = 'http://hls.xinleyou.cn/live/2/index.m3u8'
                } else if (obj.name === 'G6北京段1') {
                    url = 'http://hls.xinleyou.cn/live/3/index.m3u8'
                } else if (obj.name === 'G7北京段1') {
                    url = 'http://hls.xinleyou.cn/live/4/index.m3u8'
                } else if (obj.name === 'G7北京段2') {
                    url = 'http://hls.xinleyou.cn/live/5/index.m3u8'
                } else if (obj.name === 'G6北京段2') {
                    url = 'http://hls.xinleyou.cn/live/6/index.m3u8'
                } else if (obj.name === 'G6北京段3') {
                    url = 'http://hls.xinleyou.cn/live/7/index.m3u8'
                } else if (obj.name === 'G3北京段1') {
                    url = 'http://hls.xinleyou.cn/live/8/index.m3u8'
                } else {
                    return id
                }
                url = 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'
                this.$emit("clickPoint", url, obj.name)
            }
        }
    }
</script>

<style scoped>
    .map {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>