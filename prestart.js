
Object.assign(ig.BGM_TRACK_LIST, {
    //-----remixes-----
    fieldBattle_gametal: {
        path: "music/remixes/Battle2.ogg",
        loopEnd: 122.5,
        volume: 0.5
    },
    "s-rank_gametal": {
        introPath: "music/remixes/S-RankBattle_Intro.ogg",
        introEnd: 16,
        path: "music/remixes/S-RankBattle.ogg",
        loopEnd: 157.327,
        volume: 0.5
    },
    //-----Ultimate Arrange-----
    apolloTheme_ultimateArrange: {
        introPath: "music/UltimateArrange/ThePathofJustice_Intro.ogg",
        introEnd: 41,
        path: "music/UltimateArrange/ThePathofJustice.ogg",
        loopEnd: 157.236,
        volume: 0.5
    },
    //autums rise song gets an intro, because the Ultimate Arrange version comes with an intro
    autumnsRise_ultimateArrange: {
        introPath: "music/UltimateArrange/AutumnsRise_Intro.ogg",
        introEnd: 29.926,
        path: "music/UltimateArrange/AutumnsRise.ogg",
        loopEnd: 190.028,
        volume: 0.5
    },
    aridBattle_ultimateArrange: {
        introPath: "music/UltimateArrange/Battle3_Intro.ogg",
        introEnd: 12.884,
        path: "music/UltimateArrange/Battle3.ogg",
        loopEnd: 143.761,
        volume: 0.5
    },
    credits_ultimateArrange: {
        introPath: "music/UltimateArrange/Ending.ogg",
        introEnd: 244,
        path: "music/UltimateArrange/Lea.ogg",
        loopEnd: 185.75,
        volume: 0.5
    },
    //Lea song gets an intro, because the Ultimate Arrange version comes with an intro
    lea_ultimateArrange: {
        introPath: "music/UltimateArrange/Lea_Intro.ogg",
        introEnd: 12.240,
        path: "music/UltimateArrange/Lea.ogg",
        loopEnd: 185.75,
        volume: 0.5
    },
    //Mysterious song gets an intro, because the Ultimate Arrange version comes with an intro
    oldHideout1_ultimateArrange: {
        introPath: "music/UltimateArrange/Mysterious_Intro.ogg",
        introEnd: 10.849,
        path: "music/UltimateArrange/Mysterious.ogg",
        loopEnd: 129.049,
        volume: 0.5
    },
    raidTheme_ultimateArrange: {
        introPath: "music/UltimateArrange/Raid_Intro.ogg",
        introEnd: 90.015,
        path: "music/UltimateArrange/Raid.ogg",
        loopEnd: 211.209,
        volume: 0.5
    },
    forestField_ultimateArrange: {
        introPath: "music/UltimateArrange/SapphireRidge_Intro.ogg",
        introEnd: 48.475,
        path: "music/UltimateArrange/SapphireRidge.ogg",
        loopEnd: 113.28,
        volume: 0.5
    },
    shizuka_ultimateArrange: {
        introPath: "music/UltimateArrange/Shizuka_Intro.ogg",
        introEnd: 19.294,
        path: "music/UltimateArrange/Shizuka.ogg",
        loopEnd: 144.768,
        volume: 0.5
    },
    //Temple of Thunder song gets an intro, because the Ultimate Arrange version comes with an intro
    shockDungeon_ultimateArrange: {
        introPath: "music/UltimateArrange/TempleofThunder_Intro.ogg",
        introEnd: 47.470,
        path: "music/UltimateArrange/TempleofThunder.ogg",
        loopEnd: 195.198,
        volume: 0.5
    },
    //Main Title song gets an intro, because the Ultimate Arrange version comes with an intro
    title_ultimateArrange: {
        introPath: "music/UltimateArrange/MainTitle_Intro.ogg",
        introEnd: 16.131,
        path: "music/UltimateArrange/MainTitle.ogg",
        loopEnd: 41.637,
        volume: 0.5
    },
    finalBoss_ultimateArrange: {
        introPath: "music/UltimateArrange/TheUltimateExperience_Intro.ogg",
        introEnd: 32.792,
        path: "music/UltimateArrange/TheUltimateExperience.ogg",
        loopEnd: 500.029,
        volume: 0.6
    },
    //ValsedAhoge song gets no intro, because the Ultimate Arrange version comes without an intro
    emilie_ultimateArrange: {
        introPath: null,
        introEnd: null,
        path: "music/UltimateArrange/ValsedAhoge.ogg",
        loopEnd: 109.121,
        volume: 0.5
    },
    evoDungeon2_ultimateArrange: {
        introPath: "music/UltimateArrange/HackYourWay_Intro.ogg",
        introEnd: 1.729,
        path: "music/UltimateArrange/HackYourWay.ogg",
        loopEnd: 223.345,
        volume: 0.5
    },
});

el.musicRemix.registerRemix("fieldBattle", "fieldBattle_gametal", {
    name: {
        en_US: "GaMetal Remix"
    },
    desc: {
        en_US: "by GaMetal"
    }
})
el.musicRemix.registerRemix("s-rank", "s-rank_gametal", {
    name: {
        en_US: "GaMetal Remix"
    },
    desc: {
        en_US: "by GaMetal"
    }
})

el.musicRemix.registerRemix("apolloTheme", "apolloTheme_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Qwesta"
    }
})
el.musicRemix.registerRemix("autumnsRise", "autumnsRise_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by はがね"
    }
})
el.musicRemix.registerRemix("aridBattle", "aridBattle_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by James Landino"
    }
})
el.musicRemix.registerRemix("credits", "credits_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Kohta Takahash"
    }
})
el.musicRemix.registerRemix("lea", "lea_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Shibayan"
    }
})
el.musicRemix.registerRemix("oldHideout1", "oldHideout1_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Takahiro Eguchi"
    }
})
el.musicRemix.registerRemix("raidTheme", "raidTheme_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by daph"
    }
})

el.musicRemix.registerRemix("forestField", "forestField_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Quarkimo"
    }
})
el.musicRemix.registerRemix("shockDungeon", "shockDungeon_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Nishijima Sonda"
    }
})
el.musicRemix.registerRemix("title", "title_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Dale North"
    }
})
el.musicRemix.registerRemix("finalBoss", "finalBoss_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Cryptovolans & Chimeratio"
    }
})



el.musicRemix.registerRemix("emilie", "emilie_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by ああああ"
    }
})
el.musicRemix.registerRemix("evoDungeon2", "evoDungeon2_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Tony Thai"
    }
})
el.musicRemix.registerRemix("shizuka", "shizuka_ultimateArrange", {
    name: {
        en_US: "Ultimate Arrange"
    },
    desc: {
        en_US: "by Shogo Nomura"
    }
})