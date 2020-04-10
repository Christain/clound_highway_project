<template>
    <div class="control">
        <div>
            <img :src="imgHighWay" @click="clickHighWay">
        </div>
        <div>
            <img :src="imgCamera" @click="clickCamera">
        </div>
        <div>
            <img :src="imgLocation" @click="clickLocation">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Control",
        data() {
            return {
                imgHighWay: require("../../public/highway_normal.png"),
                imgCamera: require("../../public/camera_normal.png"),
                imgLocation: require("../../public/location_normal.png"),
                isShowHighWay: false,//是否显示高速路
                isShowCamera: false,//是否显示摄像头
                isShowLocation: false,//是否显示定位
            }
        },
        methods: {
            /**
             * 点击高速路控制按钮
             */
            clickHighWay() {
                if (this.isShowHighWay) {
                    this.imgHighWay = require("../../public/highway_normal.png")
                    this.isShowHighWay = false
                } else {
                    this.imgHighWay = require("../../public/highway_selected.png")
                    this.isShowHighWay = true
                }
                this.$emit("clickHighWay", this.isShowHighWay)
            },

            /**
             * 点击摄像头控制按钮
             */
            clickCamera() {
                if (this.isShowCamera) {
                    this.imgCamera = require("../../public/camera_normal.png")
                    this.isShowCamera = false
                } else {
                    this.imgCamera = require("../../public/camera_selected.png")
                    this.isShowCamera = true
                }
                this.$emit("clickCamera", this.isShowCamera)
            },

            /**
             * 点击定位控制按钮
             */
            clickLocation() {
                if (this.isShowLocation) {
                    this.imgLocation = require("../../public/location_normal.png")
                    this.isShowLocation = false
                } else {
                    this.imgLocation = require("../../public/location_selected.png")
                    this.isShowLocation = true
                }
            }
        }
    }
</script>

<style scoped>
    img {
        width: 45px;
        height: 45px;
    }

    .control {
        visibility: visible;
        right: 0;
        width: fit-content;
        display: block;
        position: absolute;
        padding: 0;
        margin-top: 15px;
        margin-right: 10px;
    }
</style>