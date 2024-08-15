const modifiedTracks = {
    //-----remixes-----
    fieldBattle: {
        path: "music/remixes/Battle2.ogg",
        loopEnd: 122.5,
        volume: 0.5
    },
    "s-rank": {
        introPath: "music/remixes/S-RankBattle_Intro.ogg",
        introEnd: 16,
        path: "music/remixes/S-RankBattle.ogg",
        loopEnd: 157.327,
        volume: 0.5
    },
    //-----Ultimate Arrange-----
    apolloTheme: {
        introPath: "music/UltimateArrange/ThePathofJustice_Intro.ogg",
        introEnd: 41,
        path: "music/UltimateArrange/ThePathofJustice.ogg",
        loopEnd: 157.236,
        volume: 0.5
    },
    //autums rise song gets an intro, because the Ultimate Arrange version comes with an intro
    autumnsRise: {
        introPath: "music/UltimateArrange/AutumnsRise_Intro.ogg",
        introEnd: 29.926,
        path: "music/UltimateArrange/AutumnsRise.ogg",
        loopEnd: 190.028,
        volume: 0.5
    },
    aridBattle: {
        introPath: "music/UltimateArrange/Battle3_Intro.ogg",
        introEnd: 12.884,
        path: "music/UltimateArrange/Battle3.ogg",
        loopEnd: 143.761,
        volume: 0.5
    },
    credits: {
        introPath: "music/UltimateArrange/Ending.ogg",
        introEnd: 244,
        path: "music/UltimateArrange/Lea.ogg",
        loopEnd: 185.75,
        volume: 0.5
    },
    //Lea song gets an intro, because the Ultimate Arrange version comes with an intro
    lea: {
        introPath: "music/UltimateArrange/Lea_Intro.ogg",
        introEnd: 12.240,
        path: "music/UltimateArrange/Lea.ogg",
        loopEnd: 185.75,
        volume: 0.5
    },
    //Mysterious song gets an intro, because the Ultimate Arrange version comes with an intro
    oldHideout1: {
        introPath: "music/UltimateArrange/Mysterious_Intro.ogg",
        introEnd: 10.849,
        path: "music/UltimateArrange/Mysterious.ogg",
        loopEnd: 129.049,
        volume: 0.5
    },
    raidTheme: {
        introPath: "music/UltimateArrange/Raid_Intro.ogg",
        introEnd: 90.015,
        path: "music/UltimateArrange/Raid.ogg",
        loopEnd: 211.209,
        volume: 0.5
    },
    forestField: {
        introPath: "music/UltimateArrange/SapphireRidge_Intro.ogg",
        introEnd: 48.475,
        path: "music/UltimateArrange/SapphireRidge.ogg",
        loopEnd: 113.28,
        volume: 0.5
    },
    shizuka: {
        introPath: "music/UltimateArrange/Shizuka_Intro.ogg",
        introEnd: 19.294,
        path: "music/UltimateArrange/Shizuka.ogg",
        loopEnd: 144.768,
        volume: 0.5
    },
    //Temple of Thunder song gets an intro, because the Ultimate Arrange version comes with an intro
    shockDungeon: {
        introPath: "music/UltimateArrange/TempleofThunder_Intro.ogg",
        introEnd: 47.470,
        path: "music/UltimateArrange/TempleofThunder.ogg",
        loopEnd: 195.198,
        volume: 0.5
    },
    //Main Title song gets an intro, because the Ultimate Arrange version comes with an intro
    title: {
        introPath: "music/UltimateArrange/MainTitle_Intro.ogg",
        introEnd: 16.131,
        path: "music/UltimateArrange/MainTitle.ogg",
        loopEnd: 41.637,
        volume: 0.5
    },
    finalBoss: {
        introPath: "music/UltimateArrange/TheUltimateExperience_Intro.ogg",
        introEnd: 32.792,
        path: "music/UltimateArrange/TheUltimateExperience.ogg",
        loopEnd: 500.029,
        volume: 0.6
    },
    //ValsedAhoge song gets no intro, because the Ultimate Arrange version comes without an intro
    emilie: {
        introPath: null,
        introEnd: null,
        path: "music/UltimateArrange/ValsedAhoge.ogg",
        loopEnd: 109.121,
        volume: 0.5
    },
    evoDungeon2: {
        introPath: "music/UltimateArrange/HackYourWay_Intro.ogg",
        introEnd: 1.729,
        path: "music/UltimateArrange/HackYourWay.ogg",
        loopEnd: 223.345,
        volume: 0.5
    },
};
ig.module("game.feature.bgm.modifications")
.requires("game.feature.bgm.playlist")
.defines(function () {
    //this function modifies the BGM_TRACK_LIST object by adding the modifications from the modifiedTracks object
    if (ig.BGM_TRACK_LIST) {
        for (const trackName in modifiedTracks) {
            if (modifiedTracks.hasOwnProperty(trackName) && ig.BGM_TRACK_LIST[trackName]) {
                const trackModifications = modifiedTracks[trackName];
                for (const property in trackModifications) {
                    if (trackModifications.hasOwnProperty(property)) {
                        ig.BGM_TRACK_LIST[trackName][property] = trackModifications[property];
                    }
                }
            }
        }
    }
});