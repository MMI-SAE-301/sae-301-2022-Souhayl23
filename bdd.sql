--
-- code pour la création des tables
--
create table Montre (
id uuid not null default
uuid_generate_v4() ,
écran text,
cadran_intérieur text,
cadran_exterrieur text,
bracelet text,
Commander boolean not null default
false,
utilisateur uuid references auth.users
not null default uid(),
primary key (id) ) ;

create table Matériaux(
id_matériaux uuid not null default
uuid_generate_v4() ,
libellé varchar,
URL varchar,
primary key (id_matériaux) ) ;
--
-- code pour la création des vues
--
CREATE VIEW allMatériaux as
SELECT *
FROM "Matériaux";

create VIEW allAcier as
select "Montre".*
from "Matériaux", "Montre"
where "Matériaux".id_matériaux = "Montre".id_mat
and "Matériaux"."libellé" = 'Acier';


create VIEW allPolyester as
select "Montre".*
from "Matériaux", "Montre"
where "Matériaux".id_matériaux = "Montre".id_mat
and "Matériaux"."libellé" = 'Polyester';



--
-- code pour la création des policies
--
BEGIN;
  ALTER POLICY "Enable insert for authenticated users only" ON "public"."Montre" WITH CHECK (true);
COMMIT;

BEGIN;
  ALTER POLICY "Enable read access for all users" ON "public"."Montre" USING (true);
COMMIT;

BEGIN;
  ALTER POLICY "Enable update for users based on email" ON "public"."Montre" WITH CHECK ((uid() IN ( SELECT Montre_1.utilisateur AS id_user FROM Montre Montre_1)));
COMMIT;
