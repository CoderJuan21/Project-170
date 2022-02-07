AFRAME .registerComponent("create-buttons",{
    init:function(){ 
        var button1 = document.createElement("button")
        button1.innerHTML = "Toy Description"
        button1.setAttribute("id","desc-button")
        button1.setAttribute("class","btn btn-warning")

        var button2 = document.createElement("button")
        button2.innerHTML = "Order Toy"
        button2.setAttribute("id","order-button")
        button2.setAttribute("class","btn btn-warning")
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)
    }
})