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
                        <h2>Login</h2>
                        </v-card-title>
                        <v-form
                            ref="login_form"
                            onsubmit="return false"
                            v-model="valid"
                        >
                            <v-card-text>
                            <v-text-field
                                rounded
                                outlined
                                v-model="username"
                                :rules="username_rules"
                            ></v-text-field>

                            <v-text-field
                                rounded
                                outlined
                                type="password"
                                v-model="password"
                                :rules="password_rules"
                            ></v-text-field>
                            </v-card-text>

                            <v-card-actions
                            >
                            <v-btn text @click="register()">Register</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn large color="primary" @click="login()">Login</v-btn>

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
        login(){
            if(this.valid){
                var form_data = {
                    username : this.username,
                    password : this.password
                } 
                axios({
                   method : "POST",
                   url : "/login",
                   data : form_data
                })
                .then((response)=>{
                    if(response.status == 200){
                        this.$store.commit('set_state',{state:"token", data: response.data.token})
                        this.$router.push({path : "/"})
                        
                    }
                })
            }  
        },

        register(){
            this.$router.push({path : "/signup"})
        }
    }
}
</script>