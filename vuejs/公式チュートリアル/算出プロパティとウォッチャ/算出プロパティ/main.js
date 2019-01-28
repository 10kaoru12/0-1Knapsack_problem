var vm=new Vue({
    el:'#example',
    data:{
        message:'Hello'
    },
    computed:{
        reversedMessage:function () {
            return this.message.split('').reverse().join('')
        }
    }
})
