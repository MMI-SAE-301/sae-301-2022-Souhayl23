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

--
-- code pour la création des vues
--




--
-- code pour la création des policies
--
BEGIN;
  ALTER POLICY "Enable insert for authenticated users only" ON "public"."montre" WITH CHECK (true);
COMMIT;

BEGIN;
  ALTER POLICY "Enable read access for all users" ON "public"."montre" USING (true);
COMMIT;

BEGIN;
  ALTER POLICY "Enable update for users based on email" ON "public"."montre" WITH CHECK ((uid() IN ( SELECT montre_1.utilisateur AS id_user FROM montre montre_1)));
COMMIT;
