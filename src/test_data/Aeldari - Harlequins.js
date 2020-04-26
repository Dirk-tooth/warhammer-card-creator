export default `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<catalogue id="7d24-b92f-c5d5-3bf0" name="Aeldari - Harlequins" revision="35" battleScribeVersion="2.03" authorName="BSData Developers" authorContact="@WindstormSCR" authorUrl="https://discord.gg/KqPVhds" library="false" gameSystemId="28ec-711c-d87f-3aeb" gameSystemRevision="1" xmlns="http://www.battlescribe.net/schema/catalogueSchema">
  <publications>
    <publication id="7d24-b92f-pubN65537" name="Codex: Harlequins"/>
    <publication id="7d24-b92f-pubN72737" name="Chapter Approved 2017"/>
    <publication id="7d24-b92f-pubN76527" name="Index: Xenos 1"/>
  </publications>
  <categoryEntries>
    <categoryEntry id="fb5a-2f35-6253-b891" name="Faction: &lt;Masque&gt;" hidden="false"/>
    <categoryEntry id="05e9-e880-b1fb-ce90" name="Faction: Aeldari" hidden="false"/>
    <categoryEntry id="f406-94c7-4d73-4784" name="Faction: Harlequins" hidden="false"/>
    <categoryEntry id="1379-9ec0-ffe7-102f" name="Troupe Master" hidden="false"/>
    <categoryEntry id="e99c-c457-33b2-957f" name="Shadowseer" hidden="false"/>
    <categoryEntry id="e1ba-8601-6249-d6fd" name="Troupe" hidden="false"/>
    <categoryEntry id="0a70-ae79-e962-e741" name="Death Jester" hidden="false"/>
    <categoryEntry id="63cf-e50b-8ff4-57f6" name="Solitaire" hidden="false"/>
    <categoryEntry id="bebc-c8e2-5bdf-e056" name="Skyweavers" hidden="false"/>
    <categoryEntry id="342e-9e5d-e689-31bc" name="Voidweaver" hidden="false"/>
    <categoryEntry id="c5f9-ea01-8d12-908e" name="Starweaver" hidden="false"/>
  </categoryEntries>
  <entryLinks>
    <entryLink id="0613-e751-4b8c-9474" name="Troupe" hidden="false" collective="false" import="true" targetId="5c11-1cad-1fb1-5816" type="selectionEntry"/>
    <entryLink id="fc47-4974-ca36-e408" name="Troupe Master" hidden="false" collective="false" import="true" targetId="5f24-c0be-025f-16aa" type="selectionEntry"/>
    <entryLink id="925a-0f0c-2b76-40ab" name="Death Jester" hidden="false" collective="false" import="true" targetId="7c62-2472-fac5-49a1" type="selectionEntry"/>
    <entryLink id="69f5-aa70-6158-8db1" name="Solitaire" hidden="false" collective="false" import="true" targetId="57e1-479c-6d5c-00b3" type="selectionEntry"/>
    <entryLink id="eca5-3645-f706-51ea" name="Shadowseer" hidden="false" collective="false" import="true" targetId="2cb2-ebf2-3523-ad48" type="selectionEntry"/>
    <entryLink id="7cce-20c9-d82f-4456" name="Voidweaver" hidden="false" collective="false" import="true" targetId="3e87-4146-bac7-5c55" type="selectionEntry"/>
    <entryLink id="269a-456c-ad42-01a1" name="Starweaver" hidden="false" collective="false" import="true" targetId="d96e-e7b4-6204-0b07" type="selectionEntry"/>
    <entryLink id="49a8-3aee-1d20-78f9" name="Skyweavers" hidden="false" collective="false" import="true" targetId="50b6-34fa-10fe-d5be" type="selectionEntry"/>
    <entryLink id="bc48-55f1-2870-e73b" name="Masque Form" hidden="false" collective="false" import="true" targetId="1b5c-b38b-24a2-63d9" type="selectionEntry">
      <constraints>
        <constraint field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="a05b-ce72-b7ab-9aea" type="min"/>
        <constraint field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="a7b0-4260-ded3-5422" type="max"/>
      </constraints>
    </entryLink>
    <entryLink id="a1b9-bc4f-763a-97ca" name="Webway Gate" hidden="false" collective="false" import="true" targetId="52c2-f7a8-dc21-d14d" type="selectionEntry"/>
    <entryLink id="3fd6-864b-fa22-8108" name="Enigmas of the Black Library (1 Relic)" hidden="false" collective="false" import="true" targetId="0742-4cb7-bf4e-16cc" type="selectionEntry"/>
    <entryLink id="e87f-ef46-dfe6-9316" name="Enigmas of the Black Library (2 Relics)" hidden="false" collective="false" import="true" targetId="dc1c-c3ca-66fa-fd12" type="selectionEntry"/>
    <entryLink id="9dd3-efd5-882f-592e" name="Artefacts of Death" hidden="false" collective="false" import="true" targetId="a1c9-09d6-2587-9553" type="selectionEntry">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
    </entryLink>
    <entryLink id="33bc-66f4-56ba-b37b" name="Exalted of Ynnead" hidden="false" collective="false" import="true" targetId="746d-c99b-ba49-17bb" type="selectionEntry">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
    </entryLink>
  </entryLinks>
  <sharedSelectionEntries>
    <selectionEntry id="0ecc-ffa4-aa9f-a698" name="Fusion Pistol" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="4ec0-69af-033f-6087" name="Fusion Pistol" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">6&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Pistol 1</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">8</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-4</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D6</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="7.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="3065-08db-9433-d9f8" name="Harlequin&apos;s Blade" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="c53f-2869-a821-0b6f" name="Harlequin&apos;s Blade" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">User</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">0</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="3f0f-7345-bc4f-9771" name="Plasma Grenades" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="2c50-ecf6-df9c-f381" name="Plasma Grenade" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">6&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Grenade D6</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">4</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="c791-d8b1-80d1-d707" name="Shuriken Cannon" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="2f2d-9430-cb35-9409" name="Shuriken Cannon" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">24&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 3</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">6</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">0</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="10.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="1ed4-125a-cd0b-cf43" name="Shrieker Cannon" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="98d4-d983-8385-6c2e" name="Shrieker Cannon (Shrieker)" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">24&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 1</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">6</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3. If an INFANTRY model is slain by an attack made with this weapon, then its unit suffers D3 mortal wounds. If any models in a unit are slain by this weapon, subtract 2 from that unit&apos;s Leadership characteristic until the end of the turn.</characteristic>
          </characteristics>
        </profile>
        <profile id="7fd7-cbc6-19cb-4354" name="Shrieker Cannon (Shuriken)" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">24&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 3</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">6</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">0</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="a38e-00b0-2bea-3202" name="Prismatic Cannon" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="e362-4231-3f39-7f08" name="Prismatic Cannon (Dispersed)" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">24&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault D6</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">4</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-2</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
        <profile id="7b27-6d62-2a16-2642" name="Prismatic Cannon (Lance)" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">24&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 1</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">8</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-4</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D6</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
        <profile id="bf1d-4a74-5d69-31f8" name="Prismatic Cannon (Focused)" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">24&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault D3</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">6</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-3</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D3</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="15.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="dc08-7a78-9af8-9b6f" name="Neuro Disruptor" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="02e8-42a6-9a75-eb40" name="Neuro Disruptor" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">12&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Pistol 1</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">4</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-3</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D3</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">If the target is a VEHICLE, this weapon has a Damage of 1.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="5.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="e2fb-277f-b1db-836b" name="Haywire Cannon" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="8296-b9ae-156e-a9d0" name="Haywire Cannon" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">24&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault D6</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">4</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">If the target is a VEHICLE and you roll a wound roll of 4+ for this weapon, the target suffers 1 mortal wound in addition to any other damage. If the wound roll is 6+, the target suffers D3 mortal wounds instead.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="15.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="4189-0d29-d473-965d" name="Hallucinogen Grenade Launcher" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="8b44-d528-5c0b-7c4b" name="Hallucinogen Grenade Launcher" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">18&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 1</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">*</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">*</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">*</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">If a unit is hit by this weapon, roll 2D6 - if the roll is equal to or greater than the target unit&apos;s Leadership, it suffers D3 mortal wounds.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="4ba5-5958-0ed5-2acb" name="Zephyrglaive" publicationId="7d24-b92f-pubN65537" page="61" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="b300-3be8-895a-19f6" name="Zephyrglaive" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">+1</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-2</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">2</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="6.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="b370-466e-0be6-214d" name="Miststave" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="05f1-30d4-597b-c42e" name="Miststave" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">+2</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D3</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="4f51-c975-5042-dca4" name="Harlequin&apos;s Kiss" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="be4c-3441-13e4-f686" name="Harlequin&apos;s Kiss" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">+1</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D3</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="7.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="fddb-199b-84b4-280f" name="Harlequin&apos;s Embrace" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="7bac-829a-6971-5b0c" name="Harlequin&apos;s Embrace" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">+1</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-3</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="6.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="29c4-069f-247a-d22b" name="Harlequin&apos;s Caress" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="19c2-98cb-b479-c686" name="Harlequin&apos;s Caress" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">+2</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-2</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name="pts" typeId="points" value="7.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="b212-064c-a4a9-49f7" name="Shuriken Pistol" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="afd8-06e5-8d96-5695" name="Shuriken Pistol" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">12&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Pistol 1</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">4</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">0</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="5cec-256b-7cfd-038f" name="Star Bolas" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="c942-b18e-373f-1349" name="Star Bolas" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">12&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Grenade D3</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">6</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-3</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">2</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">-</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="5c11-1cad-1fb1-5816" name="Troupe" publicationId="7d24-b92f-pubN65537" page="58" hidden="false" collective="false" import="true" type="unit">
      <categoryLinks>
        <categoryLink id="b255-875a-9203-b30d" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="1135-265a-0a27-a590" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="7d54-3bf9-38f5-c7ec" name="New CategoryLink" hidden="false" targetId="3d52-fccf-10c0-3fae" primary="false"/>
        <categoryLink id="35ed-79f3-4464-b8a8" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="da9a-ff25-840b-0e7b" name="New CategoryLink" hidden="false" targetId="5d76b6f5-20ae-4d70-8f59-ade72a2add3a" primary="true"/>
        <categoryLink id="8286-5718-1eb3-5870" name="New CategoryLink" hidden="false" targetId="e1ba-8601-6249-d6fd" primary="false"/>
      </categoryLinks>
      <selectionEntries>
        <selectionEntry id="119a-a3b0-cc99-4f2e" name="Player" publicationId="7d24-b92f-pubN65537" page="58" hidden="false" collective="false" import="true" type="model">
          <constraints>
            <constraint field="selections" scope="parent" value="5.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="4f8b-1a8a-0b06-9234" type="min"/>
            <constraint field="selections" scope="parent" value="12.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="9219-732d-de0d-2ee6" type="max"/>
          </constraints>
          <profiles>
            <profile id="5d14-f509-dc27-0231" name="Player" publicationId="7d24-b92f-pubN65537" page="58" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
              <characteristics>
                <characteristic name="M" typeId="0bdf-a96e-9e38-7779">8&quot;</characteristic>
                <characteristic name="WS" typeId="e7f0-1278-0250-df0c">3+</characteristic>
                <characteristic name="BS" typeId="381b-eb28-74c3-df5f">3+</characteristic>
                <characteristic name="S" typeId="2218-aa3c-265f-2939">3</characteristic>
                <characteristic name="T" typeId="9c9f-9774-a358-3a39">3</characteristic>
                <characteristic name="W" typeId="f330-5e6e-4110-0978">1</characteristic>
                <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">4</characteristic>
                <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">8</characteristic>
                <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">6+</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <infoLinks>
            <infoLink id="11ae-eecd-c33b-9b03" name="Holo-suit" hidden="false" targetId="86a8-5c65-d40b-d0a6" type="profile"/>
            <infoLink id="8c5b-bf96-9fb8-014f" name="Flip Belt" hidden="false" targetId="74fb-ab0a-0ef5-ce0d" type="profile"/>
            <infoLink id="0d79-1069-73dc-80eb" name="Strength from Death" hidden="false" targetId="e1ca-b33f-a52f-c11c" type="rule"/>
            <infoLink id="7946-8589-2cb1-987a" name="Rising Crescendo" hidden="false" targetId="60da-8dc8-7bf4-2efd" type="profile"/>
          </infoLinks>
          <selectionEntryGroups>
            <selectionEntryGroup id="1e01-a797-8a56-e845" name="Player&apos;s Melee Weapon" hidden="false" collective="false" import="true" defaultSelectionEntryId="9404-1a68-5379-0712">
              <constraints>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="34e8-c222-2f3c-1c00" type="min"/>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5af1-8321-cb0d-a9a6" type="max"/>
              </constraints>
              <entryLinks>
                <entryLink id="9404-1a68-5379-0712" name="Harlequin&apos;s Blade" hidden="false" collective="false" import="true" targetId="3065-08db-9433-d9f8" type="selectionEntry"/>
                <entryLink id="407e-2e12-67e3-c1c5" name="New EntryLink" hidden="false" collective="false" import="true" targetId="4f51-c975-5042-dca4" type="selectionEntry"/>
                <entryLink id="b40b-55db-715b-9fde" name="New EntryLink" hidden="false" collective="false" import="true" targetId="fddb-199b-84b4-280f" type="selectionEntry"/>
                <entryLink id="71a2-5a14-f540-d48e" name="New EntryLink" hidden="false" collective="false" import="true" targetId="29c4-069f-247a-d22b" type="selectionEntry"/>
              </entryLinks>
            </selectionEntryGroup>
            <selectionEntryGroup id="f660-b809-e705-b54b" name="Player&apos;s Ranged Weapon" hidden="false" collective="false" import="true" defaultSelectionEntryId="1c54-6a2f-c12b-f8b8">
              <constraints>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="6b88-85dc-2b77-427e" type="min"/>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="a120-1f0a-666d-4f67" type="max"/>
              </constraints>
              <entryLinks>
                <entryLink id="cde8-d244-a951-25ee" name="New EntryLink" hidden="false" collective="false" import="true" targetId="0ecc-ffa4-aa9f-a698" type="selectionEntry"/>
                <entryLink id="474d-902c-c235-98a6" name="New EntryLink" hidden="false" collective="false" import="true" targetId="dc08-7a78-9af8-9b6f" type="selectionEntry"/>
                <entryLink id="1c54-6a2f-c12b-f8b8" name="New EntryLink" hidden="false" collective="false" import="true" targetId="b212-064c-a4a9-49f7" type="selectionEntry"/>
              </entryLinks>
            </selectionEntryGroup>
          </selectionEntryGroups>
          <entryLinks>
            <entryLink id="aa46-0476-a387-d42e" name="Plasma Grenades" hidden="false" collective="false" import="true" targetId="3f0f-7345-bc4f-9771" type="selectionEntry">
              <constraints>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="8e46-ed6e-158d-14c5" type="min"/>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="f9fa-b3d6-7285-8262" type="max"/>
              </constraints>
            </entryLink>
          </entryLinks>
          <costs>
            <cost name="pts" typeId="points" value="11.0"/>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="1.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
      </selectionEntries>
      <entryLinks>
        <entryLink id="32e0-193a-2151-197a" name="Unit has battle honors?" hidden="false" collective="false" import="true" targetId="4763-757f-499f-d998" type="selectionEntry"/>
        <entryLink id="dae6-1071-f9cb-0383" name="Battle Honors" hidden="false" collective="false" import="true" targetId="5518-d0f5-a880-d71c" type="selectionEntryGroup"/>
      </entryLinks>
      <costs>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="5f24-c0be-025f-16aa" name="Troupe Master" publicationId="7d24-b92f-pubN65537" page="56" hidden="false" collective="false" import="true" type="unit">
      <profiles>
        <profile id="e09c-9263-1993-9718" name="Troupe Master" publicationId="7d24-b92f-pubN65537" page="56" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
          <characteristics>
            <characteristic name="M" typeId="0bdf-a96e-9e38-7779">8&quot;</characteristic>
            <characteristic name="WS" typeId="e7f0-1278-0250-df0c">2+</characteristic>
            <characteristic name="BS" typeId="381b-eb28-74c3-df5f">2+</characteristic>
            <characteristic name="S" typeId="2218-aa3c-265f-2939">3</characteristic>
            <characteristic name="T" typeId="9c9f-9774-a358-3a39">3</characteristic>
            <characteristic name="W" typeId="f330-5e6e-4110-0978">5</characteristic>
            <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">5</characteristic>
            <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">9</characteristic>
            <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">6+</characteristic>
          </characteristics>
        </profile>
        <profile id="a6d4-97f4-e94d-42ef" name="Choreographer of War" publicationId="7d24-b92f-pubN65537" page="56" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">In the Fight phase, re-roll failed wound rolls for friendly MASQUE units that are within 6&quot; of this model.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <infoLinks>
        <infoLink id="8077-2f8a-3977-aedf" name="Flip Belt" hidden="false" targetId="74fb-ab0a-0ef5-ce0d" type="profile"/>
        <infoLink id="59b3-4d1b-2448-6839" name="Holo-suit" hidden="false" targetId="86a8-5c65-d40b-d0a6" type="profile"/>
        <infoLink id="5a34-9e0f-84ac-5270" name="Strength from Death" hidden="false" targetId="e1ca-b33f-a52f-c11c" type="rule"/>
        <infoLink id="1131-5ec3-700b-1d58" name="Rising Crescendo" hidden="false" targetId="60da-8dc8-7bf4-2efd" type="profile"/>
      </infoLinks>
      <categoryLinks>
        <categoryLink id="b9d1-d358-7801-2ad1" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="db2e-a3cc-c78b-c3d7" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="0555-d51f-5682-c3b4" name="New CategoryLink" hidden="false" targetId="ef18-746a-369f-43a4" primary="false"/>
        <categoryLink id="c3ad-1c39-a42d-f7f1" name="New CategoryLink" hidden="false" targetId="848a6ff2-0def-4c72-8433-ff7da70e6bc7" primary="true"/>
        <categoryLink id="18e4-74c5-7848-5ba5" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="e1f3-b3dd-15ee-b849" name="New CategoryLink" hidden="false" targetId="3d52-fccf-10c0-3fae" primary="false"/>
        <categoryLink id="3010-2ebd-0fb9-b137" name="New CategoryLink" hidden="false" targetId="1379-9ec0-ffe7-102f" primary="false"/>
      </categoryLinks>
      <selectionEntries>
        <selectionEntry id="49d5-0898-b5c6-9175" name="Great Harlequin" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="65d0-a887-30f1-2fe0" type="max"/>
            <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" id="81db-06b6-a025-afb9" type="max"/>
          </constraints>
          <profiles>
            <profile id="e699-9f50-91bc-92f2" name="Will of the Laughing God" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
              <characteristics>
                <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">In the Fight phase, re-roll hit rolls of 1 for friendly &lt;MASQUE&gt; units that are within 6&quot; of this model.</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <costs>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="pts" typeId="points" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="-2.0"/>
          </costs>
        </selectionEntry>
      </selectionEntries>
      <selectionEntryGroups>
        <selectionEntryGroup id="b54e-f7c8-8bdb-9c72" name="Melee Weapon" hidden="false" collective="false" import="true" defaultSelectionEntryId="82d6-27de-e8b3-3a69">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="41fd-d54b-1dde-62d0" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="bad4-2ef7-c361-8d81" type="max"/>
          </constraints>
          <entryLinks>
            <entryLink id="82d6-27de-e8b3-3a69" name="New EntryLink" hidden="false" collective="false" import="true" targetId="3065-08db-9433-d9f8" type="selectionEntry"/>
            <entryLink id="cc4b-b56b-e3b3-04c9" name="New EntryLink" hidden="false" collective="false" import="true" targetId="4f51-c975-5042-dca4" type="selectionEntry"/>
            <entryLink id="6c46-3fd0-ca09-55d3" name="New EntryLink" hidden="false" collective="false" import="true" targetId="fddb-199b-84b4-280f" type="selectionEntry"/>
            <entryLink id="df73-2a15-9a1c-8ccd" name="New EntryLink" hidden="false" collective="false" import="true" targetId="29c4-069f-247a-d22b" type="selectionEntry"/>
            <entryLink id="0494-601c-7e17-07fc" name="New EntryLink" hidden="false" collective="false" import="true" targetId="bc9e-551d-9afb-78d5" type="selectionEntry"/>
          </entryLinks>
        </selectionEntryGroup>
        <selectionEntryGroup id="130f-ad80-aa72-535e" name="Ranged Weapon" hidden="false" collective="false" import="true" defaultSelectionEntryId="0b74-5abc-c275-bff5">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="77e5-3d6b-be3c-2111" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="9cbb-b841-8b91-190f" type="max"/>
          </constraints>
          <entryLinks>
            <entryLink id="0396-a08d-abf2-4989" name="New EntryLink" hidden="false" collective="false" import="true" targetId="0ecc-ffa4-aa9f-a698" type="selectionEntry"/>
            <entryLink id="6624-da15-091a-82e2" name="New EntryLink" hidden="false" collective="false" import="true" targetId="dc08-7a78-9af8-9b6f" type="selectionEntry"/>
            <entryLink id="0b74-5abc-c275-bff5" name="New EntryLink" hidden="false" collective="false" import="true" targetId="b212-064c-a4a9-49f7" type="selectionEntry"/>
          </entryLinks>
        </selectionEntryGroup>
      </selectionEntryGroups>
      <entryLinks>
        <entryLink id="c25c-4673-c8da-44d2" name="New EntryLink" hidden="false" collective="false" import="true" targetId="3f0f-7345-bc4f-9771" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="b1cc-e6be-4b3f-9ca8" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="36a7-11a1-1066-4037" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="8a07-fee0-a684-b0d4" name="Warlord Trait" hidden="false" collective="false" import="true" targetId="305c-7184-81fb-2bd3" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="a5ce-b16b-56cd-e78a" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="14eb-dbd5-dfbd-367a" name="Relics" hidden="false" collective="false" import="true" targetId="16e7-958e-0d9b-8280" type="selectionEntryGroup"/>
        <entryLink id="0505-bda3-44f5-8b05" name="Warlord" hidden="false" collective="false" import="true" targetId="a5ce-b16b-56cd-e78a" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="09ed-8db7-42a5-5685" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="cf9f-5caf-154d-df2b" name="Is A Custom Character" hidden="false" collective="false" import="true" targetId="43c4-8968-c599-ad5f" type="selectionEntry"/>
        <entryLink id="b69e-2012-877a-0c54" name="Custom Character Selections" hidden="false" collective="false" import="true" targetId="8774-e003-4a50-56c7" type="selectionEntryGroup"/>
        <entryLink id="6b70-7c87-6f43-529d" name="Ynnari Warlord" hidden="false" collective="false" import="true" targetId="75e4-e07c-3a6d-46c5" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="10c3-b0af-a6ae-a1e3" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="5237-d9ab-ee79-7a3a" name="Relics of Ynnead" hidden="false" collective="false" import="true" targetId="4eab-df08-9faa-926c" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="79c2-ca80-1f37-de30" name="Warlord Trait (Ynnari)" hidden="false" collective="false" import="true" targetId="bd5b-50f5-f7d9-0af1" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditionGroups>
                <conditionGroup type="and">
                  <conditions>
                    <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="746d-c99b-ba49-17bb" type="equalTo"/>
                    <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="6b70-7c87-6f43-529d" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
      </entryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="4.0"/>
        <cost name="pts" typeId="points" value="60.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="57e1-479c-6d5c-00b3" name="Solitaire" publicationId="7d24-b92f-pubN65537" page="60" hidden="false" collective="false" import="true" type="unit">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ebb3-4f37-6e57-7a8e" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="1021-466b-d5b4-991c" type="max"/>
      </constraints>
      <profiles>
        <profile id="21ca-745b-c17a-8794" name="Solitaire" publicationId="7d24-b92f-pubN65537" page="60" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
          <characteristics>
            <characteristic name="M" typeId="0bdf-a96e-9e38-7779">12&quot;</characteristic>
            <characteristic name="WS" typeId="e7f0-1278-0250-df0c">2+</characteristic>
            <characteristic name="BS" typeId="381b-eb28-74c3-df5f">2+</characteristic>
            <characteristic name="S" typeId="2218-aa3c-265f-2939">3</characteristic>
            <characteristic name="T" typeId="9c9f-9774-a358-3a39">3</characteristic>
            <characteristic name="W" typeId="f330-5e6e-4110-0978">5</characteristic>
            <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">8</characteristic>
            <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">9</characteristic>
            <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">6+</characteristic>
          </characteristics>
        </profile>
        <profile id="d8e1-d702-5c4a-d0f0" name="Blitz" publicationId="7d24-b92f-pubN65537" page="60" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Once per battle, instead of making a normal move with the Solitaire, you can make a Blitz move with it. If you do so, add 2D6&quot; to the model&apos;s Move characteristic for this turn. In addition, the model&apos;s Attack characteristic is increased to 10 for the rest of the turn. This ability may not be used if the model has been selected as the target of the &quot;Twilight Pathways&quot; psychic power in the previous Psychic Phase. A model cannot Advance and use this ability in the same turn.</characteristic>
          </characteristics>
        </profile>
        <profile id="488e-748a-f100-134a" name="Impossible Form" publicationId="7d24-b92f-pubN65537" page="60" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">The Solitaire has a 3+ invulnerable save.</characteristic>
          </characteristics>
        </profile>
        <profile id="bf76-f717-ea7e-083a" name="The Path of Damnation" publicationId="7d24-b92f-pubN65537" page="60" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">The Solitaire can never have a Warlord Trait.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <infoLinks>
        <infoLink id="cd04-63e2-61a5-3913" name="Flip Belt" hidden="false" targetId="74fb-ab0a-0ef5-ce0d" type="profile"/>
        <infoLink id="2c94-9e75-fc6b-c51d" name="Rising Crescendo" hidden="false" targetId="60da-8dc8-7bf4-2efd" type="profile"/>
      </infoLinks>
      <categoryLinks>
        <categoryLink id="9891-8a67-c8a3-270e" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="7802-c802-0b9b-f796" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="9210-198e-2fbd-72a6" name="New CategoryLink" hidden="false" targetId="ef18-746a-369f-43a4" primary="false"/>
        <categoryLink id="92a1-6b13-c62d-c3a7" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="d303-7830-358c-fe5f" name="New CategoryLink" hidden="false" targetId="3d52-fccf-10c0-3fae" primary="false"/>
        <categoryLink id="f045-08e5-967c-1179" name="New CategoryLink" hidden="false" targetId="638d74c6-bd97-4de5-b65a-6aaa24e9f4b2" primary="true"/>
        <categoryLink id="a4e3-44ed-1ab3-37f3" name="New CategoryLink" hidden="false" targetId="63cf-e50b-8ff4-57f6" primary="false"/>
      </categoryLinks>
      <entryLinks>
        <entryLink id="5a9a-03c9-65f6-3287" name="New EntryLink" hidden="false" collective="false" import="true" targetId="29c4-069f-247a-d22b" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="9708-812f-be6d-95bb" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="4a92-4e65-ea0f-f688" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="ad02-d473-5d03-cf1b" name="New EntryLink" hidden="false" collective="false" import="true" targetId="4f51-c975-5042-dca4" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="9fa4-cfe6-ecac-8ab0" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="de9a-5267-6a06-bfab" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="3786-b35f-ee03-4974" name="Relics" hidden="false" collective="false" import="true" targetId="16e7-958e-0d9b-8280" type="selectionEntryGroup"/>
        <entryLink id="8623-adec-fb6f-f3ce" name="Is A Custom Character" hidden="false" collective="false" import="true" targetId="43c4-8968-c599-ad5f" type="selectionEntry"/>
        <entryLink id="3889-0b54-e362-307a" name="Custom Character Selections" hidden="false" collective="false" import="true" targetId="8774-e003-4a50-56c7" type="selectionEntryGroup"/>
        <entryLink id="f0d3-8eaf-2630-c628" name="Warlord" hidden="false" collective="false" import="true" targetId="a5ce-b16b-56cd-e78a" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="1f7b-9819-ea6a-bc05" type="max"/>
          </constraints>
        </entryLink>
      </entryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="5.0"/>
        <cost name="pts" typeId="points" value="84.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="2cb2-ebf2-3523-ad48" name="Shadowseer" publicationId="7d24-b92f-pubN65537" page="57" hidden="false" collective="false" import="true" type="unit">
      <profiles>
        <profile id="ed3a-6a75-ce36-ac5d" name="Shadowseer" publicationId="7d24-b92f-pubN65537" page="" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
          <characteristics>
            <characteristic name="M" typeId="0bdf-a96e-9e38-7779">8&quot;</characteristic>
            <characteristic name="WS" typeId="e7f0-1278-0250-df0c">2+</characteristic>
            <characteristic name="BS" typeId="381b-eb28-74c3-df5f">2+</characteristic>
            <characteristic name="S" typeId="2218-aa3c-265f-2939">3</characteristic>
            <characteristic name="T" typeId="9c9f-9774-a358-3a39">3</characteristic>
            <characteristic name="W" typeId="f330-5e6e-4110-0978">5</characteristic>
            <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">3</characteristic>
            <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">9</characteristic>
            <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">7+</characteristic>
          </characteristics>
        </profile>
        <profile id="40eb-d804-2b98-db00" name="Shield from Harm" publicationId="7d24-b92f-pubN65537" page="" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Your opponent must subtract 1 from the wound rolls for any attacks made against friendly MASQUE INFANTRY units that are within 6&quot; of any models with this ability.</characteristic>
          </characteristics>
        </profile>
        <profile id="bb2c-683c-fbad-de6b" name="Shadowseer - Psyker" publicationId="7d24-b92f-pubN65537" page="57" hidden="false" typeId="bc97-dea9-9e88-bb7d" typeName="Psyker">
          <characteristics>
            <characteristic name="Cast" typeId="5afb-9914-904b-d3b3">2</characteristic>
            <characteristic name="Deny" typeId="b5ac-9c20-5d5a-6f9b">1</characteristic>
            <characteristic name="Powers Known" typeId="69d7-b45e-00a2-7e46">2 - Phantasmancy</characteristic>
            <characteristic name="Other" typeId="c2e2-f115-0003-5d7b"/>
          </characteristics>
        </profile>
      </profiles>
      <infoLinks>
        <infoLink id="0d73-520c-38f2-26d8" name="Flip Belt" hidden="false" targetId="74fb-ab0a-0ef5-ce0d" type="profile"/>
        <infoLink id="7c88-af4b-ee5a-7d31" name="New InfoLink" hidden="false" targetId="86a8-5c65-d40b-d0a6" type="profile"/>
        <infoLink id="d38d-384f-b339-b906" name="Strength from Death" hidden="false" targetId="e1ca-b33f-a52f-c11c" type="rule"/>
        <infoLink id="82f6-4a3f-1d7d-6b85" name="Rising Crescendo" hidden="false" targetId="60da-8dc8-7bf4-2efd" type="profile"/>
      </infoLinks>
      <categoryLinks>
        <categoryLink id="71ca-6385-7a18-b068" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="a05b-0f87-e5cc-2761" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="695b-b8fc-685c-fb65" name="New CategoryLink" hidden="false" targetId="ef18-746a-369f-43a4" primary="false"/>
        <categoryLink id="6826-eef7-122c-3d93" name="New CategoryLink" hidden="false" targetId="848a6ff2-0def-4c72-8433-ff7da70e6bc7" primary="true"/>
        <categoryLink id="124f-3496-348e-473b" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="0b92-e366-ccf5-525e" name="New CategoryLink" hidden="false" targetId="3d52-fccf-10c0-3fae" primary="false"/>
        <categoryLink id="dfcf-71bb-b3f0-5c97" name="New CategoryLink" hidden="false" targetId="e691-aad7-d21c-1023" primary="false"/>
        <categoryLink id="ccc6-45cf-988a-df83" name="New CategoryLink" hidden="false" targetId="e99c-c457-33b2-957f" primary="false"/>
      </categoryLinks>
      <selectionEntryGroups>
        <selectionEntryGroup id="ab70-5089-f6b4-771d" name="Ranged Weapon" hidden="false" collective="false" import="true" defaultSelectionEntryId="039d-0e67-ae8a-5d60">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="80cd-68ce-5223-8362" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="8391-f436-91e5-cd36" type="max"/>
          </constraints>
          <entryLinks>
            <entryLink id="c3e5-94c3-a5ba-610d" name="New EntryLink" hidden="false" collective="false" import="true" targetId="dc08-7a78-9af8-9b6f" type="selectionEntry"/>
            <entryLink id="039d-0e67-ae8a-5d60" name="New EntryLink" hidden="false" collective="false" import="true" targetId="b212-064c-a4a9-49f7" type="selectionEntry"/>
          </entryLinks>
        </selectionEntryGroup>
      </selectionEntryGroups>
      <entryLinks>
        <entryLink id="6ece-1a92-163b-6a07" name="New EntryLink" hidden="false" collective="false" import="true" targetId="4189-0d29-d473-965d" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="33ce-14e8-612c-45a9" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="8bbc-3bef-77de-b92a" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="3881-747b-afec-00dc" name="Miststave" hidden="false" collective="false" import="true" targetId="b370-466e-0be6-214d" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="178c-80b9-0d05-ec7f" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="568f-c0a2-3f61-b989" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="cf57-03fb-f9c6-8975" name="Phantasmancy" hidden="false" collective="false" import="true" targetId="7961-453c-a38d-186c" type="selectionEntryGroup"/>
        <entryLink id="9764-e950-b4d4-791b" name="Smite" hidden="false" collective="false" import="true" targetId="03fd-db47-5333-1e1f" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="b3bd-b3d1-83c6-a406" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="ec9c-ec46-718d-ad5f" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="7853-bb69-1097-0068" name="Warlord Trait" hidden="false" collective="false" import="true" targetId="305c-7184-81fb-2bd3" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="a5ce-b16b-56cd-e78a" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="7367-98b5-0281-747f" name="Relics" hidden="false" collective="false" import="true" targetId="16e7-958e-0d9b-8280" type="selectionEntryGroup"/>
        <entryLink id="7c24-bb1e-e935-b494" name="Warlord" hidden="false" collective="false" import="true" targetId="a5ce-b16b-56cd-e78a" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5946-7a42-845d-123c" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="2a37-8f21-d486-bded" name="Is A Custom Character" hidden="false" collective="false" import="true" targetId="43c4-8968-c599-ad5f" type="selectionEntry"/>
        <entryLink id="02cd-b6ec-fbf7-a466" name="Custom Character Selections" hidden="false" collective="false" import="true" targetId="8774-e003-4a50-56c7" type="selectionEntryGroup"/>
        <entryLink id="fcb7-bca6-094d-8ffa" name="Ynnari Warlord" hidden="false" collective="false" import="true" targetId="75e4-e07c-3a6d-46c5" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5927-0b30-e2db-6df0" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="c6bb-ea89-545b-6f12" name="Relics of Ynnead" hidden="false" collective="false" import="true" targetId="4eab-df08-9faa-926c" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="1a46-eaa9-e171-b39e" name="Warlord Trait (Ynnari)" hidden="false" collective="false" import="true" targetId="bd5b-50f5-f7d9-0af1" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditionGroups>
                <conditionGroup type="and">
                  <conditions>
                    <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="746d-c99b-ba49-17bb" type="equalTo"/>
                    <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="6b70-7c87-6f43-529d" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="6df4-c583-8750-6acf" name="Revenant Discipline" hidden="false" collective="false" import="true" targetId="7f93-a621-fdeb-0426" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
          <constraints>
            <constraint field="selections" scope="parent" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="c58d-a22a-8686-e3f8" type="max"/>
          </constraints>
        </entryLink>
      </entryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="7.0"/>
        <cost name="pts" typeId="points" value="110.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="7c62-2472-fac5-49a1" name="Death Jester" publicationId="7d24-b92f-pubN65537" page="59" hidden="false" collective="false" import="true" type="unit">
      <profiles>
        <profile id="9ee8-12e9-c97d-137c" name="Death Jester" publicationId="7d24-b92f-pubN65537" page="59" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
          <characteristics>
            <characteristic name="M" typeId="0bdf-a96e-9e38-7779">8&quot;</characteristic>
            <characteristic name="WS" typeId="e7f0-1278-0250-df0c">2+</characteristic>
            <characteristic name="BS" typeId="381b-eb28-74c3-df5f">2+</characteristic>
            <characteristic name="S" typeId="2218-aa3c-265f-2939">3</characteristic>
            <characteristic name="T" typeId="9c9f-9774-a358-3a39">3</characteristic>
            <characteristic name="W" typeId="f330-5e6e-4110-0978">5</characteristic>
            <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">4</characteristic>
            <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">9</characteristic>
            <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">6+</characteristic>
          </characteristics>
        </profile>
        <profile id="b974-3c5b-f440-85ab" name="Deadly Hunter" publicationId="7d24-b92f-pubN65537" page="59" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">This model may target a CHARACTER even if it is not the closest enemy unit.</characteristic>
          </characteristics>
        </profile>
        <profile id="bdb0-7924-42e5-9a49" name="Death is Not Enough" publicationId="7d24-b92f-pubN65537" page="59" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">If any models flee from a unit in the same turn that it has been attacked by this model, then you can choose the first model that flees instead of your opponent choosing.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <infoLinks>
        <infoLink id="87e9-ee3d-85c3-34de" name="Flip Belt" hidden="false" targetId="74fb-ab0a-0ef5-ce0d" type="profile"/>
        <infoLink id="4da4-b903-5a73-c3fe" name="Holo-suit" hidden="false" targetId="86a8-5c65-d40b-d0a6" type="profile"/>
        <infoLink id="b951-f069-aae0-07c1" name="Strength from Death" hidden="false" targetId="e1ca-b33f-a52f-c11c" type="rule"/>
        <infoLink id="63e5-9cbe-5e78-6458" name="Rising Crescendo" hidden="false" targetId="60da-8dc8-7bf4-2efd" type="profile"/>
      </infoLinks>
      <categoryLinks>
        <categoryLink id="1310-2f42-35c9-913c" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="cbd7-3a75-e415-2852" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="e028-7b9d-cc97-3e58" name="New CategoryLink" hidden="false" targetId="ef18-746a-369f-43a4" primary="false"/>
        <categoryLink id="8536-aee0-825d-43be" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="efa2-6f72-c9e6-5a84" name="New CategoryLink" hidden="false" targetId="3d52-fccf-10c0-3fae" primary="false"/>
        <categoryLink id="e4a5-fb33-bf6f-d6e3" name="New CategoryLink" hidden="false" targetId="638d74c6-bd97-4de5-b65a-6aaa24e9f4b2" primary="true"/>
        <categoryLink id="a998-28cc-c5f1-38e2" name="New CategoryLink" hidden="false" targetId="0a70-ae79-e962-e741" primary="false"/>
      </categoryLinks>
      <entryLinks>
        <entryLink id="8054-dbf9-9335-3196" name="Shrieker Cannon" hidden="false" collective="false" import="true" targetId="1ed4-125a-cd0b-cf43" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="8cea-6aca-b79d-fd73" type="min"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="e408-108b-290c-80cd" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="e29f-c871-e18a-7794" name="Warlord Trait" hidden="false" collective="false" import="true" targetId="305c-7184-81fb-2bd3" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="a5ce-b16b-56cd-e78a" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="b7c2-ae04-f6fb-3923" name="Relics" hidden="false" collective="false" import="true" targetId="16e7-958e-0d9b-8280" type="selectionEntryGroup"/>
        <entryLink id="8016-19d8-e7d4-863f" name="Harlequin Warlord" hidden="false" collective="false" import="true" targetId="a5ce-b16b-56cd-e78a" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="acfd-433d-09c8-7bad" type="max"/>
          </constraints>
        </entryLink>
        <entryLink id="b5ae-df14-e935-6e72" name="Is A Custom Character" hidden="false" collective="false" import="true" targetId="43c4-8968-c599-ad5f" type="selectionEntry"/>
        <entryLink id="2481-064e-8371-605d" name="Custom Character Selections" hidden="false" collective="false" import="true" targetId="8774-e003-4a50-56c7" type="selectionEntryGroup"/>
        <entryLink id="6bad-7a71-83fd-8fdb" name="Warlord Trait (Ynnari)" hidden="false" collective="false" import="true" targetId="bd5b-50f5-f7d9-0af1" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditionGroups>
                <conditionGroup type="and">
                  <conditions>
                    <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="746d-c99b-ba49-17bb" type="equalTo"/>
                    <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="6b70-7c87-6f43-529d" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="59b4-6548-da0c-9405" name="Relics of Ynnead" hidden="false" collective="false" import="true" targetId="4eab-df08-9faa-926c" type="selectionEntryGroup">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="67b3-19b4-d6c5-6ed9" name="Ynnari Warlord" hidden="false" collective="false" import="true" targetId="75e4-e07c-3a6d-46c5" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="2449-a3a0-2095-31e4" type="max"/>
          </constraints>
        </entryLink>
      </entryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="3.0"/>
        <cost name="pts" typeId="points" value="45.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="d96e-e7b4-6204-0b07" name="Starweaver" publicationId="7d24-b92f-pubN65537" page="63" hidden="false" collective="false" import="true" type="unit">
      <profiles>
        <profile id="2790-c5a1-a03c-6bca" name="Starweaver" publicationId="7d24-b92f-pubN65537" page="63" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
          <characteristics>
            <characteristic name="M" typeId="0bdf-a96e-9e38-7779">16&quot;</characteristic>
            <characteristic name="WS" typeId="e7f0-1278-0250-df0c">3+</characteristic>
            <characteristic name="BS" typeId="381b-eb28-74c3-df5f">3+</characteristic>
            <characteristic name="S" typeId="2218-aa3c-265f-2939">5</characteristic>
            <characteristic name="T" typeId="9c9f-9774-a358-3a39">5</characteristic>
            <characteristic name="W" typeId="f330-5e6e-4110-0978">6</characteristic>
            <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">3</characteristic>
            <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">8</characteristic>
            <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">4+</characteristic>
          </characteristics>
        </profile>
        <profile id="6bfb-65df-e544-67e2" name="Starweaver - Transport" publicationId="7d24-b92f-pubN65537" page="63" hidden="false" typeId="b3a8-0452-7436-44d1" typeName="Transport">
          <characteristics>
            <characteristic name="Capacity" typeId="15aa-1916-a38b-d223">A Starweaver can transport 6 MASQUE INFANTRY models.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <infoLinks>
        <infoLink id="4dbc-61d8-fa77-0d30" name="New InfoLink" hidden="false" targetId="847b-aed6-3531-adb1" type="profile"/>
        <infoLink id="e8aa-e4af-31d9-8358" name="New InfoLink" hidden="false" targetId="8210-8f73-bf99-5b97" type="profile"/>
        <infoLink id="7678-44d7-1e4e-824b" name="Open-topped" hidden="false" targetId="cf69-4ca7-8cba-2f16" type="profile"/>
        <infoLink id="8da7-f96f-4c0c-9511" name="New InfoLink" hidden="false" targetId="046c-9565-b216-87c7" type="profile"/>
        <infoLink id="8969-864f-f08f-e753" name="New InfoLink" hidden="false" targetId="1fde-5ed2-74f7-f766" type="profile"/>
        <infoLink id="0a77-0be4-d2ce-d936" name="Strength from Death" hidden="false" targetId="e1ca-b33f-a52f-c11c" type="rule"/>
      </infoLinks>
      <categoryLinks>
        <categoryLink id="2258-72fc-4391-04df" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="f9bf-0ae1-dbae-c441" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="d1b4-f8d8-8de5-e322" name="New CategoryLink" hidden="false" targetId="1b66-3f5f-6705-079a" primary="true"/>
        <categoryLink id="caec-0db1-8b33-e010" name="New CategoryLink" hidden="false" targetId="3117-16d8-fcef-4f56" primary="false"/>
        <categoryLink id="4e88-7078-ef32-abc2" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="b58c-e88f-3191-1023" name="New CategoryLink" hidden="false" targetId="6cc4-1b62-8e8a-05cd" primary="false"/>
        <categoryLink id="7e46-5d6f-0388-9c0b" name="New CategoryLink" hidden="false" targetId="c8fd-783f-3230-493e" primary="false"/>
        <categoryLink id="74cc-7255-c8fc-eff1" name="New CategoryLink" hidden="false" targetId="c5f9-ea01-8d12-908e" primary="false"/>
      </categoryLinks>
      <entryLinks>
        <entryLink id="fda0-b71d-fdbc-40bf" name="New EntryLink" hidden="false" collective="false" import="true" targetId="c791-d8b1-80d1-d707" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="bb29-1c50-bb0b-64ef" type="max"/>
            <constraint field="selections" scope="parent" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="4318-6b5d-45f7-1eff" type="min"/>
          </constraints>
        </entryLink>
        <entryLink id="273d-2224-e0ca-c4c3" name="Unit has battle honors?" hidden="false" collective="false" import="true" targetId="4763-757f-499f-d998" type="selectionEntry"/>
        <entryLink id="fd6c-88eb-af21-2b6e" name="Battle Honors" hidden="false" collective="false" import="true" targetId="5518-d0f5-a880-d71c" type="selectionEntryGroup"/>
      </entryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="5.0"/>
        <cost name="pts" typeId="points" value="60.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="3e87-4146-bac7-5c55" name="Voidweaver" publicationId="7d24-b92f-pubN65537" page="62" hidden="false" collective="false" import="true" type="unit">
      <profiles>
        <profile id="c758-104a-aac0-57b9" name="Voidweaver" publicationId="7d24-b92f-pubN65537" page="56" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
          <characteristics>
            <characteristic name="M" typeId="0bdf-a96e-9e38-7779">16&quot;</characteristic>
            <characteristic name="WS" typeId="e7f0-1278-0250-df0c">3+</characteristic>
            <characteristic name="BS" typeId="381b-eb28-74c3-df5f">3+</characteristic>
            <characteristic name="S" typeId="2218-aa3c-265f-2939">5</characteristic>
            <characteristic name="T" typeId="9c9f-9774-a358-3a39">5</characteristic>
            <characteristic name="W" typeId="f330-5e6e-4110-0978">6</characteristic>
            <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">3</characteristic>
            <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">8</characteristic>
            <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">4+</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <infoLinks>
        <infoLink id="aa07-15a7-97a9-a7d1" name="New InfoLink" hidden="false" targetId="847b-aed6-3531-adb1" type="profile"/>
        <infoLink id="dde4-9199-b077-4982" name="Explodes" hidden="false" targetId="8210-8f73-bf99-5b97" type="profile"/>
        <infoLink id="906c-e2d1-e42a-b701" name="New InfoLink" hidden="false" targetId="046c-9565-b216-87c7" type="profile"/>
        <infoLink id="ee3b-0a87-40d1-9831" name="New InfoLink" hidden="false" targetId="1fde-5ed2-74f7-f766" type="profile"/>
        <infoLink id="63b0-9865-544e-8603" name="Strength from Death" hidden="false" targetId="e1ca-b33f-a52f-c11c" type="rule"/>
      </infoLinks>
      <categoryLinks>
        <categoryLink id="3352-6210-4e74-6dc3" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="3d89-d128-ee83-ffe3" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="b9e9-df01-b610-288a" name="New CategoryLink" hidden="false" targetId="3117-16d8-fcef-4f56" primary="false"/>
        <categoryLink id="a1b4-537f-99d9-e185" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="9e03-f95e-35de-a0f4" name="New CategoryLink" hidden="false" targetId="c8fd-783f-3230-493e" primary="false"/>
        <categoryLink id="e22d-5816-b1f1-f3e3" name="New CategoryLink" hidden="false" targetId="abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6" primary="true"/>
        <categoryLink id="1647-2eef-da61-0b21" name="New CategoryLink" hidden="false" targetId="342e-9e5d-e689-31bc" primary="false"/>
      </categoryLinks>
      <selectionEntryGroups>
        <selectionEntryGroup id="a49d-bd93-8bec-9015" name="Primary Weapon" hidden="false" collective="false" import="true" defaultSelectionEntryId="89c3-49c2-7317-d965">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="2358-5a16-22ac-84fc" type="max"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="28a5-a5ad-090e-41f7" type="min"/>
          </constraints>
          <entryLinks>
            <entryLink id="89c3-49c2-7317-d965" name="Haywire Cannon" hidden="false" collective="false" import="true" targetId="e2fb-277f-b1db-836b" type="selectionEntry"/>
            <entryLink id="d044-a8aa-3772-f097" name="Prismatic Cannon" hidden="false" collective="false" import="true" targetId="a38e-00b0-2bea-3202" type="selectionEntry"/>
          </entryLinks>
        </selectionEntryGroup>
      </selectionEntryGroups>
      <entryLinks>
        <entryLink id="be55-9c91-24f1-3b10" name="Shuriken Cannon" hidden="false" collective="false" import="true" targetId="c791-d8b1-80d1-d707" type="selectionEntry">
          <constraints>
            <constraint field="selections" scope="parent" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="98d3-08c5-18fc-df9b" type="max"/>
            <constraint field="selections" scope="parent" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="9708-7375-977d-5845" type="min"/>
          </constraints>
        </entryLink>
        <entryLink id="4948-613f-28fb-b01d" name="Unit has battle honors?" hidden="false" collective="false" import="true" targetId="4763-757f-499f-d998" type="selectionEntry"/>
        <entryLink id="2cd4-ebd1-9102-eed7" name="Battle Honors" hidden="false" collective="false" import="true" targetId="5518-d0f5-a880-d71c" type="selectionEntryGroup"/>
      </entryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="6.0"/>
        <cost name="pts" typeId="points" value="55.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="50b6-34fa-10fe-d5be" name="Skyweavers" publicationId="7d24-b92f-pubN65537" page="61" hidden="false" collective="false" import="true" type="unit">
      <modifiers>
        <modifier type="set" field="e356-c769-5920-6e14" value="9">
          <conditions>
            <condition field="selections" scope="50b6-34fa-10fe-d5be" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="model" type="greaterThan"/>
          </conditions>
        </modifier>
        <modifier type="set" field="e356-c769-5920-6e14" value="13">
          <conditions>
            <condition field="selections" scope="50b6-34fa-10fe-d5be" value="4.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="model" type="greaterThan"/>
          </conditions>
        </modifier>
      </modifiers>
      <infoLinks>
        <infoLink id="c4f4-29e9-3ae9-7bbe" name="Rising Crescendo" hidden="false" targetId="60da-8dc8-7bf4-2efd" type="profile"/>
        <infoLink id="6f0d-4b64-2796-1200" name="Blur of Colour" hidden="false" targetId="1fde-5ed2-74f7-f766" type="profile"/>
        <infoLink id="565b-b162-3806-0c32" name="New InfoLink" hidden="false" targetId="046c-9565-b216-87c7" type="profile"/>
        <infoLink id="462f-aeae-4e09-0eca" name="New InfoLink" hidden="false" targetId="86a8-5c65-d40b-d0a6" type="profile"/>
        <infoLink id="03f7-126e-260b-3311" name="Strength from Death" hidden="false" targetId="e1ca-b33f-a52f-c11c" type="rule"/>
      </infoLinks>
      <categoryLinks>
        <categoryLink id="1c85-1a08-92f8-66f7" name="New CategoryLink" hidden="false" targetId="05e9-e880-b1fb-ce90" primary="false"/>
        <categoryLink id="b181-1812-a639-800b" name="New CategoryLink" hidden="false" targetId="fb5a-2f35-6253-b891" primary="false"/>
        <categoryLink id="05c0-542a-9759-e5c0" name="New CategoryLink" hidden="false" targetId="f406-94c7-4d73-4784" primary="false"/>
        <categoryLink id="5b8e-f818-8e46-5f7d" name="New CategoryLink" hidden="false" targetId="1c6f-0311-3eba-3180" primary="false"/>
        <categoryLink id="6ade-65d0-2183-70e9" name="New CategoryLink" hidden="false" targetId="3117-16d8-fcef-4f56" primary="false"/>
        <categoryLink id="6349-3c59-6960-1cd4" name="New CategoryLink" hidden="false" targetId="c274d0b0-5866-44bc-9810-91c136ae7438" primary="true"/>
        <categoryLink id="9817-ebaa-b0e3-50da" name="New CategoryLink" hidden="false" targetId="bebc-c8e2-5bdf-e056" primary="false"/>
      </categoryLinks>
      <selectionEntries>
        <selectionEntry id="310e-94e0-3b25-2f78" name="Skyweaver" publicationId="7d24-b92f-pubN65537" page="61" hidden="false" collective="false" import="true" type="model">
          <constraints>
            <constraint field="selections" scope="parent" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="a21a-ee70-d88f-e35a" type="min"/>
            <constraint field="selections" scope="parent" value="6.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5ccf-9c1c-9ef7-8553" type="max"/>
          </constraints>
          <profiles>
            <profile id="2ef0-8140-118d-255c" name="Skyweaver" publicationId="7d24-b92f-pubN65537" page="61" hidden="false" typeId="800f-21d0-4387-c943" typeName="Unit">
              <characteristics>
                <characteristic name="M" typeId="0bdf-a96e-9e38-7779">16&quot;</characteristic>
                <characteristic name="WS" typeId="e7f0-1278-0250-df0c">3+</characteristic>
                <characteristic name="BS" typeId="381b-eb28-74c3-df5f">3+</characteristic>
                <characteristic name="S" typeId="2218-aa3c-265f-2939">3</characteristic>
                <characteristic name="T" typeId="9c9f-9774-a358-3a39">4</characteristic>
                <characteristic name="W" typeId="f330-5e6e-4110-0978">3</characteristic>
                <characteristic name="A" typeId="13fc-b29b-31f2-ab9f">3</characteristic>
                <characteristic name="Ld" typeId="00ca-f8b8-876d-b705">8</characteristic>
                <characteristic name="Save" typeId="c0df-df94-abd7-e8d3">4+</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <selectionEntryGroups>
            <selectionEntryGroup id="1816-166f-45b1-59ee" name="Skyweavers Melee Weapons" hidden="false" collective="false" import="true" defaultSelectionEntryId="ded2-5c33-9d5e-f252">
              <constraints>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="c35b-8d77-4676-e444" type="min"/>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5d2e-cd98-e8f0-9238" type="max"/>
              </constraints>
              <entryLinks>
                <entryLink id="f0d2-9f0f-e994-41f7" name="Zephyrglaive" hidden="false" collective="false" import="true" targetId="4ba5-5958-0ed5-2acb" type="selectionEntry"/>
                <entryLink id="ded2-5c33-9d5e-f252" name="New EntryLink" hidden="false" collective="false" import="true" targetId="5cec-256b-7cfd-038f" type="selectionEntry"/>
              </entryLinks>
            </selectionEntryGroup>
            <selectionEntryGroup id="da8f-311e-480d-371a" name="Skyweavers Ranged Weapons" hidden="false" collective="false" import="true" defaultSelectionEntryId="dc56-dc99-421c-05e4">
              <constraints>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="b847-8813-00fa-a7bd" type="min"/>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="deed-5e1c-024b-d7c5" type="max"/>
              </constraints>
              <entryLinks>
                <entryLink id="a8bf-701f-a210-81ea" name="New EntryLink" hidden="false" collective="false" import="true" targetId="e2fb-277f-b1db-836b" type="selectionEntry"/>
                <entryLink id="dc56-dc99-421c-05e4" name="New EntryLink" hidden="false" collective="false" import="true" targetId="c791-d8b1-80d1-d707" type="selectionEntry"/>
              </entryLinks>
            </selectionEntryGroup>
          </selectionEntryGroups>
          <costs>
            <cost name="pts" typeId="points" value="25.0"/>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
      </selectionEntries>
      <entryLinks>
        <entryLink id="c6b0-bc17-b821-e753" name="Unit has battle honors?" hidden="false" collective="false" import="true" targetId="4763-757f-499f-d998" type="selectionEntry"/>
        <entryLink id="39a5-7cad-9040-f9b2" name="Battle Honors" hidden="false" collective="false" import="true" targetId="5518-d0f5-a880-d71c" type="selectionEntryGroup"/>
      </entryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="4.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="8ffa-cedb-4c0c-1b81" name="Luck of the Laughing God" publicationId="7d24-b92f-pubN72737" page="93" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="de8c-02a1-ddff-8c34" type="max"/>
      </constraints>
      <profiles>
        <profile id="0691-3491-efa2-bbda" name="Luck of the Laughing God" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Re-roll hit rolls, wound rolls and damage rolls of 1 for your Warlord.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="1b5c-b38b-24a2-63d9" name="Masque Form" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="c021-4afe-3ec0-cff6" type="max"/>
        <constraint field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="d3fb-09af-3e9d-ce22" type="min"/>
      </constraints>
      <categoryLinks>
        <categoryLink id="b33c-4306-2885-e068" name="New CategoryLink" hidden="false" targetId="ff36a6f3-19bf-4f48-8956-adacfd28fe74" primary="true"/>
      </categoryLinks>
      <selectionEntryGroups>
        <selectionEntryGroup id="68e4-9924-e409-29e9" name="Masque Form" hidden="false" collective="false" import="true" defaultSelectionEntryId="ed3d-937d-5476-8bca">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5468-0217-b9ae-4306" type="max"/>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="855d-9245-eb9a-04fe" type="min"/>
          </constraints>
          <selectionEntries>
            <selectionEntry id="ed3d-937d-5476-8bca" name="None (Mixed Detachment)" hidden="false" collective="false" import="true" type="upgrade">
              <costs>
                <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
                <cost name="pts" typeId="points" value="0.0"/>
                <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
              </costs>
            </selectionEntry>
            <selectionEntry id="1de1-3493-f517-79d8" name="Ynnari" hidden="false" collective="false" import="true" type="upgrade">
              <modifiers>
                <modifier type="set" field="492c-298b-db1a-6076" value="0.0">
                  <conditionGroups>
                    <conditionGroup type="and">
                      <conditions>
                        <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="a049-52ed-ef53-63ec" type="equalTo"/>
                        <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="a06f-ac19-7738-a420" type="equalTo"/>
                        <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ff5c-6397-4052-63eb" type="equalTo"/>
                      </conditions>
                    </conditionGroup>
                  </conditionGroups>
                </modifier>
              </modifiers>
              <constraints>
                <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" id="492c-298b-db1a-6076" type="max"/>
              </constraints>
              <profiles>
                <profile id="e9f7-a97d-521b-5033" name="Ynnari" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
                  <characteristics>
                    <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Requires a Ynnari Character in Detachment. Detachment loses subfaction keywords and gains the REBORN keyword instead, and my not be the target of original subfaction stratagems.</characteristic>
                  </characteristics>
                </profile>
              </profiles>
              <categoryLinks>
                <categoryLink id="72e5-e403-d36d-d4fd" name="Faction: Ynnari" hidden="false" targetId="ebb3-4f37-6e57-7a8e" primary="false"/>
              </categoryLinks>
              <costs>
                <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
                <cost name="pts" typeId="points" value="0.0"/>
                <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
              </costs>
            </selectionEntry>
          </selectionEntries>
          <entryLinks>
            <entryLink id="0463-e43f-7500-68e1" name="The Midnight Sorrow: The Art of Death" hidden="false" collective="false" import="true" targetId="da1e-0f68-89a5-35c9" type="selectionEntry"/>
            <entryLink id="4b0a-3310-bdb2-03df" name="The Veiled Path: Riddle-Smiths" hidden="false" collective="false" import="true" targetId="dcbe-a811-be1e-ec98" type="selectionEntry"/>
            <entryLink id="259e-dae5-7dcf-2ae4" name="The Frozen Stars: Hysterical Fury" hidden="false" collective="false" import="true" targetId="c98a-145f-261e-195e" type="selectionEntry"/>
            <entryLink id="e1fb-8099-3ff3-e474" name="The Soaring Spite: Serpent&apos;s Blood" hidden="false" collective="false" import="true" targetId="c637-b918-c0f8-1afb" type="selectionEntry"/>
            <entryLink id="6db2-0225-61e9-fc94" name="The Dreaming Shadow: Sombre Sentinels" hidden="false" collective="false" import="true" targetId="381c-1c61-37b2-7870" type="selectionEntry"/>
            <entryLink id="c021-b6d5-5611-969f" name="The Silent Shroud: Dance of Nightmares Made Flesh" hidden="false" collective="false" import="true" targetId="6666-2609-810b-8d79" type="selectionEntry"/>
          </entryLinks>
        </selectionEntryGroup>
      </selectionEntryGroups>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="a5ce-b16b-56cd-e78a" name="Warlord" hidden="false" collective="false" import="true" type="upgrade">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditionGroups>
            <conditionGroup type="or">
              <conditions>
                <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="atLeast"/>
                <condition field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" childId="75e4-e07c-3a6d-46c5" type="atLeast"/>
              </conditions>
            </conditionGroup>
          </conditionGroups>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="d990-d362-b865-7042" type="max"/>
      </constraints>
      <categoryLinks>
        <categoryLink id="a41d-f9e7-2ae2-9b0d" name="Warlord" hidden="false" targetId="ae09-117e-a6fa-316b" primary="false"/>
      </categoryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="da1e-0f68-89a5-35c9" name="The Midnight Sorrow: The Art of Death" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="e56e-8a38-b998-6437" name="Midnight Sorrow: The Art of Death" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Units with this form can move an additional D6&quot; when they Fall Back. In addition, units with this form can consolidate up to 6&quot;.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="dcbe-a811-be1e-ec98" name="The Veiled Path: Riddle-Smiths" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="1f68-96c1-280e-fe30" name="The Veiled Path: Riddle-Smiths" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">At the start of each Fight phase roll two dice and discard the highest result. Until the end of the phase, each time your opponent targets a unit with this form and makes a hit roll that, before modifiers, exactly matches your dice result, that hit roll fails.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="c98a-145f-261e-195e" name="The Frozen Stars: Hysterical Fury" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="a19b-c3ae-a9a8-8dfd" name="Frozen Stars: Hysterical Fury" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">If a unit with this form charges in the Charge phase, add 1 to their Attacks characteristic until the end of the ensuing Fight phase.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="c637-b918-c0f8-1afb" name="The Soaring Spite: Serpent&apos;s Blood" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="7ad2-6618-d41a-9dea" name="The Soaring Spite: Serpent&apos;s Blood" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Models with this form that can FLY, or that are embarked upon a TRANSPORT that can FLY, treat all Pistol weapons they are equpped with as Assault 1 weapons during a turn in which they (or the transport they are embarked upon) Advanced. In addition, these models do not suffer the penalty to their hit rolls for shooting Assault weapons during a turn in which they Advanced.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="381c-1c61-37b2-7870" name="The Dreaming Shadow: Sombre Sentinels" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="ca57-de54-b3fc-b3fd" name="The Dreaming Shadow: Sombre Sentinels" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">When a unit with this form fails a Morale test, only one model from this unit must flee. In addition, each time a model with this form is slain or flees, roll a D6 before removing that model: on a 4+, that model can either shoot with one of its ranged weapons as if it were the shooting phase, or make a single attack as if it were the Fight phase.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="6666-2609-810b-8d79" name="The Silent Shroud: Dance of Nightmares Made Flesh" hidden="false" collective="false" import="true" type="upgrade">
      <profiles>
        <profile id="c882-1b97-c57a-9425" name="The Silent Shroud: Dance of Nightmares Made Flesh" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Subtract 1 from the Leadership characteristic of enemy units while they are within 6&quot; of any units from your army with this form. In addition, whenever your opponent takes a morale test for a unit that is within 6&quot; of any units from your army with this form, they must roll two dice and discard the lowest result.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="c9c4-384b-e730-8ee4" name="Veiled Path: Webway Walker" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="1deb-669b-293d-1796" type="max"/>
      </constraints>
      <profiles>
        <profile id="7acd-876f-9561-1f1d" name="Veiled Path: Webway Walker" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">During deployment, you can set your Warlord up in the webway instead of placing them on the battlefield. Your Warlord can emerge at the end of any of your Movement phases - set them up anywhere on the battlefield more than 9&quot; from any enemy units. Furthermore, you can use the Webway Assault Stratagem twice.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="f112-97ca-8928-f1fb" name="A Foot in the Future" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5442-f88e-3d28-bc60" type="max"/>
      </constraints>
      <profiles>
        <profile id="99e5-20d4-0b12-f1a1" name="A Foot in the Future" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Add 2&quot; to your Warlord&apos;s Move characteristic. In addition, add 1&quot; to the distance your Warlord can move each time it Advances, Fall Back, charges, performs a Heroic Intervention, piles in or consolidates.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="2c49-f836-512c-583d" name="Fractal Storm" publicationId="7d24-b92f-pubN65537" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="ce47-b965-4284-9ec3" type="max"/>
      </constraints>
      <profiles>
        <profile id="3574-c4e2-7734-0438" name="Fractal Storm" publicationId="7d24-b92f-pubN65537" page="74" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Your Warlord has a 3+ invulnerable save against melee weapons.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="13fa-8a9f-ccf4-e8fa" name="Player of the Dark" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="d887-1621-8b77-9d64" type="max"/>
      </constraints>
      <profiles>
        <profile id="058f-b831-73c9-1971" name="Player of the Dark" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Each wound roll of 6+ made for your Warlord&apos;s attacks in the Fight phase inflict one mortal wound in addition to their normal damage.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="2f51-a0b5-8914-7c71" name="Player of the Twilight" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="a38e-ffed-4bbc-ccd3" type="max"/>
      </constraints>
      <profiles>
        <profile id="ccde-b16f-70d8-03e5" name="Player of the Twilight" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Once per battle you can re-roll a hit roll, wound roll, or save roll made for your warlord. In addition, if your army is Battle-forged and your warlord is on the battlefield, roll a D6 each time you or your opponent uses a stratagem. If the result exactly matches the number of command points spent to use that stratagem, then you gain that many command points.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="6494-f334-08ad-47c7" name="Player of the Light" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="ace0-15b7-031e-507a" type="max"/>
      </constraints>
      <profiles>
        <profile id="a9ce-5106-af25-717f" name="Player of the Light" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Re-roll failed charge rolls made for your Warlord and any friendly &lt;MASQUE&gt; units whilst they are within 6&quot; of your warlord.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="4a1f-f159-c52b-a57d" name="Soaring Spite: Skystrider" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="8207-17e4-df25-7e1a" type="max"/>
      </constraints>
      <profiles>
        <profile id="15a9-ba83-0d69-89e8" name="Soaring Spite: Skystrider" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Your Warlord can disembark from a TRANSPORT even after it has moved.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="9d36-eefd-0e4a-b678" name="Silent Shroud: The Final Joke" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="582b-f453-01ae-34a7" type="max"/>
      </constraints>
      <profiles>
        <profile id="cdf3-95a4-b725-9f2d" name="Silent Shroud: The Final Joke" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">If your Warlord is slain in the Fight phase, roll a D6. On a 2+, the unit that killed your Warlord suffers D3 mortal woundsafter it has finished making all its attacks. On a 6, the enemy unit suffers D6 mortal wounds instead.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="5267-24f9-3cd3-4a51" name="Midnight Sorrow: Nemesis of the Damned" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="5e49-1f35-8979-5ba1" type="max"/>
      </constraints>
      <profiles>
        <profile id="b813-5955-a969-4132" name="Midnight Sorrow: Nemesis of the Damned" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Each hit roll of 6+ for your Warlord in the Fight phase scores 2 hits instead of 1. In addition, add 1 to hit rolls made by your Warlord against CHAOS units.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="ba41-2d9b-c8a7-64a4" name="Frozen Stars: Our Kin Shall Rise Again" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="51ce-33b1-f001-d467" type="max"/>
      </constraints>
      <profiles>
        <profile id="c987-6d63-8c38-dbce" name="Frozen Stars: Our Kin Shall Rise Again" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Roll a D6 each time a model from a FROZEN STARS unit from your army within 6&quot; of your Warlord loses its final wound; on a 6 that wound is not lost, and the model is not slain. This Warlord trait has no effect if the unit is under the effects of the Webway Dance psychic power.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="30bb-0f05-221a-14ef" name="Dreaming Shadow: Warden of the Dead" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="94b8-b898-be92-ff6c" type="max"/>
      </constraints>
      <profiles>
        <profile id="61c7-5113-b1b5-8655" name="Dreaming Shadow: Warden of the Dead" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Add 1 to any Sombre Sentinels rolls made for DREAMING SHADOW units from your army within 6&quot; of your Warlord (add 2 instead whilst there are any NECRONS units on the battlefield).</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="fe9d-4b6a-a67a-4670" name="The Mask of Secrets" publicationId="7d24-b92f-pubN72737" page="93" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="4d0a-1af9-3185-74c1" type="max"/>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="fde8-487d-46f7-f122" type="max"/>
      </constraints>
      <profiles>
        <profile id="1fbc-0226-34c2-5210" name="The Mask of Secrets" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">The bearer increases their Leadership characteristic by 1. In addition, all enemy units reduce their Leadership characteristic by 1 whilst they are within 6&quot; of the bearer.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="04cd-a585-4089-a3b1" name="The Starmist Raiment" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="518c-58e3-7347-be23" type="max"/>
      </constraints>
      <profiles>
        <profile id="7a59-5a5a-260f-ac4b" name="The Starmist Raiment" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">The wearer has a 3+ invulnerable save against ranged weapons. In addition, enemy units cannot fire Overwatch at the wearer during a turn in which the wearer Advanced.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="7813-bd0e-4df8-dbfc" name="The Laughing God&apos;s Eye" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="c820-e959-3b64-0ae8" type="max"/>
      </constraints>
      <profiles>
        <profile id="4c3c-ba84-f1b1-458a" name="The Laughing God&apos;s Eye" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Friendly HARLEQUINS units automatically pass Morale tests whilst they are within 6&quot; of the wearer. In addition, roll a D6 each time a friendly HARLEQUINS unit suffers a mortal wound in the Psychic phase whilst they are within 6&quot; of the wearer - on a 6, that mortal wound is ignored.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="6348-6bcd-afa4-0236" name="The Storied Sword" hidden="false" collective="false" import="true" type="upgrade">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="bc9e-551d-9afb-78d5" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="cd22-1cc8-8e23-9188" type="max"/>
      </constraints>
      <profiles>
        <profile id="a2a5-529f-3dae-585c" name="The Storied Sword" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">+1</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-3</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D3</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">Re-roll failed hit rolls for this weapon.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="d8d5-d3a9-a828-34d5" name="Crescendo" hidden="false" collective="false" import="true" type="upgrade">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="b212-064c-a4a9-49f7" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="b4d1-d515-778c-16ac" type="max"/>
      </constraints>
      <profiles>
        <profile id="7d16-2e13-bb4d-54fe" name="Crescendo" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">12&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Pistol D6</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">4</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">0</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">2</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -3</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="ccab-73d6-dd3e-d47f" name="The Mirrorstave" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="74cf-7bb1-c681-9c28" type="max"/>
      </constraints>
      <profiles>
        <profile id="1f9b-9d38-3a26-8eec" name="The Mirrorstave (Shooting)" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">12&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 6</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">*</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">The wound roll required for this weapon in the shooting phase is equal to the target units unmodified ballistic skill. For example, if the weapon targets a unit with ballistic skill of 3+, the weapon will wound on rolls of 3+. The wound roll required for this weapon in the Fight phase is equal to the target unit&apos;s unmodified weapon skill. If the unit contains models with different Ballistic Skill/Weapon Skill characteristics, use the best characteristic in the unit. If the target&apos;s characteristic is &apos;-&apos;, then the wound roll required is 6+</characteristic>
          </characteristics>
        </profile>
        <profile id="ea37-ca5c-d21d-3fd3" name="The Mirrorstave (Melee)" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">*</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D3</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">The wound roll required for this weapon in the shooting phase is equal to the target units unmodified ballistic skill. For example, if the weapon targets a unit with ballistic skill of 3+, the weapon will wound on rolls of 3+. The wound roll required for this weapon in the Fight phase is equal to the target unit&apos;s unmodified weapon skill. If the unit contains models with different Ballistic Skill/Weapon Skill characteristics, use the best characteristic in the unit. If the target&apos;s Ballistic Skill/Weapon Skill characteristic is &apos;-&apos;, then the wound roll required is 6+.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="0742-4cb7-bf4e-16cc" name="Enigmas of the Black Library (1 Relic)" hidden="false" collective="false" import="true" type="upgrade">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
        <modifier type="set" field="81d8-f55b-1926-739d" value="0.0">
          <conditions>
            <condition field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="dc1c-c3ca-66fa-fd12" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" id="81d8-f55b-1926-739d" type="max"/>
      </constraints>
      <categoryLinks>
        <categoryLink id="8215-208c-848c-4825" name="New CategoryLink" hidden="false" targetId="ff36a6f3-19bf-4f48-8956-adacfd28fe74" primary="true"/>
      </categoryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="-1.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="dc1c-c3ca-66fa-fd12" name="Enigmas of the Black Library (2 Relics)" hidden="false" collective="false" import="true" type="upgrade">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
        <modifier type="set" field="db3a-3212-aba0-2d4f" value="0.0">
          <conditions>
            <condition field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="0742-4cb7-bf4e-16cc" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" id="db3a-3212-aba0-2d4f" type="max"/>
      </constraints>
      <categoryLinks>
        <categoryLink id="b256-9d4d-a74d-155e" name="New CategoryLink" hidden="false" targetId="ff36a6f3-19bf-4f48-8956-adacfd28fe74" primary="true"/>
      </categoryLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="-3.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="7922-1c00-c0cb-ab72" name="The Scintillant Veil" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="fc19-3e5c-580a-bd21" type="max"/>
      </constraints>
      <profiles>
        <profile id="0066-efed-e2e0-c3ed" name="The Scintillant Veil" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Increase the range of all the wearer&apos;s aura abilities by 3&quot;.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="2fe7-1d08-cac2-4fbe" name="Faolchu&apos;s Talon" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="1029-97d8-bed9-929a" type="max"/>
      </constraints>
      <profiles>
        <profile id="0f45-4032-4eab-e451" name="Faolchu&apos;s Talon" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">SOARING SPITE model only. While the wearer is embarked on a SOARING SPITE TRANSPORT, that vehicle may move an additional 6&quot; in the movement phase. In addition, if a SOARING SPITE TRANSPORT is destroyed while the wearer is embarked upon it, you do not need to roll any dice to see if any disembarking models are slain or if the transport explodes - no disembarking models are slain and the transport does not explode.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="32c7-f904-0a5e-c3c8" name="Midnight&apos;s Chime" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="4879-bdab-1e56-8a93" type="max"/>
      </constraints>
      <profiles>
        <profile id="3e89-f41c-8653-de02" name="Midnight&apos;s Chime" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Once per battle, at the beginning of the Fight phase, the bearer can activate Midnight&apos;s Chime. Until the end of the phase all MIDNIGHT SORROW units increase their Attacks characteristics by 1 whilst they are within 6&quot; of the bearer.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="7c01-7049-b709-d0e7" name="Curtainfall" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="bb37-15c4-d223-23f2" type="max"/>
      </constraints>
      <profiles>
        <profile id="e10d-51b3-3103-fd55" name="Curtainfall (shrieker)" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">30&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 1</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">7</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-3</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">When attacking with this weapon, choose one of the profiles. Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -4. Each time an INFANTRY model is slain by an attack made with this weapon&apos;s shrieker profile, its unit suffers D3 mortal wounds. If any models in a unit are slain by this weapon, subract 2 from that unit&apos;s Leadership characteristic until the end of the turn; this modifier is not cumulative with that caused by a shreiker cannon.</characteristic>
          </characteristics>
        </profile>
        <profile id="abb1-3e82-3253-3108" name="Curtainfall (shuriken)" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">30&quot;</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Assault 3</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">7</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-2</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">1</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">When attacking with this weapon, choose one of the profiles. Each time you make a wound roll of 6+ for this weapon, that hit is resolved with an AP of -4. If any models in a unit are slain by this weapon, subract 2 from that unit&apos;s Leadership characteristic until the end of the turn; this modifier is not cumulative with that caused by a shreiker cannon.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="a8d4-6c63-6856-b8fe" name="The Ghoulmask" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="921c-bd88-363b-bd08" type="max"/>
      </constraints>
      <profiles>
        <profile id="89f9-3174-f580-b4ec" name="The Ghoulmask" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">The wearer of the Ghoulmask can attempt to deny one psychic power in each enemy Psychic phase in the same manner as a PSYKER (if the bearer is already a PSYKER, it may attempt to deny one more psychic powerthan normal). In addition, add 1 to Deny the Witch tests made for the bearer.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="709b-ded3-c8f9-7c7b" name="Cegorach&apos;s Rose" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="c51a-bb32-3fbe-3535" type="max"/>
      </constraints>
      <profiles>
        <profile id="0643-77ff-1022-79bf" name="Cegorach&apos;s Rose" hidden="false" typeId="d5f97c0b-9fc9-478d-aa34-a7c414d3ea48" typeName="Weapon">
          <characteristics>
            <characteristic name="Range" typeId="6fa97fa8-ea74-4a27-a0fb-bc4e5f367464">Melee</characteristic>
            <characteristic name="Type" typeId="077c342f-d7b9-45c6-b8af-88e97cafd3a2">Melee</characteristic>
            <characteristic name="S" typeId="59b1-319e-ec13-d466">+1</characteristic>
            <characteristic name="AP" typeId="75aa-a838-b675-6484">-1</characteristic>
            <characteristic name="D" typeId="ae8a-3137-d65b-4ca7">D3</characteristic>
            <characteristic name="Abilities" typeId="837d-5e63-aeb7-1410">Re-roll failed wound rolls for this weapon. When attacking Infantry, this weapon has a Damage of 3.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="f1b4-469b-6cd2-7e71" name="The Suit of Hidden Knives" hidden="false" collective="false" import="true" type="upgrade">
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="0c76-dfc6-8816-b7d7" type="max"/>
      </constraints>
      <profiles>
        <profile id="e15f-f462-8b11-5307" name="The Suit of Hidden Knives" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
          <characteristics>
            <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Roll a D6 each time a hit roll of 1 is made for an enemy model targeting the wearer in the Fight phase. On a 2+, that model&apos;s unit suffers a mortal wound after the unit has resolved all of its attacks.</characteristic>
          </characteristics>
        </profile>
      </profiles>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="23dd-3b4e-8936-1b89" name="Hungering Blade" hidden="false" collective="false" import="true" type="upgrade">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="bc9e-551d-9afb-78d5" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" id="0d9a-64f1-d18c-908a" type="max"/>
      </constraints>
      <infoLinks>
        <infoLink id="a95c-ac20-79b5-4b42" name="Hungering Blade" hidden="false" targetId="2cec-eb16-6120-2e36" type="profile"/>
      </infoLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
      </costs>
    </selectionEntry>
    <selectionEntry id="98ce-cf07-62fe-d79b" name="Song of Ynnead" hidden="false" collective="false" import="true" type="upgrade">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="b212-064c-a4a9-49f7" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="f1c4-4271-e61c-ad95" type="max"/>
      </constraints>
      <infoLinks>
        <infoLink id="4759-40a5-e086-dd31" name="Song of Ynnead" hidden="false" targetId="ff90-6b1b-6dbb-2f56" type="profile"/>
      </infoLinks>
      <costs>
        <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
        <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
        <cost name="pts" typeId="points" value="0.0"/>
      </costs>
    </selectionEntry>
  </sharedSelectionEntries>
  <sharedSelectionEntryGroups>
    <selectionEntryGroup id="7961-453c-a38d-186c" name="Phantasmancy" publicationId="7d24-b92f-pubN76527" page="68" hidden="false" collective="false" import="true">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="parent" value="2.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="4d0e-dbb3-2e2c-cc1d" type="max"/>
      </constraints>
      <selectionEntries>
        <selectionEntry id="2586-3025-252e-f76d" name="Twilight Pathways" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" collective="false" import="true" type="upgrade">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="e770-a863-7c3a-5897" type="max"/>
          </constraints>
          <profiles>
            <profile id="e960-505f-6ab6-196b" name="Twilight Pathways" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" typeId="ae70-4738-0161-bec0" typeName="Psychic Power">
              <characteristics>
                <characteristic name="Warp Charge" typeId="5ffd-b800-c317-532a">6</characteristic>
                <characteristic name="Range" typeId="fd64-cbc4-94de-24cc">3&quot;</characteristic>
                <characteristic name="Details" typeId="ad96-dfa4-b4ed-656d">If manifested, select a friendly HARLEQUINS unit within 3&quot; of the psyker and visible to it. That unit can immediately move as if it were its Movement phase. You cannot use Twilight Pathways on a unit more than once in each Psychic phase.</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <costs>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="pts" typeId="points" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
        <selectionEntry id="05cf-be37-16e7-b7f1" name="Fog of Dreams" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" collective="false" import="true" type="upgrade">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="6a30-22e4-52b4-3fbf" type="max"/>
          </constraints>
          <profiles>
            <profile id="f2a4-3070-8ec8-5e0d" name="Fog of Dreams" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" typeId="ae70-4738-0161-bec0" typeName="Psychic Power">
              <characteristics>
                <characteristic name="Warp Charge" typeId="5ffd-b800-c317-532a">6</characteristic>
                <characteristic name="Range" typeId="fd64-cbc4-94de-24cc">18&quot;</characteristic>
                <characteristic name="Details" typeId="ad96-dfa4-b4ed-656d">If manifested, select a visible enemy unit within 18&quot; of the psyker and visible to it. Until the start of your next Psychic phase, your opponent must subtract 1 from all hit rolls for that unit that target HARLEQUINS INFANTRY units.</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <costs>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="pts" typeId="points" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
        <selectionEntry id="8792-20c9-914a-5d4b" name="Mirror of Minds" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" collective="false" import="true" type="upgrade">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="b2a1-a6ec-e70d-44a5" type="max"/>
          </constraints>
          <profiles>
            <profile id="3cb7-9fb0-ebbd-2399" name="Mirror of Minds" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" typeId="ae70-4738-0161-bec0" typeName="Psychic Power">
              <characteristics>
                <characteristic name="Warp Charge" typeId="5ffd-b800-c317-532a">7</characteristic>
                <characteristic name="Range" typeId="fd64-cbc4-94de-24cc">24&quot;</characteristic>
                <characteristic name="Details" typeId="ad96-dfa4-b4ed-656d">If manifested, select an enemy unit within 24&quot; of the psyker. Then, both players roll a D6. If the Harlequin player&apos;s roll is equal or higher than their opponent&apos;s, then the target suffers 1 mortal wound. Repeat this process until the target is destroyed, or the enemy player rolls a result that is higher than the Harlequin player&apos;s roll.</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <costs>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="pts" typeId="points" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
        <selectionEntry id="dfb6-8d78-f068-27d0" name="Veil of Tears" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" collective="false" import="true" type="upgrade">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="50e7-cea3-fe9d-ce97" type="max"/>
          </constraints>
          <profiles>
            <profile id="110a-64a7-0278-9c05" name="Veil of Tears" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" typeId="ae70-4738-0161-bec0" typeName="Psychic Power">
              <characteristics>
                <characteristic name="Warp Charge" typeId="5ffd-b800-c317-532a">7</characteristic>
                <characteristic name="Range" typeId="fd64-cbc4-94de-24cc">18&quot;</characteristic>
                <characteristic name="Details" typeId="ad96-dfa4-b4ed-656d">If manifested, select a friendly HARLEQUINS INFANTRY unit within 18&quot; of the psyker. Until the start of your next Psychic phase, subtract 1 from hit rolls for attacks made against that unit.</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <costs>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="pts" typeId="points" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
        <selectionEntry id="fe6f-7ac0-599b-2b51" name="Webway Dance" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" collective="false" import="true" type="upgrade">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="f73e-2180-4409-8598" type="max"/>
          </constraints>
          <profiles>
            <profile id="72a4-863c-67ad-91dd" name="Webway Dance" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" typeId="ae70-4738-0161-bec0" typeName="Psychic Power">
              <characteristics>
                <characteristic name="Warp Charge" typeId="5ffd-b800-c317-532a">7</characteristic>
                <characteristic name="Range" typeId="fd64-cbc4-94de-24cc">6&quot;</characteristic>
                <characteristic name="Details" typeId="ad96-dfa4-b4ed-656d">If manifested, then until the start of your next Psychic phase, roll a D6 whenever a friendly HARLEQUINS unit within 6&quot; of the psyker loses a wound; on a 6 that wound is not lost.</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <costs>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="pts" typeId="points" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
        <selectionEntry id="660f-47f7-33df-e68b" name="Shards of Light" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" collective="false" import="true" type="upgrade">
          <constraints>
            <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="c06b-5829-b506-4799" type="max"/>
          </constraints>
          <profiles>
            <profile id="f29d-2e42-b72e-903d" name="Shards of Light" publicationId="7d24-b92f-pubN65537" page="73" hidden="false" typeId="ae70-4738-0161-bec0" typeName="Psychic Power">
              <characteristics>
                <characteristic name="Warp Charge" typeId="5ffd-b800-c317-532a">7</characteristic>
                <characteristic name="Range" typeId="fd64-cbc4-94de-24cc">18&quot;</characteristic>
                <characteristic name="Details" typeId="ad96-dfa4-b4ed-656d">If manifested, select an enemy unit within 18&quot; of the psyker and visible to it. That unit suffers D3 mortal wounds and must subtract 1 from its leadership characteristic until the start of the next Psychic phase.</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <costs>
            <cost name=" PL" typeId="e356-c769-5920-6e14" value="0.0"/>
            <cost name="pts" typeId="points" value="0.0"/>
            <cost name="CP" typeId="2d3b-b544-ad49-fb75" value="0.0"/>
          </costs>
        </selectionEntry>
      </selectionEntries>
    </selectionEntryGroup>
    <selectionEntryGroup id="305c-7184-81fb-2bd3" name="Warlord Trait" hidden="false" collective="false" import="true">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="8785-7ef7-a22b-3e76" type="max"/>
        <constraint field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="true" id="2fee-ec06-8ff3-9386" type="max"/>
      </constraints>
      <entryLinks>
        <entryLink id="cc41-36e9-4b4a-c906" name="Warlord Traits (CA)" hidden="false" collective="false" import="true" targetId="f673-3d9b-bb1b-377f" type="selectionEntryGroup"/>
        <entryLink id="3f74-e10f-491b-0efd" name="Warlord Traits (BRB)" hidden="false" collective="false" import="true" targetId="d442-1f03-d9da-e77f" type="selectionEntryGroup"/>
        <entryLink id="25f2-03a2-67c1-67e1" name="Luck of the Laughing God" hidden="false" collective="false" import="true" targetId="8ffa-cedb-4c0c-1b81" type="selectionEntry"/>
        <entryLink id="4c73-7de8-f0cd-7779" name="Player of the Dark" hidden="false" collective="false" import="true" targetId="13fa-8a9f-ccf4-e8fa" type="selectionEntry"/>
        <entryLink id="c870-ee4a-a3ff-23b2" name="Player of the Light" hidden="false" collective="false" import="true" targetId="6494-f334-08ad-47c7" type="selectionEntry"/>
        <entryLink id="a6c0-4bfc-3b56-1840" name="Player of the Twilight" hidden="false" collective="false" import="true" targetId="2f51-a0b5-8914-7c71" type="selectionEntry"/>
        <entryLink id="b6e6-fbcb-5872-3245" name="Fractal Storm" hidden="false" collective="false" import="true" targetId="2c49-f836-512c-583d" type="selectionEntry"/>
        <entryLink id="a03c-9eec-1271-44cb" name="One Foot in the Future" hidden="false" collective="false" import="true" targetId="f112-97ca-8928-f1fb" type="selectionEntry"/>
        <entryLink id="616e-2e86-923f-12f1" name="Warlord Trait Silent Shroud" hidden="true" collective="false" import="true" targetId="9d36-eefd-0e4a-b678" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="6666-2609-810b-8d79" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="69e6-7b49-2a71-63ba" name="Warlord Trait Midnight Sorrow" hidden="true" collective="false" import="true" targetId="5267-24f9-3cd3-4a51" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="da1e-0f68-89a5-35c9" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="c420-275f-b45c-852c" name="Warlord Trait Frozen Stars" hidden="true" collective="false" import="true" targetId="ba41-2d9b-c8a7-64a4" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="c98a-145f-261e-195e" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="675f-6da5-5ff3-468f" name="Warlord Trait Dreaming Shadow" hidden="true" collective="false" import="true" targetId="30bb-0f05-221a-14ef" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="381c-1c61-37b2-7870" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="975d-ba7b-8962-62b1" name="Warlord Trait Veiled Path" hidden="true" collective="false" import="true" targetId="c9c4-384b-e730-8ee4" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="dcbe-a811-be1e-ec98" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="10d0-6693-5800-b3f8" name="Soaring Spite: Skystrider" hidden="true" collective="false" import="true" targetId="4a1f-f159-c52b-a57d" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="c637-b918-c0f8-1afb" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
      </entryLinks>
    </selectionEntryGroup>
    <selectionEntryGroup id="16e7-958e-0d9b-8280" name="Enigmas of the Black Library" publicationId="7d24-b92f-pubN72737" page="93" hidden="false" collective="false" import="true">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
        <modifier type="set" field="hidden" value="true">
          <conditionGroups>
            <conditionGroup type="and">
              <conditions>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ae09-117e-a6fa-316b" type="equalTo"/>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="0742-4cb7-bf4e-16cc" type="equalTo"/>
                <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="dc1c-c3ca-66fa-fd12" type="equalTo"/>
              </conditions>
            </conditionGroup>
          </conditionGroups>
        </modifier>
        <modifier type="increment" field="d3e1-1778-7f2f-7def" value="1.0">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ae09-117e-a6fa-316b" type="equalTo"/>
          </conditions>
        </modifier>
        <modifier type="increment" field="d3e1-1778-7f2f-7def" value="1.0">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="0742-4cb7-bf4e-16cc" type="equalTo"/>
          </conditions>
        </modifier>
        <modifier type="increment" field="d3e1-1778-7f2f-7def" value="2.0">
          <conditions>
            <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="dc1c-c3ca-66fa-fd12" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="0602-ad5f-d5bb-e1be" type="max"/>
        <constraint field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" id="d3e1-1778-7f2f-7def" type="max"/>
      </constraints>
      <entryLinks>
        <entryLink id="6034-7852-aec8-90da" name="The Mask of Secrets" hidden="false" collective="false" import="true" targetId="fe9d-4b6a-a67a-4670" type="selectionEntry"/>
        <entryLink id="d64a-0173-a8ab-fcce" name="The Starmist Raiment" hidden="false" collective="false" import="true" targetId="04cd-a585-4089-a3b1" type="selectionEntry"/>
        <entryLink id="920e-eb04-e01f-5fd9" name="The Mirrorstave" hidden="true" collective="false" import="true" targetId="ccab-73d6-dd3e-d47f" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="and">
                  <conditions>
                    <condition field="selections" scope="ancestor" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="2cb2-ebf2-3523-ad48" type="instanceOf"/>
                  </conditions>
                  <conditionGroups>
                    <conditionGroup type="or">
                      <conditions>
                        <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="dcbe-a811-be1e-ec98" type="equalTo"/>
                        <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                      </conditions>
                    </conditionGroup>
                  </conditionGroups>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="ef20-2a5b-a2bf-26d1" name="The Storied Sword" hidden="false" collective="false" import="true" targetId="6348-6bcd-afa4-0236" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="ancestor" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="63cf-e50b-8ff4-57f6" type="instanceOf"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="7fe5-3468-061e-eba7" name="Crescendo" hidden="false" collective="false" import="true" targetId="d8d5-d3a9-a828-34d5" type="selectionEntry"/>
        <entryLink id="96c8-9d9d-6145-f65b" name="Relic 6" hidden="false" collective="false" import="true" targetId="7813-bd0e-4df8-dbfc" type="selectionEntry"/>
        <entryLink id="65c4-b558-5801-8ea5" name="Faolchu&apos;s Talon" hidden="true" collective="false" import="true" targetId="2fe7-1d08-cac2-4fbe" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="c637-b918-c0f8-1afb" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="84a2-b7fb-943e-06b0" name="Midnight&apos;s Chime" hidden="true" collective="false" import="true" targetId="32c7-f904-0a5e-c3c8" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="da1e-0f68-89a5-35c9" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="efc1-e66a-314e-2b7b" name="The Ghoulmask" hidden="true" collective="false" import="true" targetId="a8d4-6c63-6856-b8fe" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="or">
                  <conditions>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="c98a-145f-261e-195e" type="equalTo"/>
                    <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                  </conditions>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="f341-9de4-5678-f6c3" name="Curtainfall" hidden="true" collective="false" import="true" targetId="7c01-7049-b709-d0e7" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="and">
                  <conditions>
                    <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="7c62-2472-fac5-49a1" type="instanceOf"/>
                  </conditions>
                  <conditionGroups>
                    <conditionGroup type="or">
                      <conditions>
                        <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="381c-1c61-37b2-7870" type="equalTo"/>
                        <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                      </conditions>
                    </conditionGroup>
                  </conditionGroups>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="6b88-6bf9-8a1d-7d08" name="The Scintillant Veil" hidden="true" collective="false" import="true" targetId="7922-1c00-c0cb-ab72" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="false">
              <conditionGroups>
                <conditionGroup type="and">
                  <conditionGroups>
                    <conditionGroup type="or">
                      <conditions>
                        <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ed3d-937d-5476-8bca" type="equalTo"/>
                        <condition field="selections" scope="force" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="6666-2609-810b-8d79" type="equalTo"/>
                      </conditions>
                    </conditionGroup>
                    <conditionGroup type="or">
                      <conditions>
                        <condition field="selections" scope="ancestor" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="5f24-c0be-025f-16aa" type="instanceOf"/>
                        <condition field="selections" scope="ancestor" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="2cb2-ebf2-3523-ad48" type="instanceOf"/>
                      </conditions>
                    </conditionGroup>
                  </conditionGroups>
                </conditionGroup>
              </conditionGroups>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="9c49-b50a-2e53-055c" name="Cegorach&apos;s Rose" hidden="false" collective="false" import="true" targetId="709b-ded3-c8f9-7c7b" type="selectionEntry">
          <modifiers>
            <modifier type="set" field="hidden" value="true">
              <conditions>
                <condition field="selections" scope="parent" value="0.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" childId="4f51-c975-5042-dca4" type="equalTo"/>
              </conditions>
            </modifier>
          </modifiers>
        </entryLink>
        <entryLink id="4a6f-a73d-1897-1550" name="The Suit of Hidden Knives" hidden="false" collective="false" import="true" targetId="f1b4-469b-6cd2-7e71" type="selectionEntry"/>
      </entryLinks>
    </selectionEntryGroup>
    <selectionEntryGroup id="4eab-df08-9faa-926c" name="Relics of Ynnead" hidden="false" collective="false" import="true">
      <modifiers>
        <modifier type="increment" field="8a22-20ca-28ad-5069" value="1.0">
          <conditions>
            <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="ae09-117e-a6fa-316b" type="equalTo"/>
          </conditions>
        </modifier>
        <modifier type="increment" field="8a22-20ca-28ad-5069" value="1.0">
          <repeats>
            <repeat field="selections" scope="roster" value="1.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="a1c9-09d6-2587-9553" repeats="1" roundUp="false"/>
          </repeats>
        </modifier>
      </modifiers>
      <constraints>
        <constraint field="selections" scope="parent" value="1.0" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="9a38-f51a-595a-b5d9" type="max"/>
        <constraint field="selections" scope="roster" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" id="8a22-20ca-28ad-5069" type="max"/>
      </constraints>
      <entryLinks>
        <entryLink id="6254-b3ce-5a2c-972b" name="Corag Hai&apos;s Locket" hidden="false" collective="false" import="true" targetId="7f29-5de0-1c4c-234d" type="selectionEntry"/>
        <entryLink id="29e4-fe99-49e8-7855" name="Soulsnare" hidden="false" collective="false" import="true" targetId="986d-71e5-facc-56fc" type="selectionEntry"/>
        <entryLink id="fb9a-d6b8-cb1f-ee80" name="The Lost Shroud" hidden="false" collective="false" import="true" targetId="e788-5910-2225-d1ce" type="selectionEntry"/>
        <entryLink id="d5e9-0d99-f468-a85d" name="Mirrorgaze" hidden="false" collective="false" import="true" targetId="312c-1864-11e2-8de0" type="selectionEntry"/>
        <entryLink id="5249-dd14-524d-8bf4" name="Hungering Blade" hidden="false" collective="false" import="true" targetId="23dd-3b4e-8936-1b89" type="selectionEntry"/>
        <entryLink id="43cd-eeb4-6114-45f6" name="Song of Ynnead" hidden="false" collective="false" import="true" targetId="98ce-cf07-62fe-d79b" type="selectionEntry"/>
      </entryLinks>
    </selectionEntryGroup>
  </sharedSelectionEntryGroups>
  <sharedRules>
    <rule id="e1ca-b33f-a52f-c11c" name="Strength from Death" hidden="false">
      <modifiers>
        <modifier type="set" field="hidden" value="true">
          <conditions>
            <condition field="selections" scope="force" value="0.0" percentValue="false" shared="true" includeChildSelections="true" includeChildForces="false" childId="1de1-3493-f517-79d8" type="equalTo"/>
          </conditions>
        </modifier>
      </modifiers>
      <description>This ability is common to all YNNARI units.

As soon as any unit is destroyed, All units from your army benefit from Soulburst actions until the end of the turn. Whilst a unit is benefitting from Soulburst Actions, it always fights first in the Fight phase, even if it didn&apos;t charge. If a model that is benefitting from soulburst actions made a charge move this turn, or already has an ability that allows it to always fight first in the Fight phase, then whilst it is benfitting from soulburst actions you also add 1 to hit rolls for attacks made with melee weapons by that model. If the enemy also has units that made a charge move or that have abilities that allow them to always fight first in the fight phase, the alternate units, starting with the player whose turn is taking place.</description>
    </rule>
  </sharedRules>
  <sharedProfiles>
    <profile id="8210-8f73-bf99-5b97" name="Explodes" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield and before any embarked models disembark. On a 6 it explodes, and each unit within 6&quot; suffers 1 mortal wound.</characteristic>
      </characteristics>
    </profile>
    <profile id="847b-aed6-3531-adb1" name="Holo-fields" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Models in this unit have a 4+ Invulnerable save.</characteristic>
      </characteristics>
    </profile>
    <profile id="74fb-ab0a-0ef5-ce0d" name="Flip Belt" publicationId="7d24-b92f-pubN65537" page="" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">During the Movement phase, models in this unit can move across models as if they were not there, and when moving across terrain features, vertical distance is not counted against the total these models can move (i.e. moving vertically is free for these models in the Movement phase). During the Charge phase, models in this unit can move across models (other than Buildings) as if they were not there.</characteristic>
      </characteristics>
    </profile>
    <profile id="86a8-5c65-d40b-d0a6" name="Holo-suit" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Models in this unit have a 4+ Invulnerable save.</characteristic>
      </characteristics>
    </profile>
    <profile id="046c-9565-b216-87c7" name="Mirage Launchers" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Your opponent must subtract 1 from any hit rolls made against this unit in the Shooting phase</characteristic>
      </characteristics>
    </profile>
    <profile id="1fde-5ed2-74f7-f766" name="Blur of Colour" publicationId="7d24-b92f-pubN65537" page="61" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">When this unit Advances, add 6&quot; to its Move characteristic for that Movement phase instead of rolling a dice.</characteristic>
      </characteristics>
    </profile>
    <profile id="cf69-4ca7-8cba-2f16" name="Open-topped" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Models embarked on this model can attack in their Shooting phase. Measure the range and draw line of sight from any point on this model. When they do so, any restrictions or modifiers that apply to this model also apply to its passengers; for example, the pasengers cannot shoot if this model has Fallen Back in the same turn and so on, cannot shoot (except with Pistols) if this model is within 1&quot; of an enemy unit, and so on. Note that, due to their Rising Crescendo ability, the passengers can shoot if this model Falls Back.</characteristic>
      </characteristics>
    </profile>
    <profile id="60da-8dc8-7bf4-2efd" name="Rising Crescendo" publicationId="7d24-b92f-pubN65537" hidden="false" typeId="72c5eafc-75bf-4ed9-b425-78009f1efe82" typeName="Abilities">
      <characteristics>
        <characteristic name="Description" typeId="21befb24-fc85-4f52-a745-64b2e48f8228">Models in this unit can Advance and charge in the same turn. In addition, they can Fall Back and still shoot and/or charge in the same turn.</characteristic>
      </characteristics>
    </profile>
  </sharedProfiles>
  <catalogueLinks>
    <catalogueLink id="397d-4f14-ba01-8a24" name="Aeldari - Ynnari" targetId="2f0e-dd91-7676-722d" type="catalogue" importRootEntries="true"/>
  </catalogueLinks>
</catalogue>`;
