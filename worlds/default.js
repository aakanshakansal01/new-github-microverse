// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js","popup15.js","popup16.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0xe0e0e0,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
                toneMappingExposure: 1.2
            }
        },
        {
            card:{
                translation: [0, -1.2725944802827678, -5.970223141259936],
                scale: [1.1820082859554206, 1.1820082859554206, 1.1820082859554206],
                rotation: [0, -0.7541354037088794, 0, -0.656718960342128],
                layers: ["pointer","walk"],
                behaviorModules: ["Popup15"],
                name: "/genset.glb",
                dataLocation: "3gsmTBSZpysLP-IRcJBCsS9ArmCBqYcXmV52j2ifBSuwDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIHTITEDcoHSESKDRWLA4AKj0OUlReHyEjIF9XVUgOCEkEFQgWEgITSQoOBBUIEQIVFAJJCwgEBgsDAhEDAgEGEgsTSAktEhIBLRBeFQAtHi0RMlMgUR4PIF4QFQkODR0QCytTCxZTHzEGMhcQUF9IAwYTBkgjJBUGI1UjFww2NwpRNSQhKTc3F1VXLTQFVyoNAh4yHSIGJDMiPyExJTFf",
                dataScale: [0.2943008513975707, 0.2943008513975707, 0.2943008513975707],
                fileName: "/genset.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
        {
            card:{
                translation: [-11.375205673840643, -1.2725944802827678, -5.970223141259936],
                scale: [1.1820082859554206, 1.1820082859554206, 1.1820082859554206],
                rotation: [0, -0.7541354037088794, 0, -0.656718960342128],
                layers: ["pointer","walk"],
                behaviorModules: ["Popup16"],
                name: "/genset.glb",
                dataLocation: "3gsmTBSZpysLP-IRcJBCsS9ArmCBqYcXmV52j2ifBSuwDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIHTITEDcoHSESKDRWLA4AKj0OUlReHyEjIF9XVUgOCEkEFQgWEgITSQoOBBUIEQIVFAJJCwgEBgsDAhEDAgEGEgsTSAktEhIBLRBeFQAtHi0RMlMgUR4PIF4QFQkODR0QCytTCxZTHzEGMhcQUF9IAwYTBkgjJBUGI1UjFww2NwpRNSQhKTc3F1VXLTQFVyoNAh4yHSIGJDMiPyExJTFf",
                dataScale: [0.2943008513975707, 0.2943008513975707, 0.2943008513975707],
                fileName: "/genset.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        }
    ];
}
