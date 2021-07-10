AFRAME.registerComponent('target', {
    schema: {
       Xpos:{type:"number",default:0},
       Ypos: {type:"number",default:0},
       Color: {type:"number",default:0}
    },

    init:function () {
        this.createLoop()
        console.log(23456);
    },

    createLoop:function(){
        var loop = document.createElement("a-entity")
        loop.setAttribute("position",{x:20,y:0,z:0})
        loop.setAttribute("geometry",{primitive:"torus",radius:10})
        loop.setAttribute("scale",{x:30,y:30,z:30})
        loop.setAttribute("material","color","#181818")

        
        var terrain = document.querySelector("#Terrain")        
        terrain.appendChild(loop)
    }

});
