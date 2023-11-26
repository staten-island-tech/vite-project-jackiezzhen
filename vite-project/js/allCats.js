
const allCats = [
  //  Normal Cats
  {
    base: "Cat",
    evolved: "Macho Cat",
    true: "Mohawk Cat",
    type: ["None"],
    attack: "Single",
    rarity: ["Normal Cats"],
    baseUrl: "Cat",
    evolvedUrl: "Macho_cat",
    trueUrl: "Mohawk_cat",
  },
  {
    base: "Tank Cat",
    evolved: "Wall Cat",
    true: "Eraser Cat",
    type: ["None"],
    attack: "Area",
    rarity: ["Normal Cats"],
    baseUrl: "Tank_cat",
    evolvedUrl: "Wall_cat",
    trueUrl: "Eraser_cat",
  },
  {
    base: "Axe Cat",
    evolved: "Brave Cat",
    true: "Dark Cat",
    type: ["Red"],
    attack: "Single",
    rarity: ["Normal Cats"],
    baseUrl: "Axe_cat",
    evolvedUrl: "Brave_cat",
    trueUrl: "Dark_cat",
  },
  {
    base: "Gross Cat",
    evolved: "Sexy Legs Cat",
    true: "Macho Legs Cat",
    type: ["Floating"],
    attack: "Single",
    rarity: ["Normal Cats"],
    baseUrl: "Gross_cat",
    evolvedUrl: "Sexy_legs_cat",
    trueUrl: "Macho_legs_cat",
  },
  {
    base: "Cow Cat",
    evolved: "Giraffe Cat",
    true: "Lion Cat",
    type: ["None"],
    attack: "Single",
    rarity: ["Normal Cats"],
    baseUrl: "Cow_cat",
    evolvedUrl: "Giraffe_cat",
    trueUrl: "Lion_cat",
  },
  {
    base: "Bird Cat",
    evolved: "UFO Cat",
    true: "The Flying Cat",
    type: ["Angel"],
    attack: "Area",
    rarity: ["Normal Cats"],
    baseUrl: "Bird_cat",
    evolvedUrl: "UFO_cat",
    trueUrl: "The_flying_cat",
  },
  {
    base: "Fish Cat",
    evolved: "Whale Cat",
    true: "Island Cat",
    type: ["Red"],
    attack: "Single",
    rarity: ["Normal Cats"],
    baseUrl: "Fish_cat",
    evolvedUrl: "Whale_cat",
    trueUrl: "Island_cat",
  },
  {
    base: "Lizard Cat",
    evolved: "Dragon Cat",
    true: "King Dragon Cat",
    type: ["Angel"],
    attack: "Single",
    rarity: ["Normal Cats"],
    baseUrl: "Lizard_cat",
    evolvedUrl: "Dragon_cat",
    trueUrl: "King_dragon_cat",
  },
  {
    base: "Titan Cat",
    evolved: "Mythical Titan Cat",
    true: "Jamiera Cat",
    type: [
      "Red",
      "Floating",
      "Black",
      "Angel",
      "Alien",
      "Zombie",
      "Aku",
      "Relic",
      "Traitless",
    ],
    attack: "Area",
    rarity: ["Normal Cats"],
    baseUrl: "Titan_cat",
    evolvedUrl: "Mythical_titan_cat",
    trueUrl: "Jamiera_cat",
  },
  //  Legend Cats/Special Cats
  {
    base: "Valkyrie Cat",
    evolved: "True Valkyrie Cat",
    true: "Holy Valkyrie Cat",
    type: ["Red",
    "Floating",
    "Black",
    "Angel",
    "Alien",
    "Zombie",
    "Aku",
    "Relic",
    "Traitless",],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl:
      "Valkyrie_cat",
    evolvedUrl:
      "True_valkyrie_cat",
    trueUrl:
      "Holy_valkyrie_cat",
  },
  {
    base: "Bahamut Cat",
    evolved: "Crazed Bahamut Cat",
    true: "Awakened Bahamut Cat",
    type: ["None"],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Bahamut_cat",
    evolvedUrl: "Crazy_bahamut_cat",
    trueUrl: "Awwakened_bahamut_cat",
  },
  {
    base: "Ururun Wolf",
    evolved: "Ururun Cat",
    true: "Awakened Ururun",
    type: ["Red",
    "Floating",
    "Black",
    "Angel",
    "Alien",
    "Zombie",
    "Aku",
    "Relic",
    "Traitless",],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Ururun_wolf",
    evolvedUrl: "Ururun_cat",
    trueUrl: "Awakened_ururun",
  },
  {
    base: "Red Riding Mina",
    evolved: "Crimson Mina",
    true: "Awakened Mina",
    type: ["Relic"],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Red_riding_mina",
    evolvedUrl: "Crimson_mina",
    trueUrl: "Awakened_mina",
  },
  {
    base: "Miyamoku Musashi",
    evolved: "Legendary Musashi",
    true: "Awakened Musashi",
    type: ["Relic"],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Miyamoku_musashi",
    evolvedUrl: "Legendary_musashi",
    trueUrl: "Awakened_musashi",
  },










  
  {
    base: "Jagando Jr.",
    evolved: "Lord of Ruin Jagando Jr.",
    true: null,
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Jagando_Jr",
    evolvedUrl: "Lord_of_ruin_jagando_jr",
    trueUrl: null,
  },
  {
    base: "Urs & Fenrir",
    evolved: "Urs & Minka",
    true: "Awakened Urs",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Urs_&_fenrir",
    evolvedUrl: "Urs_&_minka",
    trueUrl: "Awakened_urs",
  },
  {
    base: "Elder Mask Doron",
    evolved: "Cat Mask Doron",
    true: "Awakened Doron",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Elder_mask_doron",
    evolvedUrl: "Cat_mask_doron",
    trueUrl: "Awakened_doron",
  },
  {
    base: "Elder Beast Naala",
    evolved: "Storm Beast Naala",
    true: "Awakened Naala",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Cats", "Special Cats"],
    baseUrl: "Elder_Beast_Naala",
    evolvedUrl: "Storm_beast_naala",
    trueUrl: "Awakened_naala",
  },
  //  Special Cats
  {
    base: "Ninja Cat",
    evolved: "Ninja Frog Cat",
    true: "Flying Ninja Cat",
    type: ["Red"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Ninja_Cat",
    evolvedUrl: "Ninja_frog_cat",
    trueUrl: "Flying_ninja_cat",
  },
  {
    base: "Sumo Cat",
    evolved: "Madame Sumo",
    true: "Riceball Cat",
    type: ["White"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Sumo_cat",
    evolvedUrl: "Madame_sumo",
    trueUrl: "Riceball_cat",
  },
  {
    base: "Samurai Cat",
    evolved: "Sword Master Cat",
    true: "Elemental Duelist Cat",
    type: ["Black"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Samurai_Cat",
    evolvedUrl: "Sword_master_cat",
    trueUrl: "Elemental_duelist_cat",
  },
  {
    base: "Zombie Cat",
    evolved: "Necromancer Cat",
    true: "Zombie King Cat",
    type: ["Zombie"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Zombie_Cat",
    evolvedUrl: "Necromancer_cat",
    trueUrl: "Zombie_king_cat",
  },
  {
    base: "Cats in a Box",
    evolved: "Box Cats",
    true: "Heavy Assault C.A.T.",
    type: ["White"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Cats_in_a_box",
    evolvedUrl: "Box_cats",
    trueUrl: "Heavy_assault_cat",
  },
  {
    base: "Boogie Cat",
    evolved: "Samba Cat",
    true: "Gato Amigo",
    type: ["White"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Boogie_cat",
    evolvedUrl: "Samba_cat",
    trueUrl: "Gato_amigo",
  },
  {
    base: "Skirt Cat",
    evolved: "Panties Cat",
    true: "The White Rabbit",
    type: ["White"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Skirt_cat",
    evolvedUrl: "Panties_cat",
    trueUrl: "The_white_rabbit",
  },
  {
    base: "Mr.",
    evolved: "Hyper Mr.",
    true: "Ultimate Bondage Cat",
    type: ["White"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Mr",
    evolvedUrl: "Hyper_mr",
    trueUrl: "Ultimate_bondage_cat",
  },
  {
    base: "Bondage Cat",
    evolved: "Dom Cat",
    true: "Masochist Cat",
    type: ["White"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Bondage_cat",
    evolvedUrl: "Dom_cat",
    trueUrl: "Masochist_cat",
  },
  {
    base: "Tricycle Cat",
    evolved: "Bicycle Cat",
    true: "Unicycle Cat",
    type: ["Metal"],
    attack: "Single",
    rarity: ["Special Cats"],
    baseUrl: "Tricycle_cat",
    evolvedUrl: "Bicycle_cat",
    trueUrl: "Unicycle_cat",
  },
  //  Rare Cats
  {
    base: "Pogo Cat",
    evolved: "Masai Cat",
    true: "Jiangshi Cat",
    type: ["None"],
    attack: "Single",
    rarity: ["Rare Cats"],
    baseUrl: "Pogo_cat",
    evolvedUrl: "Masai_cat",
    trueUrl: "Jiangshi_cat",
  },
  {
    base: "Wheel Cat",
    evolved: "Solar Cat",
    true: "Chill Cat",
    type: ["Alien"],
    attack: "Area",
    rarity: ["Rare Cats"],
    baseUrl: "Wheel_Cat",
    evolvedUrl: "Solar_cat",
    trueUrl: "Chill_cat",
  },
  {
    base: "Salon Cat",
    evolved: "Paris Cat",
    true: "Cyborg Cat",
    type: ["None"],
    attack: "Area",
    rarity: ["Rare Cats"],
    baseUrl: "Salon_cat",
    evolvedUrl: "Paris_cat",
    trueUrl: "Cyborg_cat",
  },
  {
    base: "Jurassic Cat",
    evolved: "Jurassic Cat Sitter",
    true: "Catasaurus",
    type: ["None"],
    attack: "Single",
    rarity: ["Rare Cats"],
    baseUrl: "Jurassic_cat",
    evolvedUrl: "Jurassic_cat_sitter",
    trueUrl: "Catasaurus",
  },
  {
    base: "Viking Cat",
    evolved: "Thor Cat",
    true: "Maximum the Fighter",
    type: ["Red"],
    attack: "Single",
    rarity: ["Rare Cats"],
    baseUrl: "Viking_cat",
    evolvedUrl: "Thor_cat",
    trueUrl: "Maximum_the_fighter",
  },
  {
    base: "Pirate Cat",
    evolved: "Captain Cat",
    true: "Dread Pirate Catley",
    type: ["Red"],
    attack: "Single",
    rarity: ["Rare Cats"],
    baseUrl: "Pirate_cat",
    evolvedUrl: "Captain_cat",
    trueUrl: "Dread_pirate_catley",
  },
  {
    base: "Thief Cat",
    evolved: "Phantom Thief Cat",
    true: "Goemon Cat",
    type: ["None"],
    attack: "Single",
    rarity: ["Rare Cats"],
    baseUrl: "Thief_Cat",
    evolvedUrl: "Phantom_thief_cat",
    trueUrl: "Goemon_cat",
  },
  {
    base: "Bishop Cat",
    evolved: "Monk Cat",
    true: "Sanzo Cat",
    type: ["Floating"],
    attack: "Area",
    rarity: ["Rare Cats"],
    baseUrl: "Bishop_cat",
    evolvedUrl: "Monk_cat",
    trueUrl: "Sanzo_cat",
  },
  {
    base: "Wushu Cat",
    evolved: "Sifu Cat",
    true: "Shigong Cat",
    type: ["Zombie"],
    attack: "Single",
    rarity: ["Rare Cats"],
    baseUrl: "Wushu_Cat",
    evolvedUrl: "Sifu_cat",
    trueUrl: "Shigong_cat",
  },
  {
    base: "Kung Fu Cat X",
    evolved: "Drunken Master Cat X",
    true: "Iron Claw X",
    type: ["None"],
    attack: "Single",
    rarity: ["Rare Cats"],
    baseUrl: "Kung_fu_cat_x",
    evolvedUrl: "Drunken_master_cat_x",
    trueUrl: "Iron_claw_x",
  },
  //  Super Rare Cats
  {
    base: "Hip Hop Cat",
    evolved: "Dancer Cat",
    true: "Breakdancer Cat",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Hip_hop_cat",
    evolvedUrl: "Dancer_cat",
    trueUrl: "Cancan_cat",
  },
  {
    base: "Apple Cat",
    evolved: "iCat",
    true: "iCat",
    type: ["Red"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Apple_cat",
    evolvedUrl: "Icat",
    trueUrl: "Apple_catI",
  },
  {
    base: "Sushi Cat",
    evolved: "Sashimi Cat",
    true: "Roe Cat",
    type: ["Alien"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Sushi_cat",
    evolvedUrl: "Sashimi_cat",
    trueUrl: "Roe_cat",
  },
  {
    base: "Bodhisattva Cat",
    evolved: "Avalokitesvara Cat",
    true: "Megaphrodite",
    type: ["Angel"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Bodhisattva_cat",
    evolvedUrl: "Avalokitesvara_cat",
    trueUrl: "Megaphrodite",
  },
  {
    base: "Delinquent Cat",
    evolved: "Angry Delinquent Cat",
    true: "Dark Lazer",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Delinquent_cat",
    evolvedUrl: "Angry_delinquent_cat",
    trueUrl: "Dark_Lazer",
  },
  {
    base: "Bath Cat",
    evolved: "Sexy Bath Cat",
    true: "Hyakutaro",
    type: ["Red", "Black"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Bath_Cat",
    evolvedUrl: "Sexy_bath_cat",
    trueUrl: "Hyakutaro",
  },
  {
    base: "Juliet Cat",
    evolved: "Mademoiselle Cat",
    true: "Cataur",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Juliet_Cat",
    evolvedUrl: "Mademoiselle_cat",
    trueUrl: "Cataur",
  },
  {
    base: "Weightlifter Cat",
    evolved: "Ring Girl Cat",
    true: "Iron Claw",
    type: ["Metal"],
    attack: "Single",
    rarity: ["Super Rare"],
    baseUrl: "Weightlifter_cat",
    evolvedUrl: "Ring_girl_cat",
    trueUrl: "Iron_claw",
  },
  {
    base: "Figure Skating Cats",
    evolved: "Pairs Figure Skating Cats",
    true: "Dreamy Figure Skating Cats",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Super Rare"],
    baseUrl: "Figure_Skating_Cats",
    evolvedUrl: "Pairs_figure_skating_cats",
    trueUrl: "Dreamy_figure_skating_cats",
  },
  //  Uber Super Rare Cats
  {
    base: "Baby Cat",
    evolved: "Adult Cat",
    true: "Evil Cat",
    type: ["Metal"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Baby_cat",
    evolvedUrl: "Adult_cat",
    trueUrl: "Evil_cat",
  },
  {
    base: "Kuu",
    evolved: "Kuu Type γ",
    true: "Kuu Type Ω",
    type: ["Alien"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Kuu",
    evolvedUrl: "Kuu_type_γ",
    trueUrl: "Kuu_type_Ω",
  },
  {
    base: "Sakura Sonic",
    evolved: "Afterschool Sakura",
    true: "Sacred Blade Sakura",
    type: ["Netal"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Sakura_sonic",
    evolvedUrl: "Afterschool_sakura",
    trueUrl: "Sacred_blade_sakura",
  },
  {
    base: "Kai",
    evolved: "Kai Type μ",
    true: "Divine Kai",
    type: ["Black"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Kai",
    evolvedUrl: "Kai_type_μ",
    trueUrl: "Divine_kai",
  },
  {
    base: "Coppermine",
    evolved: "Coppermine Type κ",
    true: "Divine Coppermine",
    type: ["Floating"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Coppermine",
    evolvedUrl: "Coppermine_type_κ",
    trueUrl: "Divine_coppermine",
  },
  {
    base: "Kalisa",
    evolved: "Kalisa Type χ",
    true: "Divine Kalisa",
    type: ["Angel"],
    attack: "Single",
    rarity: ["Uber Super Rare"],
    baseUrl: "Kalisa",
    evolvedUrl: "Kalisa_type_χ",
    trueUrl: "Divine_kalisa",
  },
  {
    base: "Sanada Yukimura",
    evolved: "Wargod Yukimura",
    true: "Immortal Yukimura",
    type: ["Black"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Sanada_yukimura",
    evolvedUrl: "Wargod_yukimura",
    trueUrl: "Immortal_yukimura",
  },
  {
    base: "Warlock and Pierre",
    evolved: "Dark Merchant Babil",
    true: "Mad Doctor Klay",
    type: ["Floating", "Alien"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Warlock_and_pierre",
    evolvedUrl: "Dark_merchant_babil",
    trueUrl: "Mad_doctor_klay",
  },
  {
    base: "Akira",
    evolved: "Shadow Akira",
    true: "Inferno Akira",
    type: ["Alien"],
    attack: "Area",
    rarity: ["Uber Super Rare"],
    baseUrl: "Akira",
    evolvedUrl: "Shadow_akira",
    trueUrl: "Inferno_akira",
  },
  //  Legend Rare Cats
  {
    base: "Akuma",
    evolved: "Shin Akuma",
    true: "Oni Akuma",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Akuma",
    evolvedUrl: "Shin_akuma",
    trueUrl: "Oni_akuma",
  },
  {
    base: "Black Zeus",
    evolved: "Black Zeus Mk II",
    true: "Black Zeus Mk III",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Black_Zeus",
    evolvedUrl: "Black_Zeus_Mk_II",
    trueUrl: "Black_Zeus_Mk_III",
  },
  {
    base: "Doctor Heaven",
    evolved: "Doctor Heaven CC",
    true: "Doctor Heaven CC Mk II",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Doctor_Heaven",
    evolvedUrl: "Doctor_Heaven_CC",
    trueUrl: "Doctor_Heaven_CC_Mk_II",
  },
  {
    base: "Emperor Cat",
    evolved: "Emperor Cat CC",
    true: "Emperor Cat CC Mk II",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Emperor_Cat",
    evolvedUrl: "Emperor_Cat_CC",
    trueUrl: "Emperor_Cat_CC_Mk_II",
  },
  {
    base: "Gaia the Creator",
    evolved: "Gaia the Supreme",
    true: "Gaia the Merciful",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Gaia_the_Creator",
    evolvedUrl: "Gaia_the_Supreme",
    trueUrl: "Gaia_the_Merciful",
  },
  {
    base: "Headmistress Jeanne",
    evolved: "Headmistress Jeanne CC",
    true: "Headmistress Jeanne CC Mk II",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Headmistress_Jeanne",
    evolvedUrl: "Headmistress_Jeanne_CC",
    trueUrl: "Headmistress_Jeanne_CC_Mk_II",
  },
  {
    base: "High Lord Babel",
    evolved: "High Lord Babel CC",
    true: "High Lord Babel CC Mk II",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "High_Lord_Babel",
    evolvedUrl: "High_Lord_Babel_CC",
    trueUrl: "High_Lord_Babel_CC_Mk_II",
  },
  {
    base: "Kyosaka Nanaho",
    evolved: "Kyosaka Nanaho & Cat",
    true: "Kyosaka Nanaho & Cat CC",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Kyosaka_Nanaho",
    evolvedUrl: "Kyosaka_Nanaho_&_Cat",
    trueUrl: "Kyosaka_Nanaho_&_Cat_CC",
  },
  {
    base: "Legeluga",
    evolved: "Legelan Pasalan",
    true: "Awakened Legeluga",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Legeluga",
    evolvedUrl: "Legelan_Pasalan",
    trueUrl: "Awakened_Legeluga",
  },
  {
    base: "Lumina",
    evolved: "Luminalia",
    true: "Lumina-Nyanko",
    type: ["Alien", "Metal"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Lumina",
    evolvedUrl: "Luminalia",
    trueUrl: "Lumina-Nyanko",
  },
  {
    base: "Mighty Kristul Muu",
    evolved: "Mighty Glass Cat",
    true: "Mighty Kristul Nurse",
    type: ["Angel", "Metal"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Mighty_Kristul_Muu",
    evolvedUrl: "Mighty_Glass_Cat",
    trueUrl: "Mighty_Kristul_Nurse",
  },
  {
    base: "Mushashi Miyamoto",
    evolved: "Legendary Mushashi",
    true: "Awakened Mushashi",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Mushashi_Miyamoto",
    evolvedUrl: "Legendary_Mushashi",
    trueUrl: "Awakened_Mushashi",
  },
  {
    base: "Ushiwakamaru",
    evolved: "Ushiwakamaru CC",
    true: "Ushiwakamaru CC Mk II",
    type: ["Traitless"],
    attack: "Area",
    rarity: ["Legend Rare"],
    baseUrl: "Ushiwakamaru",
    evolvedUrl: "Ushiwakamaru_CC",
    trueUrl: "Ushiwakamaru_CC_Mk_II",
  },
  {
    base: "Wonder MOMOCO",
    evolved: "Cutie MOMOCO",
    true: null,
    type: ["Red", "Black", "Angel"],
    attack: "area",
    rarity: ["Legend Rare"],
    baseUrl: "Wonder_MOMOCO",
    evolvedUrl: "Cutie_MOMOCO",
    trueUrl: null,
  },
];

export {allCats};
