AFRAME .registerComponent("markerhandler",{
    init:async function(){ 
        var toys = await this.getToys();
this.el.addEventListener("markerFound",()=>{
    console.log("marker is found")
    var markerId = this.el.id 
    this.handleMarkerFound(toys,markerId)
} )
this.el.addEventListener("markerLost",()=>{
    console.log("marker is lost")
    this.handleMarkerLost()
})
    },
    handleMarkerFound:function(toys, markerId){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex"
        var ratingbutton = document.getElementById("rating-button")
        var orderbutton = document.getElementById("order-button")

        ratingbutton.addEventListener("click",function(){
            swal({
                icon:"https://www.dwu.ac.pg/clt/images/RATES-pinnaclebowl.jpg",
                title:"rate dish",
                text:"work in progress"
            }) 
        })
        orderbutton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for ordering!!!!!",
                text:"Your order will be served soon>:("
            }) 
        })
        var dish = toys.filter(dish=>dish.id===markerId)[0]
        var model = document.querySelector(`#model-${dish.id}`)
        model.setAttribute("position", dish.model_geometry.position)
        model.setAttribute("rotation", dish.model_geometry.rotation)
        model.setAttribute("scale", dish.model_geometry.scale)
    },
    handleMarkerLost:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "none"
    },
    getToys:async function(){
        return await firebase.firestore().collection("toys").get().then(snap=>{
            return snap.docs.map(doc=>doc.data())
        })
           }

})