const app = new Vue({
    el: '#app',
    data:{
        emails:[],
    },
    methods:{},
    mounted(){

        const new_array = []
            for (let i=0;i<10;i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    new_array.push(response.data.response+i)
                })
            }
                this.emails = new_array
                
            
        

        /* axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
            this.data = response.data
        })
        */
    }
})