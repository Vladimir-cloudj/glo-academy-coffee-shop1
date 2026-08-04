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

                            <div class="form-group row">
                                <div class="col col-12 d-flex justify-content-center align-items-center">
                                    <input 
                                        type="checkbox" 
                                        id="agreement" 
                                        v-model="$v.agreement.$model"
                                        style="margin-right: 8px;"
                                    >
                                    <label for="agreement" class="mb-0">
                                        Согласен с договором оферты
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 text-center">
                                    <span v-if="$v.agreement.$error" style="color: red; font-size: 0.875em;">
                                        Необходимо принять условия оферты
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
// import { helpers } from '@vuelidate/validators'
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
            message: '',
            agreement: true,
        }
    },
    validations: {
        name: { required },
        email: { required, email },
        phone: {  },
        message: { 
            required, 
            maxLength: maxLength(20), 
            minLength: minLength,
            // minLength: helpers.withMessage('this value min 5', minLength) 
        },
        agreement:{ required }
    },
    methods: {
        // async submit() {
        //     const isFormCorrect = await this.v$.$validate()
        //     if (!isFormCorrect) return
        // },
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
                message: this.message,
                agreement: this.agreement,
            })
            const message = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
                agreement: this.agreement,
            }
            fetch ('http://localhost:3000/contacts', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(message)
            })

            this.name = ''
            this.email = ''
            this.phone = ''
            this.message = ''
            this.agreement= true,
            this.$v.$reset()
        }
    }
}
</script>