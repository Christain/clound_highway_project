<template>
    <div class="rootView">
        <div class="div_top"></div>
        <img class="style_logo" src="../assets/fullsee_logo.png" alt="logo"/>
        <p class="style_app_name">云高速</p>
        <div class="div_mid"></div>
        <van-form @submit="onSubmit" style="width: 100%">
            <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    maxlength="16"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    maxlength="16"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin-top: 40px; margin-left: 15px; margin-right: 15px">
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
        <div class="div_bottom"></div>
    </div>
</template>

<script>
    import {Button, Field, Form} from 'vant'

    export default {
        name: "Login",
        components: {
            [Form.name]: Form,
            [Field.name]: Field,
            [Button.name]: Button,
        },
        data() {
            return {
                username: 'xujian',
                password: 'xujian',
            }
        },
        methods: {
            onSubmit(values) {
                this.$api.login.login(values.username, values.password)
                    .then(res => {
                        this.$toast({
                            message: "登录成功",
                            duration: 1000,
                            forbidClick: true
                        })
                        this.$store.dispatch('login/actionSetToken', res.token)
                        // this.$store.commit("login/setToken", res.token)
                        localStorage.setItem('token', res.token)
                        this.$router.push('./')
                    }).catch(err => {
                    console.log(err)
                    this.$toast({
                        message: "登录失败",
                        duration: 1000,
                        forbidClick: true
                    })
                })
                console.log(values.username)
            }
        }
    }
</script>

<style scoped>
    .rootView {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #F5F5F5;
        display: flex;
        flex-direction: column;
    }

    .style_app_name {
        text-align: center;
        font-size: 20px;
        /*font-weight: bold;*/
        margin-top: 15px;
    }

    .style_logo {
        display: block;
        position: relative;
        left: 50%;
        margin-left: -50px;
        width: 100px;
        height: 100px;
        /*margin-top: 70px;*/
        /*margin-bottom: 10px;*/
    }

    .div_top {
        flex: 2;
    }

    .div_mid {
        flex: 2;
    }

    .div_bottom {
        flex: 5;
    }
</style>