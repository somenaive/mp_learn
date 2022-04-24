// components/my-radio/my-radio.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        //数组，radio的内容
        info_list:[]
    },

    /**
     * 组件的初始数据
     */
    data: {
        //控制是否隐藏
        hidd:true,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //改变是否隐藏的状态
        change:function()
        {
            //取反
            this.setData({hidd:!this.data.hidd})
        }
    }
})
