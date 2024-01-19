class PopupActor {
    setup() {
        this.addEventListener("pointerTap", "pressed");
    }

    check() {
        this.hasOpened = false;
    }


    pressed() {

        if (this.popup) {
            this.popup.destroy()
            delete this.popup
            return
        }


        this.popup = this.createCard({
            translation: [0+1, -1.2725944802827678+1, -5.970223141259936+1],
            scale: [2.3428338127324086, 2.3428338127324086, 2.3428338127324086],
            rotation: [0, 0.682793776326452, 0, 0.7306111544521224],
            layers: ["walk", "pointer"],
            name: "hyperbeam1",
            fullBright: true,
            textureHeight: 720,
            textureType: "canvas",
            textureWidth: 1280,
            type: "2d",
        
        
        
        
        
        
        
        
        });

        this.say("portalChanged");
    }
}


export default {
    modules: [
        {
            name: "Popup15",
            actorBehaviors: [PopupActor],

        }
    ]
}