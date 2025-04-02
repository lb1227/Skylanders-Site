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
    { name: "Spyro", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Spyro.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$7.99" },
    { name: "Trigger Happy", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/TriggerHappy.png", game: "Spyro's Adventure", price: "$5.50", retail_price: "$7.99" },
    { name: "Stealth Elf", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/StealthElf.png", game: "Spyro's Adventure", price: "$6.00", retail_price: "$7.99" },
    { name: "Gill Grunt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GillGrunt.png", game: "Spyro's Adventure", price: "$3.75", retail_price: "$7.99" },
    { name: "Eruptor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Eruptor.png", game: "Spyro's Adventure", price: "$4.50", retail_price: "$7.99" },
    { name: "Chop Chop", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/ChopChop.png", game: "Spyro's Adventure", price: "$6.25", retail_price: "$7.99" },
    { name: "Bash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Bash.png", game: "Spyro's Adventure", price: "$4.80", retail_price: "$7.99" },
    { name: "Boomer", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Boomer.png", game: "Spyro's Adventure", price: "$5.00", retail_price: "$7.99" },
    { name: "Camo", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Camo.png", game: "Spyro's Adventure", price: "$7.20", retail_price: "$7.99" },
    { name: "Cynder", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Cynder.png", game: "Spyro's Adventure", price: "$5.75", retail_price: "$7.99" },
    { name: "Dino-Rang", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DinoRang.png", game: "Spyro's Adventure", price: "$4.40", retail_price: "$7.99" },
    { name: "Double Trouble", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DoubleTrouble.png", game: "Spyro's Adventure", price: "$5.60", retail_price: "$7.99" },
    { name: "Drill Sergeant", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DrillSergeant.png", game: "Spyro's Adventure", price: "$4.20", retail_price: "$7.99" },
    { name: "Drobot", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Drobot.png", game: "Spyro's Adventure", price: "$6.80", retail_price: "$7.99" },
    { name: "Flameslinger", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Flameslinger.png", game: "Spyro's Adventure", price: "$5.90", retail_price: "$7.99" },
    { name: "Ghost Roaster", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GhostRoaster.png", game: "Spyro's Adventure", price: "$12.00", retail_price: "$7.99" },
    { name: "Hex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Hex.png", game: "Spyro's Adventure", price: "$5.30", retail_price: "$7.99" },
    { name: "Ignitor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Ignitor.png", game: "Spyro's Adventure", price: "$5.50", retail_price: "$7.99" },
    { name: "Lightning Rod", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/LightningRod.png", game: "Spyro's Adventure", price: "$4.70", retail_price: "$7.99" },
    { name: "Prism Break", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/PrismBreak.png", game: "Spyro's Adventure", price: "$5.25", retail_price: "$7.99" },
    { name: "Slam Bam", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SlamBam.png", game: "Spyro's Adventure", price: "$7.00", retail_price: "$7.99" },
    { name: "Sonic Boom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SonicBoom.png", game: "Spyro's Adventure", price: "$4.90", retail_price: "$7.99" },
    { name: "Stump Smash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/StumpSmash.png", game: "Spyro's Adventure", price: "$4.60", retail_price: "$7.99" },
    { name: "Sunburn", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Sunburn.png", game: "Spyro's Adventure", price: "$9.50", retail_price: "$7.99" },
    { name: "Terrafin", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Terrafin.png", game: "Spyro's Adventure", price: "$6.20", retail_price: "$7.99" },
    { name: "Voodood", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Voodood.png", game: "Spyro's Adventure", price: "$5.00", retail_price: "$7.99" },
    { name: "Warnado", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Warnado.png", game: "Spyro's Adventure", price: "$6.75", retail_price: "$7.99" },
    { name: "Wham-Shell", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/WhamShell.png", game: "Spyro's Adventure", price: "$13.00", retail_price: "$7.99" },
    { name: "Whirlwind", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Whirlwind.png", game: "Spyro's Adventure", price: "$5.80", retail_price: "$7.99" },
    { name: "Wrecking Ball", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/WreckingBall.png", game: "Spyro's Adventure", price: "$4.95", retail_price: "$7.99" },
    { name: "Zap", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Zap.png", game: "Spyro's Adventure", price: "$5.10", retail_price: "$7.99" },
    { name: "Zook", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/Zook.png", game: "Spyro's Adventure", price: "$4.80", retail_price: "$7.99" },
    { name: "Silver Eruptor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SilverEruptor.jpg", game: "Spyro's Adventure", price: "$18.00", retail_price: "$9.99" },
    { name: "Silver Dino-Rang", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SilverDinoRang.jpg", game: "Spyro's Adventure", price: "$17.00", retail_price: "$9.99" },
    { name: "Silver Boomer", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SilverBoomer.jpg", game: "Spyro's Adventure", price: "$16.50", retail_price: "$9.99" },
    { name: "Red Drill Sergeant", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/RedDrillSergeant.png", game: "Spyro's Adventure", price: "$15.00", retail_price: "$9.99" },
    { name: "Red Camo", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/RedCamo.jpg", game: "Spyro's Adventure", price: "$14.00", retail_price: "$9.99" },
    { name: "Pearl Hex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/PearlHex.png", game: "Spyro's Adventure", price: "$21.00", retail_price: "$9.99" },
    { name: "Metallic Purple Cynder", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/MetallicPurpleCynder.png", game: "Spyro's Adventure", price: "$19.00", retail_price: "$9.99" },
    { name: "Green Gill Grunt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GreenGillGrunt.png", game: "Spyro's Adventure", price: "$16.00", retail_price: "$9.99" },
    { name: "Gold Flameslinger", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GoldFlameslinger.png", game: "Spyro's Adventure", price: "$22.00", retail_price: "$9.99" },
    { name: "Gold Drill Sergeant", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GoldDrillSergeant.png", game: "Spyro's Adventure", price: "$23.00", retail_price: "$9.99" },
    { name: "Glow In The Dark Zap", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GlowInTheDarkZap.png", game: "Spyro's Adventure", price: "$12.50", retail_price: "$9.99" },
    { name: "Glow In The Dark Wrecking Ball", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GlowInTheDarkWreckingBall.png", game: "Spyro's Adventure", price: "$13.00", retail_price: "$9.99" },
    { name: "Glow In The Dark Warnado", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GlowInTheDarkWarnado.png", game: "Spyro's Adventure", price: "$14.00", retail_price: "$9.99" },
    { name: "Flocked Stump Smash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/FlockedStumpSmash.png", game: "Spyro's Adventure", price: "$30.00", retail_price: "$9.99" },
    { name: "Crystal Clear Whirlwind", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/CrystalClearWhirlwind.png", game: "Spyro's Adventure", price: "$25.00", retail_price: "$9.99" },
    { name: "Crystal Clear Wham-Shell", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/CrystalClearWhamShell.png", game: "Spyro's Adventure", price: "$27.00", retail_price: "$9.99" },
    { name: "Crystal Clear Stealth Elf", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/CrystalClearStealthElf.png", game: "Spyro's Adventure", price: "$26.00", retail_price: "$9.99" },
    { name: "Crystal Cynder", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/CrystalCynder.png", game: "Spyro's Adventure", price: "$24.00", retail_price: "$9.99" },
    { name: "Chrome Spyro", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/ChromeSpyro.png", game: "Spyro's Adventure", price: "$35.00", retail_price: "$9.99" },
    { name: "Blue Bash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/BlueBash.png", game: "Spyro's Adventure", price: "$28.00", retail_price: "$9.99" },
    { name: "Sidekick Whisper Elf", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SidekicksWhisperElf.png", game: "Spyro's Adventure", price: "$10.00", retail_price: "Promo Only" },
    { name: "Sidekick Trigger Snappy", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SidekicksTriggerSnappy.png", game: "Spyro's Adventure", price: "$10.00", retail_price: "Promo Only" },
    { name: "Sidekick Terrabite", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SidekicksTerrabite.png", game: "Spyro's Adventure", price: "$10.00", retail_price: "Promo Only" },
    { name: "Sidekick Gill Runt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SidekicksGillRunt.png", game: "Spyro's Adventure", price: "$10.00", retail_price: "Promo Only" },
    { name: "Legendary Trigger Happy", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/LegendaryTriggerHappy.png", game: "Spyro's Adventure", price: "$9.00", retail_price: "$9.99" },
    { name: "Legendary Spyro", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/LegendarySpyro.png", game: "Spyro's Adventure", price: "$9.50", retail_price: "$9.99" },
    { name: "Legendary Chop Chop", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/LegendaryChopChop.png", game: "Spyro's Adventure", price: "$10.00", retail_price: "$9.99" },
    { name: "Legendary Bash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/LegendaryBash.png", game: "Spyro's Adventure", price: "$11.00", retail_price: "$9.99" },
    { name: "Dark Spyro", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DarkSpyro.png", game: "Spyro's Adventure", price: "$7.50", retail_price: "$9.99" },
    { name: "Winged Boots", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/WingedBoots.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$4.99" },
    { name: "Volcanic Vault", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/VolcanicVault.png", game: "Spyro's Adventure", price: "$8.00", retail_price: "$7.99" },
    { name: "Time Twister", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/TimeTwister.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$4.99" },
    { name: "Sparx Dragonfly", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SparxDragonfly.png", game: "Spyro's Adventure", price: "$4.50", retail_price: "$4.99" },
    { name: "Sky Iron Shield", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/SkyIronShield.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$4.99" },
    { name: "Pirate Ship", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/PirateShip.png", game: "Spyro's Adventure", price: "$7.50", retail_price: "$19.99" },
    { name: "Empire of Ice", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/EmpireOfIce.png", game: "Spyro's Adventure", price: "$7.50", retail_price: "$19.99" },
    { name: "Hidden Treasure", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/HiddenTreasure.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$4.99" },
    { name: "Healing Elixir", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/HealingElixir.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$4.99" },
    { name: "Ghost Swords", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/GhostSwords.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$4.99" },
    { name: "Dragon's Peak", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DragonsPeak.png", game: "Spyro's Adventure", price: "$8.50", retail_price: "$19.99" },
    { name: "Darklight Crypt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/DarklightCrypt.png", game: "Spyro's Adventure", price: "$8.50", retail_price: "$9.99" },
    { name: "Anvil Rain", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Spyros/AnvilRain.png", game: "Spyro's Adventure", price: "$4.00", retail_price: "$4.99" }
  ],

  "Giants": [
    { name: "Bouncer", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Bouncer.png" },
    { name: "Crusher", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Crusher.png" },
    { name: "Eye-Brawl", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/EyeBrawl.png" },
    { name: "Hot Head", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/HotHead.png" },
    { name: "Ninjini", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Ninjini.png" },
    { name: "Swarm", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Swarm.png" },
    { name: "Thumpback", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Thumpback.png" },
    { name: "Tree Rex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/TreeRex.png" },
    // Series 1 Figures
    { name: "Chill", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Chill.png" },
    { name: "Flashwing", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Flashwing.png" },
    { name: "Fright Rider", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/FrightRider.png" },
    { name: "Hot Dog", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/HotDog.png" },
    { name: "Jet-Vac", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/JetVac.png" },
    { name: "Pop Fizz", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PopFizz.png" },
    { name: "Shroomboom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Shroomboom.png" },
    { name: "Sprocket", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Sprocket.png" },

    // Base Game Figures (Series 2)
    { name: "Bash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Bash.png" },
    { name: "Chop Chop", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/ChopChop.png" },
    { name: "Cynder", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Cynder.png" },
    { name: "Double Trouble", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/DoubleTrouble.png" },
    { name: "Drill Sergeant", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/DrillSergeant.png" },
    { name: "Drobot", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Drobot.png" },
    { name: "Eruptor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Eruptor.png" },
    { name: "Flameslinger", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Flameslinger.png" },
    { name: "Gill Grunt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GillGrunt.png" },
    { name: "Hex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Hex.png" },
    { name: "Ignitor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Ignitor.png" },
    { name: "Lightning Rod", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/LightningRod.png" },
    { name: "Prism Break", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PrismBreak.png" },
    { name: "Slam Bam", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SlamBam.png" },
    { name: "Sonic Boom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SonicBoom.png" },
    { name: "Spyro", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Spyro.png" },
    { name: "Stealth Elf", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/StealthElf.png" },
    { name: "Stump Smash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/StumpSmash.png" },
    { name: "Terrafin", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Terrafin.png" },
    { name: "Trigger Happy", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/TriggerHappy.png" },
    { name: "Whirlwind", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Whirlwind.png" },
    { name: "Wrecking Ball", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/WreckingBall.png" },
    { name: "Zap", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Zap.png" },
    { name: "Zook", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/Zook.png" },

    // LightCore Figures
    { name: "Chill LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/ChillLightCore.png" },
    { name: "Drobot LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/DrobotLightCore.png" },
    { name: "Eruptor LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/EruptorLightCore.png" },
    { name: "Hex LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/HexLightCore.png" },
    { name: "Jet-Vac LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/JetVacLightCore.png" },
    { name: "Pop Fizz LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PopFizzLightCore.png" },
    { name: "Prism Break LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PrismBreakLightCore.png" },
    { name: "Shroomboom LightCore", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/ShroomboomLightCore.png" },
    // Variants and Chase Variants
    { name: "Dragonfire Cannon", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/DragonfireCannon.png" },
    { name: "Golden Dragonfire Cannon", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GoldenDragonfireCannon.png" },
    { name: "Platinum Treasure Chest", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PlatinumTreasureChest.png" },
    { name: "Scorpion Striker Catapult", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/ScorpionStrikerCatapult.png" },

    // Skylanders Giants In-Game Variants
    { name: "Gnarly Tree Rex", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GnarlyTreeRex.png" },
    { name: "Granite Crusher", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GraniteCrusher.png" },
    { name: "Jade Flashwing", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/JadeFlashwing.png" },
    { name: "Legendary Bouncer", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/LegendaryBouncer.png" },
    { name: "Legendary LightCore Chill", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/LegendaryLightCoreChill.png" },
    { name: "Legendary Ignitor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/LegendaryIgnitor.png" },
    { name: "Legendary Jet-Vac", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/LegendaryJetVac.png" },
    { name: "Legendary Slam Bam", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/LegendarySlamBam.png" },
    { name: "Legendary Stealth Elf", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/LegendaryStealthElf.png" },
    { name: "Molten Hot Dog", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/MoltenHotDog.png" },
    { name: "Polar Whirlwind", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PolarWhirlwind.png" },
    { name: "Punch Pop Fizz", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PunchPopFizz.png" },
    { name: "Royal Double Trouble", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/RoyalDoubleTrouble.png" },
    { name: "Scarlet Ninjini", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/ScarletNinjini.png" },

    // Sidekicks
    { name: "Sidekick Barkley", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SidekickBarkley.png" },
    { name: "Sidekick Eye Small", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SidekickEyeSmall.png" },
    { name: "Sidekick Mini Jini", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SidekickMiniJini.png" },
    { name: "Sidekick Thumpling", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SidekickThumpling.png" },

    // Skylanders Giants Chase Variants
    { name: "Double Trouble 1.5", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/DoubleTrouble1.5.png" },
    { name: "E3 Hot Dog", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/E3HotDog.png" },
    { name: "Employee Edition LightCore Prism Break", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/EmployeeEditionLightCorePrismBreak.png" },
    { name: "Glow in the Dark Cynder", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GlowInTheDarkCynder.png" },
    { name: "Glow-in-the-Dark Fright Rider", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GlowInTheDarkFrightRider.png" },
    { name: "Glow in the Dark Sonic Boom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GlowInTheDarkSonicBoom.png" },
    { name: "Golden Flameslinger", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/GoldenFlameslinger.png" },
    { name: "Halloween Fright Rider", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/HalloweenFrightRider.png" },
    { name: "Metallic Blue Chop Chop", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/MetallicBlueChopChop.png" },
    { name: "Metallic Green Gill Grunt", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/MetallicGreenGillGrunt.png" },
    { name: "Metallic Green Shroomboom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/MetallicGreenShroomboom.png" },
    { name: "Metallic Purple Eye-Brawl", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/MetallicPurpleEyeBrawl.png" },
    { name: "Metallic Purple Lightning Rod", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/MetallicPurpleLightningRod.png" },
    { name: "Metallic Purple Wrecking Ball", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/MetallicPurpleWreckingBall.png" },
    { name: "Pumpkin Eye-Brawl", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/PumpkinEyeBrawl.png" },
    { name: "Sparkle Hot Head", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SparkleHotHead.png" },
    { name: "Sparkle Sonic Boom", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SparkleSonicBoom.png" },
    { name: "Sparkle Sprocket", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/SparkleSprocket.png" },
    { name: "Stone Whirlwind", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/StoneWhirlwind.png" },
    { name: "Stone Zook", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/StoneZook.png" },
    { name: "White Flocked Eruptor", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/WhiteFlockedEruptor.png" },
    { name: "White Flocked LightCore Prism Break", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/WhiteFlockedLightCorePrismBreak.png" },
    { name: "White Flocked Stump Smash", image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Giants/WhiteFlockedStumpSmash.png" }
  ]
   "SWAP Force": [
    // Base SWAP Force Characters
    {
      name: "Blast Zone",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BlastZone.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Boom Jet",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BoomJet.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Doom Stone",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DoomStone.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Fire Kraken",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FireKraken.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Free Ranger",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FreeRanger.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Freeze Blade",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FreezeBlade.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Grilla Drilla",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GrillaDrilla.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Hoot Loop",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/HootLoop.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Magna Charge",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/MagnaCharge.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Night Shift",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/NightShift.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Rattle Shake",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/RattleShake.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Rubble Rouser",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/RubbleRouser.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Spy Rise",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SpyRise.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Stink Bomb",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/StinkBomb.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Trap Shadow",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/TrapShadow.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Wash Buckler",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/WashBuckler.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },

    // New (Series 1) Skylanders
    {
      name: "Bumble Blast - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BumbleBlast.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Bumble Blast",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BumbleBlast.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Countdown - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Countdown.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Countdown",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Countdown.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Dune Bug - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DuneBug.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Dune Bug",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DuneBug.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Fryno - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Fryno.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Fryno",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Fryno.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Grim Creeper - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GrimCreeper.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Grim Creeper",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GrimCreeper.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Pop Thorn - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Popthorn.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Pop Thorn",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Popthorn.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Punk Shock - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/PunkShock.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Punk Shock",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/PunkShock.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Rip Tide - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Riptide.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Rip Tide",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Riptide.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Roller Brawl - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/RollerBrawl.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Roller Brawl",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/RollerBrawl.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Scorp - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Scorp.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Scorp",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Scorp.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Scratch - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Scratch.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Scratch",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Scratch.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Slobber Tooth - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SlobberTooth.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Slobber Tooth",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SlobberTooth.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Smolderdash - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Smolderdash.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Smolderdash",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Smolderdash.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Star Strike - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/StarStrike.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Star Strike",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/StarStrike.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Wind Up - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/WindUp.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Wind Up",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/WindUp.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Zoo Lou - Series 1",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/ZooLou.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Zoo Lou",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/ZooLou.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },

    // Returning (Series 2 and Series 3) Skylanders
    {
      name: "Gill Grunt - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/AnchorsAwayGillGrunt.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Anchors Away Gill Grunt (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/AnchorsAwayGillGrunt.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Trigger Happy - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BigBangTriggerHappy.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Big Bang Trigger Happy (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BigBangTriggerHappy.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Chill - Series 2",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BlizzardChill.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Blizzard Chill (S2)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BlizzardChill.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Hot Dog - Series 2",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FireBoneHotDog.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Fire Bone Hot Dog (S2)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FireBoneHotDog.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Sprocket - Series 2",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/HeavyDutySprocket.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Heavy Duty Sprocket (S2)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/HeavyDutySprocket.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Whirlwind - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/HornBlastWhirlwind.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Horn Blast Whirlwind (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/HornBlastWhirlwind.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Prism Break - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/HyperBeamPrismBreak.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Hyper Beam Prism Break (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/HyperBeamPrismBreak.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Terrafin - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/KnockoutTerrafin.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Knockout Terrafin (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/KnockoutTerrafin.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Eruptor - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LavaBarfEruptor.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Lava Barf Eruptor (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LavaBarfEruptor.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Spyro - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/MegaRamSpyro.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Mega Ram Spyro (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/MegaRamSpyro.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Stealth Elf - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/StealthElf.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Ninja Stealth Elf (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/StealthElf.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Cynder - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/PhantomCynder.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Phantom Cynder (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/PhantomCynder.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Pop Fizz - Series 2",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SuperGulpPopFizz.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Super Gulp Pop Fizz (S2)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SuperGulpPopFizz.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Camo - Series 2",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/ThornHornCamo.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Thorn Horn Camo (S2)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/ThornHornCamo.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Jet-Vac - Series 2",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/TurboJetVac.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Turbo Jet-Vac (S2)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/TurboJetVac.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Chop Chop - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/TwinBladeChopChop.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Twin Blade Chop Chop (S3)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/TwinBladeChopChop.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },

    // LightCore Skylanders
    {
      name: "LightCore Bumble Blast",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreBumbleBlast.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Bumble Blast LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreBumbleBlast.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "LightCore Countdown",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreCountdown.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Countdown LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreCountdown.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "LightCore Flashwing",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreFlashwing.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Flashwing LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreFlashwing.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "LightCore Grim Creeper",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreGrimCreeper.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Grim Creeper LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreGrimCreeper.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "LightCore Smolderdash",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreSmoulderdash.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Smolderdash LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreSmoulderdash.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "LightCore Star Strike",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreStarStrike.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Star Strike LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreStarStrike.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "LightCore Warnado",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreWarnado.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Warnado LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreWarnado.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "LightCore Wham-Shell",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreWhamShell.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Wham-Shell LightCore",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LightCoreWhamShell.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },

    // SWAP Force Magic Items
    {
      name: "Arkeyan Crossbow",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/ArkeyanCrossbow.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Battle Hammer",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/BattleHammer.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Fiery Forge",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FieryForge.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Groove Machine",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GrooveMachine.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Platinum Sheep",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/PlatinumSheep.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Sheep Wreck Island",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SheepWreckIsland.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Sky Diamond",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SkyDiamond.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Tower of Time",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/TowerOfTime.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    // The user did not provide a "UFOHat.png" file, so you can remove or leave it as-is:
    {
      name: "UFO Hat",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/UFOHat.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },

    // Skylanders SWAP Force In-Game Variants
    {
      name: "Dark Blast Zone",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DarkBlastZone.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Dark Slobber Tooth",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DarkSlobberTooth.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Dark Mega Ram Spyro - Series 3",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DarkSpyro.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Dark Spyro",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DarkSpyro.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Dark Stealth Elf",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DarkStealthElf.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Dark Wash Buckler",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/DarkWashBuckler.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Enchanted Hoot Loop",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/EnchantedHootLoop.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Enchanted LightCore Star Strike",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/EnchantedStarStrike.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Jade Fire Kraken",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/JadeFireKraken.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Jolly Bumble Blast",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Jolly-BumbleBlast.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Kickoff Countdown",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/KickoffCountdown.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Legendary Free Ranger",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LegendaryFreeRanger.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Legendary LightCore Grim Creeper",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LegendaryLightCoreGrimCreeper.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Legendary Night Shift",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LegendaryNightShift.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Legendary Zoo Lou",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/LegendaryZooLou.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Nitro Freeze Blade",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/NitroFreezeBlade.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Nitro Magna Charge",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/NitroMagnaCharge.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Quick Draw Rattle Shake",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/QuickdrawRattleShake.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Springtime Trigger Happy",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SpringtimeTriggerHappy.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Volcanic Eruptor",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/VolcanicEruptor.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },

    // Skylanders SWAP Force Chase Variants
    {
      name: "Bronze and Silver Trap Shadow",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Bronze&SilverTrapShadow.jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Bronze & Silver Trap Shadow",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Bronze&SilverTrapShadow.jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Flocked Springtime Trigger Happy",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FlockedSpringtimeTriggerHappy.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Green Flame Frito-Lay Hot Dog",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FritoLayHotDog%20(Green).jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Frito-Lay Hot Dog (Green)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FritoLayHotDog%20(Green).jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Purple Flame Frito-Lay Hot Dog",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FritoLayHotDog(Purple).jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Frito-Lay Hot Dog (Purple)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FritoLayHotDog(Purple).jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Red Flame Frito-Lay Hot Dog",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FritoLayHotDog(red).jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Frito-Lay Hot Dog (Red)",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/FritoLayHotDog(red).jpg",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Gold and Bronze Doom Stone",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GoldBronzeDoomStone.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Gold & Bronze Doom Stone",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GoldBronzeDoomStone.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Gold Fire Kraken",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GoldFireKraken.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Gold Wash Buckler",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GoldWashBuckler.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Green Chop Chop",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GreenChopChop.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Green Rip Tide",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GreenRipTide.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Green Scorp",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/GreenScorp.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Heavy Metal Sprocket",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/ArmySprocket.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Metallic Red Dune Bug",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/MetallicRedDuneBug.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Silver and Gold Stink Bomb",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SilverStinkGoldBomb.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Silver & Gold Stink Bomb",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/SilverStinkGoldBomb.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    },
    {
      name: "Snowderdash",
      image: "https://raw.githubusercontent.com/lb1227/Skylanders-Site/master/Snowderdash.png",
      game: "SWAP Force",
      price: "$4.00",
      retail_price: "$7.99"
    }
  ]
};
