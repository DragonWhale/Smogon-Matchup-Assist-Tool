const teamstring = `つねもり,13,Excadrill,Zapdos,Urshifu,Dragonite,Glastrier,Tapu_Fini,1
Ciela,13,Hippowdon,Zapdos,Urshifu,Dragapult,Porygon2,Tapu_Fini,1
ふぐたたらお,13,Urshifu,Ferrothorn,Dragonite,Mimikyu,Rhyperior,Tapu_Fini,1
みすと,13,Zapdos,Swampert,Urshifu,Mimikyu,Kartana,Cinderace,1
Grapha,13,Urshifu,Porygon2,Toxapex,Zapdos,Dragonite,Mimikyu,1
Maya,13,Tyranitar,Landorus-Therian,Tapu_Fini,Ferrothorn,Zapdos,Urshifu,1
レイラ,13,Nihilego,Urshifu,Dragonite,Excadrill,Tapu_Fini,Zapdos,1
メイル,13,Dragapult,Urshifu,Porygon2,Toxapex,Excadrill,Zapdos,1
Aphrodisiac,12,Gyarados,Dracozolt,Urshifu,Zapdos,Porygon2,Tapu_Fini,1
KMC,12,Gyarados,Hippowdon,Urshifu,Zapdos,Porygon2,Kartana,1
Protean,12,Arctozolt,Magnezone,Rhyperior,Dragonite,Dracovish,Urshifu,1
ユウティラ,12,Urshifu,Zapdos,Hippowdon,Nihilego,Porygon2,Pyukumuku,1
おーわぷわぷ,12,Cinderace,Zapdos,Ferrothorn,Landorus-Therian,Nihilego,Urshifu,1
コベニ,12,Kartana,Swampert,Zapdos,Tapu_Fini,Garchomp,Urshifu,1
リョウ,12,Hippowdon,Zapdos,Ferrothorn,Nihilego,Urshifu,Mimikyu,1
びゃくや,12,Tapu_Fini,Moltres,Tyranitar,Mamoswine,Dracovish,Urshifu,1
もくず,12,Zapdos,Rhyperior,Tapu_Fini,Kartana,Mimikyu,Urshifu,1
スカーレット,12,Zapdos,Ferrothorn,Hippowdon,Naganadel,Urshifu,Dracovish,1
マミ,12,Toxapex,Ferrothorn,Urshifu,Nihilego,Zapdos,Dracovish,1
しおこうじ,12,Zapdos,Rhyperior,Ferrothorn,Toxapex,Urshifu,Mimikyu,1
Grapha,12,Dragonite,Zapdos,Dracovish,Porygon2,Mimikyu,Urshifu,1
ikura,12,Zapdos,Dragapult,Tapu_Fini,Urshifu,Porygon2,Dracovish,1
メアリ,12,Urshifu,Ferrothorn,Zapdos,Rhyperior,Cinderace,Dragapult,1
ミカ,12,Hippowdon,Nihilego,Urshifu,Kartana,Dracovish,Zapdos,1
Terhal,12,Urshifu,Porygon2,Toxapex,Dracovish,Zapdos,Excadrill,1
EVA3号机,12,Darmanitan-Galar,Tapu_Fini,Landorus-Therian,Zapdos,Ferrothorn,Urshifu,1
グラシアル,13,Arcanine,Dragapult,Urshifu,Togekiss,Rhyperior,Magnezone,0
ゆうき,13,Swampert,Zapdos,Nihilego,Urshifu,Cinderace,Mimikyu,0
Main*Heroine,13,Dragapult,Urshifu,Toxapex,Chansey,Sylveon,Celesteela,0
あんじゅ,13,Tyranitar,Excadrill,Zapdos,Mimikyu,Urshifu,Pheromosa,0
ゆき,13,Glastrier,Urshifu,Excadrill,Zapdos,Porygon2,Dragonite,0
まろん,13,Urshifu,Mimikyu,Zapdos,Excadrill,Whimsicott,Heatran,0
れみ,13,Zapdos,Urshifu,Tapu_Fini,Chansey,Hippowdon,Dragapult,0
∀ΒCAA∀,13,Urshifu,Mimikyu,Porygon2,Cinderace,Excadrill,Zapdos,0
アズカバン,13,Urshifu,Porygon2,Zapdos,Mimikyu,Excadrill,Rillaboom,0
あまんがす,13,Zapdos,Urshifu,Rhyperior,Garchomp,Mimikyu,Ferrothorn,0
あずき,13,Urshifu,Thundurus-Therian,Dragonite,Porygon2,Kartana,Heatran,0
ナターシャ,13,Dragapult,Urshifu,Hippowdon,Ferrothorn,Nihilego,Cinderace,0
wizard,13,Urshifu,Clefable,Arcanine,Zapdos,Excadrill,Arctozolt,0
きふねみお,13,Urshifu,Zapdos,Nihilego,Rillaboom,Garchomp,Mimikyu,0
メアリ,13,Urshifu,Ferrothorn,Zapdos,Rhyperior,Cinderace,Tapu_Fini,0
りらこぽけ♪,13,Cinderace,Magnezone,Dracovish,Zapdos,Glastrier,Urshifu,0
なつもん,12,Azumarill,Urshifu,Zapdos,Diggersby,Jynx,Cinderace,0
なつの,12,Zapdos,Urshifu,Rillaboom,Darmanitan-Galar,Dragonite,Excadrill,0
ベトレイヤー,12,Urshifu,Dragonite,Rillaboom,Darmanitan-Galar,Excadrill,Zapdos,0
E.D.I.T.H.,12,Hippowdon,Zapdos,Ferrothorn,Nihilego,Urshifu,Dragapult,0
きふねみお,12,Urshifu,Zapdos,Nihilego,Rillaboom,Cinderace,Mimikyu,0`

var teamlist = teamstring.split('\n');

for (var i = 0; i < teamlist.length; i++) {
  teamlist[i] = teamlist[i].split(',');
}
