window.elementMap = {
  'Spyro': 'Magic', 'Double Trouble': 'Magic', 'Voodood': 'Magic', 'Wrecking Ball': 'Magic', 'Pop Fizz': 'Magic', 'Pop Fizz LightCore': 'Magic', 'Punch Pop Fizz': 'Magic',
  'Stealth Elf': 'Life', 'Stump Smash': 'Life', 'Zook': 'Life', 'Camo': 'Life', 'Shroomboom': 'Life', 'Shroomboom LightCore': 'Life',
  'Gill Grunt': 'Water', 'Slam Bam': 'Water', 'Zap': 'Water', 'Wham-Shell': 'Water', 'Thumpback': 'Water',
  'Eruptor': 'Fire', 'Sunburn': 'Fire', 'Flameslinger': 'Fire', 'Ignitor': 'Fire', 'Hot Head': 'Fire', 'Hot Dog': 'Fire', 'Eruptor LightCore': 'Fire', 'Legendary Ignitor': 'Fire', 'Molten Hot Dog': 'Fire',
  'Trigger Happy': 'Tech', 'Drill Sergeant': 'Tech', 'Drobot': 'Tech', 'Bouncer': 'Tech', 'Sprocket': 'Tech', 'Legendary Bouncer': 'Tech',
  'Terrafin': 'Earth', 'Dino-Rang': 'Earth', 'Bash': 'Earth', 'Prism Break': 'Earth', 'Crusher': 'Earth', 'Flashwing': 'Earth', 'Granite Crusher': 'Earth', 'Jade Flashwing': 'Earth', 'Prism Break LightCore': 'Earth',
  'Whirlwind': 'Air', 'Sonic Boom': 'Air', 'Lightning Rod': 'Air', 'Jet-Vac': 'Air', 'Swarm': 'Air', 'Jet-Vac LightCore': 'Air', 'Legendary Jet-Vac': 'Air',
  'Chop Chop': 'Undead', 'Hex': 'Undead', 'Ghost Roaster': 'Undead', 'Fright Rider': 'Undead', 'Eye-Brawl': 'Undead', 'Hex LightCore': 'Undead', 'Legendary Slam Bam': 'Undead', 'Glow in the Dark Fright Rider': 'Undead',
  'Ninjini': 'Magic', 'Scarlet Ninjini': 'Magic', 'Chill': 'Water', 'Chill LightCore': 'Water', 'Polar Whirlwind': 'Air', 'Gnarly Tree Rex': 'Life', 'Tree Rex': 'Life'
};;
/*
window.games = {
  "Spyro's Adventure": [
    {
      name: "Spyro",
      image: "images/spyro.png",
      description: "A brave purple dragon...",
      game: "Spyro's Adventure",
      quantity: 5,
      isOwned: true
    },
    {
      name: "Gill Grunt",
      image: "images/gillgrun.png",
      description: "A brave water-based warrior...",
      game: "Spyro's Adventure",
      quantity: 3,
      isOwned: true
    }
  ]
}; */
window.games = {
  "Spyro's Adventure": [
    // Base Game Characters
    { name: "Spyro", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Spyro.png" },
    { name: "Trigger Happy", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/TriggerHappy.png" },
    { name: "Stealth Elf", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/StealthElf.png" },
    { name: "Gill Grunt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GillGrunt.png" },
    { name: "Eruptor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Eruptor.png" },
    { name: "Chop Chop", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/ChopChop.png" },
    { name: "Bash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Bash.png" },
    { name: "Boomer", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Boomer.png" },
    { name: "Camo", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Camo.png" },
    { name: "Cynder", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Cynder.png" },
    { name: "Dino-Rang", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DinoRang.png" },
    { name: "Double Trouble", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DoubleTrouble.png" },
    { name: "Drill Sergeant", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DrillSergeant.png" },
    { name: "Drobot", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Drobot.png" },
    { name: "Flameslinger", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Flameslinger.png" },
    { name: "Ghost Roaster", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GhostRoaster.png" },
    { name: "Hex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Hex.png" },
    { name: "Ignitor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Ignitor.png" },
    { name: "Lightning Rod", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/LightningRod.png" },
    { name: "Prism Break", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/PrismBreak.png" },
    { name: "Slam Bam", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SlamBam.png" },
    { name: "Sonic Boom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SonicBoom.png" },
    { name: "Stump Smash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/StumpSmash.png" },
    { name: "Sunburn", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Sunburn.png" },
    { name: "Terrafin", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Terrafin.png" },
    { name: "Voodood", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Voodood.png" },
    { name: "Warnado", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Warnado.png" },
    { name: "Wham-Shell", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/WhamShell.png" },
    { name: "Whirlwind", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Whirlwind.png" },
    { name: "Wrecking Ball", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/WreckingBall.png" },
    { name: "Zap", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Zap.png" },
    { name: "Zook", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Zook.png" },

    // Variants for Spyro's Adventure (example)
    { name: "Silver Eruptor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SilverEruptor.jpg" },
    { name: "Silver Dino-Rang", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SilverDinoRang.jpg" },
    { name: "Silver Boomer", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SilverBoomer.jpg" },
    { name: "Red Drill Sergeant", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/RedDrillSergeant.png" },
    { name: "Red Camo", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/RedCamo.jpg" },
    { name: "Pearl Hex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/PearlHex.png" },
    { name: "Metallic Purple Cynder", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/MetallicPurpleCynder.png" },
    { name: "Green Gill Grunt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GreenGillGrunt.png" },

    // Add more variants as needed...
  ],

  "Giants": [
    // Base Game Characters
    { name: "Bouncer", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Bouncer.png" },
    { name: "Crusher", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Crusher.png" },
    { name: "Eye-Brawl", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/EyeBrawl1.png" },
    { name: "Hot Head", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/HotHead.png" },
    { name: "Ninjini", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Ninjini.png" },
    { name: "Swarm", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Swarm.png" },
    { name: "Thumpback", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Thumpback.png" },
    { name: "Tree Rex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/TreeRex.png" },
    { name: "Chill", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Chill.png" },
    { name: "Flashwing", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Flashwing.png" },
    { name: "Fright Rider", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/FrightRider.png" },
    { name: "Hot Dog", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/HotDog.png" },
    { name: "Jet-Vac", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/JetVac.png" },
    { name: "Pop Fizz", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PopFizz.png" },
    { name: "Shroomboom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Shroomboom.png" },
    { name: "Sprocket", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Sprocket.png" },

    // Variants for Giants (example)
    { name: "White Flocked Stump Smash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/WhiteFlockedStumpSmash.png" },
    { name: "White Flocked LightCore Prism Break", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/WhiteFlockedLightCorePrismBreak.png" },
    { name: "White Flocked Eruptor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/WhiteFlockedEruptor.png" },
    { name: "Stone Zook", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/StoneZook.png" },
    { name: "Stone Whirlwind", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/StoneWhirlwind.png" },

    // Add more variants as needed...
  ]
};
