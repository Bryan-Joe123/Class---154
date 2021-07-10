AFRAME.registerComponent('terrain', {
    schema: {
        YRot:{type:"number",default:0}
    },

    init: function () {
        window.addEventListener("keydown",(e)=>{
            if(e.key=="a"){
                this.data.YRot -= 0.5
            } else if (e.key == "d"){
                this.data.YRot += 0.5
            }
        })
    },

    tick: function () {
        this.el.setAttribute("rotation", { x: 0, y: this.data.YRot,z:0})
    }
});
