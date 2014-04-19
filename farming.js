//set main namespace 
goog.provide('farming');   
//get requirements 
goog.require('lime.Director'); 
goog.require('lime.Scene'); 
goog.require('lime.Layer');   
goog.require('lime.GlossyButton');
goog.require('farming.Land');     

//entrypoint 
farming.start = function(){     

    //game object
    //game object
var gameObj = {
    width: 320,
    height: 480,
    tile_size: 64,
    num_tiles_x: 5,
    num_tiles_y: 6,
    landLayer_w: 64*5, 
    landLayer_h: 64*6,
    controlsLayer_w: 64*5,
    controlsLayer_h: 64*1.5,
    costPlowing: 5,

    //shop
    shop_margin_x: 50,
    shop_margin_y: 20
}

//player object
var playerObj = {
    money: 300,
    currentCrop: 0             
}


    var director = new lime.Director(document.body,gameObj.width,gameObj.height);     
    director.makeMobileWebAppCapable();     
    director.setDisplayFPS(false);        

    var gameScene = new lime.Scene().setRenderer(lime.Renderer.CANVAS);
    var landLayer = new lime.Layer().setAnchorPoint(0, 0);
    var controlsLayer = new lime.Layer().setAnchorPoint(0, 0);

    gameScene.appendChild(landLayer);
    gameScene.appendChild(controlsLayer);

    //controls area
var controlArea = new lime.Sprite().setAnchorPoint(0,0)
    .setPosition(0, gameObj.height-gameObj.controlsLayer_h)
    .setSize(gameObj.controlsLayer_w, gameObj.controlsLayer_h)
    .setFill('#777777')
controlsLayer.appendChild(controlArea);

//shop button
var shopButton = new lime.GlossyButton().setColor('#ffffff').setText('Shop')
    .setPosition(60, gameObj.height-gameObj.controlsLayer_h/2)
    .setSize(80, 40);
controlsLayer.appendChild(shopButton); 

//money
var moneyLabel = new lime.Label().setText('$'+playerObj.money).setFontColor('#E8FC08')
    .setPosition(gameObj.controlsLayer_w-50, gameObj.height-gameObj.controlsLayer_h/2);
controlsLayer.appendChild(moneyLabel); 

 //create land elements
    for(var i=0; i<gameObj.num_tiles_x; i++) {
        for(var j=0; j<gameObj.num_tiles_y; j++) {
            var landElement = new farming.Land(gameObj, playerObj).setPosition(i*gameObj.tile_size, j*gameObj.tile_size);
            landLayer.appendChild(landElement);
        }
    }



    director.replaceScene(gameScene); 

   

}


