<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component/>
                    </div>
                </div>
                <block-title title="Contact us"/>
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
    
                        <form @submit.prevent="handleSubmit" class="mt-5" novalidate>
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="name-input" class="mb-0">Name <span style="color: red;">*</span></label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input type="text" class="form-control" id="name-input" v-model.trim="$v.name.$model">
                                    <span v-if="$v.name.$error" style="color: red; font-size: 0.875em;">
                                        Имя обязательно для заполнения
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="email-input" class="mb-0">E-mail <span style="color: red;">*</span></label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input type="email" class="form-control" id="email-input" v-model.trim="$v.email.$model">
                                    <span v-if="$v.email.$error" style="color: red; font-size: 0.875em;">
                                        <span v-if="!$v.email.required">E-mail обязателен</span>
                                        <span v-else-if="!$v.email.email">Введите корректный E-mail</span>
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="phone-input" class="mb-0">Phone</label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input type="tel" class="form-control" id="phone-input" v-model.trim="$v.phone.$model">
                                    <span v-if="$v.phone.$error" style="color: red; font-size: 0.875em;">
                                        Телефон обязателен
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-center">
                                    <label for="message" class="mb-3 mt-3 text-center">Your message <span style="color: red;">*</span></label>
                                </div>
                                <div class="col col-12">
                                    <textarea class="form-control" id="message" rows="5" placeholder="Leave your comments here" v-model.trim="$v.message.$model"></textarea>
                                    <span v-if="$v.message.$error" style="color: red; font-size: 0.875em;">
                                        Сообщение обязательно
                                    </span>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="col">
                                    <button type="submit" class="btn btn-outline-dark send-btn">Send us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import BlockTitle from '@/components/BlockTitle.vue'


import { required, email, maxLength } from 'vuelidate/lib/validators'
import { helpers } from '@vuelidate/validators'
import {minLength} from '../validators/minLength.js'


export default {
    name: 'ContactsUsView',
    components: {
        NavBarComponent,
        BlockTitle,
    },
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    },
    validations: {
        name: { required },
        email: { required, email },
        phone: {  },
        message: { 
            required, 
            maxLength: maxLength(20), 
            minLength: helpers.withMessage('this value min 5', minLength) 
        } 
    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return
        },
        handleSubmit() {
            this.$v.$touch()
            
            if (this.$v.$invalid) {
                console.log('Форма невалидна')
                return
            }
            
            console.log('Данные формы отправлены:', {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            })
            
            this.name = ''
            this.email = ''
            this.phone = ''
            this.message = ''
            this.$v.$reset()
        }
    }
}
</script>