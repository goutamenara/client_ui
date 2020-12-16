<template>
    <v-app>
        <v-main>
            <v-container 
                fluid
                class="fill-height"
            >   
                <v-row
                    align="center"
                    justify="center"
                    >
                    <v-col
                        cols="12"
                        md="6"
                        sm="6"
                        lg="4"
                    >
                        <v-card
                        
                        flat
                        >
                        <v-card-title
                        class="align-center justify-center"
                        >
                        <h2>SignUp</h2>
                        </v-card-title>
                        <v-form
                            ref="login_form"
                            onsubmit="return false"
                            v-model="valid"
                        >
                            <v-card-text>
                                <v-text-field
                                    outlined
                                    v-model="email"
                                    label="Email"
                                    type="email"
                                    :rules="email_rules"
                                ></v-text-field>

                                <v-text-field
                                    outlined
                                    label="Username"
                                    v-model="username"
                                    :rules="username_rules"
                                ></v-text-field>

                                <v-text-field
                                    outlined
                                    label="Password"
                                    type="password"
                                    v-model="password"
                                    :rules="password_rules"
                                ></v-text-field>
                            </v-card-text>

                            <v-card-actions
                            >
                            <v-spacer></v-spacer>
                            <v-btn  
                                @click="register()"
                                color="primary"
                            >Register</v-btn>
                            </v-card-actions>

                        </v-form>
                        </v-card>

                    </v-col>
                </v-row>

            </v-container>
        </v-main>
    </v-app>
    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            valid : false,
            email : "",
            email_rules : [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            username : "",
            username_rules : [
                v => !!v || 'Username is required !'
            ],
            password : "",
            password_rules : [
                v => !!v || 'Password is required !'
            ]
        }
    },

    methods : {
         register(){
            if(this.valid){
                var form_data = {
                    username : this.username,
                    password : this.password,
                    email : this.email
                }
                axios({
                    method : "POST",
                    url : "/signup",
                    data : form_data
                })
                .then((response)=>{
                    if(response.status == 200){
                        this.$router.push({path:"/login"})
                    }
                })
            }  
        }
    }
}
</script>