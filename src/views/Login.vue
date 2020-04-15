<template>
    <div class="rootView">
        <div>
            <span class="title">云高速</span>
        </div>

            <div><img class="logo" src="../assets/logo.png" alt="logo"/></div>

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
            <div style="margin-top: 30px; margin-left: 15px; margin-right: 15px">
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {Form} from 'vant'
    import {Field} from 'vant'
    import {Button} from 'vant'

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
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        align-items: center;
        background-color: #F5F5F5;
    }

    .title {
        position: relative;
        top: 70px;
        font-size: 25px;
        font-weight: bold;
        background-color: #00000000;
    }

    .logo {
        display: inline-flex;
        width: 150px;
        height: 150px;
        margin-bottom: 30px;
        margin-top: 70px;
    }
</style>