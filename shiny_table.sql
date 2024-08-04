use hrdb2019;
CREATE TABLE `shiny_table` (
  `id` VARCHAR(1024) NULL,
  `name` VARCHAR(1024) NULL,
  `img` VARCHAR(1024) NULL
);

INSERT INTO `shiny_table` (`id`,`name`,`img`)
VALUES
('1','Bulbasaur','../pokemon_icons/pokemon_icon_001_00_shiny.png'),
('2','Ivysaur','../pokemon_icons/pokemon_icon_002_00_shiny.png'),
('3','Venusaur','../pokemon_icons/pokemon_icon_003_00_shiny.png'),
('3','Venusaur(M)','../pokemon_icons/pokemon_icon_003_51_shiny.png'),
('','',''),
('4','Charmander','../pokemon_icons/pokemon_icon_004_00_shiny.png'),
('5','Charmeleon','../pokemon_icons/pokemon_icon_005_00_shiny.png'),
('6','Charizard','../pokemon_icons/pokemon_icon_006_00_shiny.png'),
('6','Charizard(M-X)','../pokemon_icons/pokemon_icon_006_51_shiny.png'),
('6','Charizard(M-Y)','../pokemon_icons/pokemon_icon_006_52_shiny.png'),
('7','Squirtle','../pokemon_icons/pokemon_icon_007_00_shiny.png'),
('8','Wartortle','../pokemon_icons/pokemon_icon_008_00_shiny.png'),
('9','Blastoise','../pokemon_icons/pokemon_icon_009_00_shiny.png'),
('9','Blastoise(M)','../pokemon_icons/pokemon_icon_009_51_shiny.png'),
('','',''),
('10','Caterpie','../pokemon_icons/pokemon_icon_010_00_shiny.png'),
('11','Metapod','../pokemon_icons/pokemon_icon_011_00_shiny.png'),
('12','Butterfree','../pokemon_icons/pokemon_icon_012_00_shiny.png'),
('','',''),
('','',''),
('13','Weedle','../pokemon_icons/pokemon_icon_013_00_shiny.png'),
('14','Kakuna','../pokemon_icons/pokemon_icon_014_00_shiny.png'),
('15','Beedrill','../pokemon_icons/pokemon_icon_015_00_shiny.png'),
('15','Beedrill(M)','../pokemon_icons/pokemon_icon_015_51_shiny.png'),
(NULL,NULL,NULL),
('16','Pidgey','../pokemon_icons/pokemon_icon_016_00_shiny.png'),
('17','Pidgeotto','../pokemon_icons/pokemon_icon_017_00_shiny.png'),
('18','Pidgeot','../pokemon_icons/pokemon_icon_018_00_shiny.png'),
('18','Pidgeot(M)','../pokemon_icons/pokemon_icon_018_51_shiny.png'),
(NULL,NULL,NULL),
('19','Ratata','../pokemon_icons/pokemon_icon_019_00_shiny.png'),
('20','Raticate','../pokemon_icons/pokemon_icon_020_00_shiny.png'),
('19','Ratata','../pokemon_icons/pokemon_icon_019_61_shiny.png'),
('20','Raticate','../pokemon_icons/pokemon_icon_020_61_shiny.png'),
(NULL,NULL,NULL),
('21','Spearow','../pokemon_icons/pokemon_icon_021_00_shiny.png'),
('22','Fearow','../pokemon_icons/pokemon_icon_022_00_shiny.png'),
('23','Ekans','../pokemon_icons/pokemon_icon_023_00_shiny.png'),
('24','Arbok','../pokemon_icons/pokemon_icon_024_00_shiny.png'),
(NULL,NULL,NULL),
('25','Pikachu','../pokemon_icons/pokemon_icon_025_00_shiny.png'),
('26','Raichu','../pokemon_icons/pokemon_icon_026_00_shiny.png'),
('26','Raichu','../pokemon_icons/pokemon_icon_026_61_01_shiny.png'),
(NULL,NULL,NULL),
(NULL,NULL,NULL),
('27','Sandshrew','../pokemon_icons/pokemon_icon_027_00_shiny.png'),
('28','Sandslash','../pokemon_icons/pokemon_icon_028_00_shiny.png'),
('27','Sandshrew','../pokemon_icons/pokemon_icon_027_61_shiny.png'),
('28','Sandslash','../pokemon_icons/pokemon_icon_028_61_shiny.png'),
(NULL,NULL,NULL),
('29','Nidoran♀','../pokemon_icons/pokemon_icon_029_00_shiny.png'),
('30','Nidorina','../pokemon_icons/pokemon_icon_030_00_shiny.png'),
('31','Nidoqueen','../pokemon_icons/pokemon_icon_031_00_shiny.png');

select * from shiny_table;
drop table shiny_table;