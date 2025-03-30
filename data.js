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
    { name: "Spyro", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Spyro1.png" },
    { name: "Trigger Happy", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/TriggerHappy1.png" },
    { name: "Stealth Elf", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/StealthElf1.png" },
    { name: "Gill Grunt", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/GillGrunt1.png" },
    { name: "Eruptor", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Eruptor1.png" },
    { name: "Chop Chop", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/ChopChop1.png" },
    { name: "Bash", image: "https://skylanderscharacterlist.com/wp-content/uploads/2014/03/Bash.png" },
    { name: "Boomer", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Boomer1.png" },
    { name: "Camo", image: "https://skylanderscharacterlist.com/wp-content/uploads/2014/02/Camo.png" },
    { name: "Cynder", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Cynder1.png" },
    { name: "Dino-Rang", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/DinoRang.png" },
    { name: "Double Trouble", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/DoubleTrouble1.png" },
    { name: "Drill Sergeant", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/DrillSergeant1.png" },
    { name: "Drobot", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Drobot1.png" },
    { name: "Flameslinger", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Flameslinger1.png" },
    { name: "Ghost Roaster", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/GhostRoaster.png" },
    { name: "Hex", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Hex1.png" },
    { name: "Ignitor", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Ignitor1.png" },
    { name: "Lightning Rod", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/LightningRod1.png" },
    { name: "Prism Break", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/PrismBreak1.png" },
    { name: "Slam Bam", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/SlamBam1.png" },
    { name: "Sonic Boom", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/SonicBoom1.png" },
    { name: "Stump Smash", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/StumpSmash1.png" },
    { name: "Sunburn", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Sunburn.png" },
    { name: "Terrafin", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Terrafin1.png" },
    { name: "Voodood", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Voodood.png" },
    { name: "Warnado", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Warnado.png" },
    { name: "Wham-Shell", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/WhamShell.png" },
    { name: "Whirlwind", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Whirlwind1.png" },
    { name: "Wrecking Ball", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/WreckingBall1.png" },
    { name: "Zap", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Zap1.png" },
    { name: "Zook", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Zook1.png" }
  ],
  "Giants": [
    { name: "Bouncer", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Bouncer.png" },
    { name: "Crusher", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Crusher.png" },
    { name: "Eye-Brawl", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/EyeBrawl1.png" },
    { name: "Hot Head", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/HotHead.png" },
    { name: "Ninjini", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Ninjini.png" },
    { name: "Swarm", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Swarm.png" },
    { name: "Thumpback", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Thumpback.png" },
    { name: "Tree Rex", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/TreeRex.png" },
    { name: "Chill", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Chill.png" },
    { name: "Flashwing", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Flashwing.png" },
    { name: "Fright Rider", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/FrightRider.png" },
    { name: "Hot Dog", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/HotDog.png" },
    { name: "Jet-Vac", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/JetVac.png" },
    { name: "Pop Fizz", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/PopFizz.png" },
    { name: "Shroomboom", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Shroomboom.png" },
    { name: "Sprocket", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/Sprocket.png" },
    { name: "Chill LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/ChillLightCore.png" },
    { name: "Drobot LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/DrobotLightCore.png" },
    { name: "Eruptor LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/EruptorLightCore.png" },
    { name: "Hex LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/HexLightCore.png" },
    { name: "Jet-Vac LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/JetVacLightCore.png" },
    { name: "Pop Fizz LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/PopFizzLightCore.png" },
    { name: "Prism Break LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/PrismBreakLightCore.png" },
    { name: "Shroomboom LightCore", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/ShroomboomLightCore.png" },
    { name: "Legendary Bouncer", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/LegendaryBouncer.png" },
    { name: "Legendary Jet-Vac", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/LegendaryJetVac.png" },
    { name: "Legendary Slam Bam", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/LegendarySlamBam.png" },
    { name: "Legendary Ignitor", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/LegendaryIgnitor.png" },
    { name: "Scarlet Ninjini", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/ScarletNinjini.png" },
    { name: "Punch Pop Fizz", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/PunchPopFizz.png" },
    { name: "Molten Hot Dog", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/MoltenHotDog.png" },
    { name: "Polar Whirlwind", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/PolarWhirlwind.png" },
    { name: "Jade Flashwing", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/JadeFlashwing.png" },
    { name: "Granite Crusher", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/GraniteCrusher.png" },
    { name: "Gnarly Tree Rex", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/GnarlyTreeRex.png" },
    { name: "Glow in the Dark Fright Rider", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/FrightRiderGlow.png" },
    { name: "Golden Dragonfire Cannon Battle Pack", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/GoldenDragonfireCannon.png" },
    { name: "Scorpion Striker Battle Pack", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/ScorpionStrikerBattlePack.png" },
    { name: "Dragonfire Cannon", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/DragonfireCannon.png" },
    { name: "Skylanders Giants Portal Owner’s Pack", image: "https://skylanderscharacterlist.com/wp-content/uploads/2013/02/PortalOwnersPack.png" }
  ]
};
