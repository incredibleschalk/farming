goog.provide('farming.Land');
goog.require('lime.Sprite');

/**
 * Land elements
 * 
 * @param {} gameObj
 */
farming.Land = function(gameObj, playerObj) {
    goog.base(this);
    this.setAnchorPoint(0, 0);
    this.setSize(gameObj.tile_size,gameObj.tile_size);
    this.setFill('images/bare_land.png');
    this.state = this.EMPTY;
    var land = this;
    goog.events.listen(this,['mousedown', 'touchstart'], function(e) {
        e.event.stopPropagation();        
        if(land.state == land.EMPTY && playerObj.money >= gameObj.costPlowing) {
            //plow land
            land.setFill('images/plowed.png')
            land.state = land.PLOWED;

            //update player money
            playerObj.money -= gameObj.costPlowing;
            gameObj.updateMoney();
        }
    });
}

goog.inherits(farming.Land,lime.Sprite);

//states
farming.Land.prototype.EMPTY = 0;
farming.Land.prototype.PLOWED = 1;
farming.Land.prototype.GROWING = 2;
farming.Land.prototype.READY = 3;



