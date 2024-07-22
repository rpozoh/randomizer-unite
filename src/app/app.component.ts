import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, MatGridListModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomizer-unite';

  exTag: string = 'Con Ex';
  exs: boolean = true;

  rolTag: string = 'Rol: Todos';
  selectRol: string = "Todos";
  allRol: boolean = true;

  pokemon: any[] = [];

  rols: string[] = [];

  teams: any[] = [
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"},
    {"name":"Default", "color":"red", "image":"assets/images/default.png"}
  ];

  setPokemonList() {
    this.pokemon = [
      {"name":"Absol", "rol":"Agil", "type":"normal", "image":"assets/images/absol.png"},
      {"name":"Aegislash", "rol":"Equilibrado", "type":"normal", "image":"assets/images/aegislash.png"},
      {"name":"Alolan-ninetales", "rol":"Ofensivo", "type":"normal", "image":"assets/images/alolan-ninetales.png"},
      {"name":"Azumarill", "rol":"Equilibrado", "type":"normal", "image":"assets/images/azumarill.png"},
      {"name":"Blastoise", "rol":"Defensivo", "type":"normal", "image":"assets/images/blastoise.png"},
      {"name":"Blaziken", "rol":"Equilibrado", "type":"normal", "image":"assets/images/blaziken.png"},
      {"name":"Blissey", "rol":"Auxiliar", "type":"normal", "image":"assets/images/blissey.png"},
      {"name":"Buzzwole", "rol":"Equilibrado", "type":"normal", "image":"assets/images/buzzwole.png"},
      {"name":"Ceruledge", "rol":"Equilibrado", "type":"normal", "image":"assets/images/ceruledge.png"},
      {"name":"Chandelure", "rol":"Ofensivo", "type":"normal", "image":"assets/images/chandelure.png"},
      {"name":"Charizard", "rol":"Equilibrado", "type":"normal", "image":"assets/images/charizard.png"},
      {"name":"Cinderace", "rol":"Ofensivo", "type":"normal", "image":"assets/images/cinderace.png"},
      {"name":"Clefable", "rol":"Auxiliar", "type":"normal", "image":"assets/images/clefable.png"},
      {"name":"Comfey", "rol":"Auxiliar", "type":"normal", "image":"assets/images/comfey.png"},
      {"name":"Cramorant", "rol":"Ofensivo", "type":"normal", "image":"assets/images/cramorant.png"},
      {"name":"Crustle", "rol":"Defensivo", "type":"normal", "image":"assets/images/crustle.png"},
      {"name":"Decidueye", "rol":"Ofensivo", "type":"normal", "image":"assets/images/decidueye.png"},
      {"name":"Delphox", "rol":"Ofensivo", "type":"normal", "image":"assets/images/delphox.png"},
      {"name":"Dodrio", "rol":"Agil", "type":"normal", "image":"assets/images/dodrio.png"},
      {"name":"Dragapult", "rol":"Ofensivo", "type":"normal", "image":"assets/images/dragapult.png"},
      {"name":"Dragonite", "rol":"Equilibrado", "type":"normal", "image":"assets/images/dragonite.png"},
      {"name":"Duraludon", "rol":"Ofensivo", "type":"normal", "image":"assets/images/duraludon.png"},
      {"name":"Eldegoss", "rol":"Auxiliar", "type":"normal", "image":"assets/images/eldegoss.png"},
      {"name":"Espeon", "rol":"Ofensivo", "type":"normal", "image":"assets/images/espeon.png"},
      {"name":"Falinks", "rol":"Equilibrado", "type":"normal", "image":"assets/images/falinks.png"},
      {"name":"Garchomp", "rol":"Equilibrado", "type":"normal", "image":"assets/images/garchomp.png"},
      {"name":"Gardevoir", "rol":"Ofensivo", "type":"normal", "image":"assets/images/gardevoir.png"},
      {"name":"Gengar", "rol":"Agil", "type":"normal", "image":"assets/images/gengar.png"},
      {"name":"Glaceon", "rol":"Ofensivo", "type":"normal", "image":"assets/images/glaceon.png"},
      {"name":"Goodra", "rol":"Defensivo", "type":"normal", "image":"assets/images/goodra.png"},
      {"name":"Greedent", "rol":"Defensivo", "type":"normal", "image":"assets/images/greedent.png"},
      {"name":"Greninja", "rol":"Ofensivo", "type":"normal", "image":"assets/images/greninja.png"},
      {"name":"Gyarados", "rol":"Equilibrado", "type":"normal", "image":"assets/images/gyarados.png"},
      {"name":"Ho-Oh", "rol":"Defensivo", "type":"ex", "image":"assets/images/ho-oh.png"},
      {"name":"Hoopa", "rol":"Auxiliar", "type":"normal", "image":"assets/images/hoopa.png"},
      {"name":"Inteleon", "rol":"Ofensivo", "type":"normal", "image":"assets/images/inteleon.png"},
      {"name":"Lapras", "rol":"Defensivo", "type":"normal", "image":"assets/images/lapras.png"},
      {"name":"Leafeon", "rol":"Agil", "type":"normal", "image":"assets/images/leafeon.png"},
      {"name":"Lucario", "rol":"Equilibrado", "type":"normal", "image":"assets/images/lucario.png"},
      {"name":"Machamp", "rol":"Equilibrado", "type":"normal", "image":"assets/images/machamp.png"},
      {"name":"Mamoswine", "rol":"Defensivo", "type":"normal", "image":"assets/images/mamoswine.png"},
      {"name":"Meowscarada", "rol":"Agil", "type":"normal", "image":"assets/images/meowscarada.png"},
      {"name":"Metagross", "rol":"Equilibrado", "type":"normal", "image":"assets/images/metagross.png"},
      {"name":"Mew", "rol":"Ofensivo", "type":"normal", "image":"assets/images/mew.png"},
      {"name":"MewtwoX", "rol":"Equilibrado", "type":"ex", "image":"assets/images/mewtwoX.png"},
      {"name":"MewtwoY", "rol":"Ofensivo", "type":"ex", "image":"assets/images/mewtwoY.png"},
      {"name":"Mimikyu", "rol":"Equilibrado", "type":"normal", "image":"assets/images/mimikyu.png"},
      {"name":"Miraidon", "rol":"Ofensivo", "type":"ex", "image":"assets/images/miraidon.png"},
      {"name":"Mr.mime", "rol":"Auxiliar", "type":"normal", "image":"assets/images/mr-mime.png"},
      {"name":"Pikachu", "rol":"Ofensivo", "type":"normal", "image":"assets/images/pikachu.png"},
      {"name":"Sableye", "rol":"Auxiliar", "type":"normal", "image":"assets/images/sableye.png"},
      {"name":"Scizor", "rol":"Equilibrado", "type":"normal", "image":"assets/images/scizor.png"},
      {"name":"Slowbro", "rol":"Defensivo", "type":"normal", "image":"assets/images/slowbro.png"},
      {"name":"Snorlax", "rol":"Defensivo", "type":"normal", "image":"assets/images/snorlax.png"},
      {"name":"Sylveon", "rol":"Ofensivo", "type":"normal", "image":"assets/images/sylveon.png"},
      {"name":"Talonflame", "rol":"Agil", "type":"normal", "image":"assets/images/talonflame.png"},
      {"name":"Trevenant", "rol":"Defensivo", "type":"normal", "image":"assets/images/trevenant.png"},
      {"name":"Tsareena", "rol":"Equilibrado", "type":"normal", "image":"assets/images/tsareena.png"},
      {"name":"Tyranitar", "rol":"Equilibrado", "type":"normal", "image":"assets/images/tyranitar.png"},
      {"name":"Umbreon", "rol":"Defensivo", "type":"normal", "image":"assets/images/umbreon.png"},
      {"name":"Urshifu", "rol":"Equilibrado", "type":"normal", "image":"assets/images/urshifu.png"},
      {"name":"Venusaur", "rol":"Ofensivo", "type":"normal", "image":"assets/images/venusaur.png"},
      {"name":"Wigglytuff", "rol":"Auxiliar", "type":"normal", "image":"assets/images/wigglytuff.png"},
      {"name":"Zacian", "rol":"Equilibrado", "type":"ex", "image":"assets/images/zacian.png"},
      {"name":"Zeraora", "rol":"Agil", "type":"normal", "image":"assets/images/zeraora.png"},
      {"name":"Zoroark", "rol":"Agil", "type":"normal", "image":"assets/images/zoroark.png"}
    ];
  }

  setRolList() {
    this.rols = [
      "Ofensivo",
      "Agil",
      "Equilibrado",
      "Defensivo",
      "Auxiliar"
    ];
  }

  setPoke() {
    if(!this.exs && !this.allRol) {
      this.setPokemonList();
      this.pokemon = this.pokemon.filter(pokes => pokes.type === 'normal' && pokes.rol === this.selectRol);
    } else if(!this.exs && this.allRol) {
      this.setPokemonList();
      this.pokemon = this.pokemon.filter(pokes => pokes.type === 'normal');
    } else if(this.exs && !this.allRol) {
      this.setPokemonList();
      this.pokemon = this.pokemon.filter(pokes => pokes.rol === this.selectRol);
    } else {
      this.setPokemonList();
    }
  }

  setColor(rol: string) {
    let color = "white";
    switch(rol) {
      case "Ofensivo":
        color = "red";
        break;
      case "Equilibrado":
        color = "purple";
        break;
      case "Agil":
        color = "blue";
        break;
      case "Defensivo":
        color = "green";
        break;
      case "Auxiliar":
        color = "yellow";
        break;
    }
    return color;
  }

  setTeamPoke(counter: number, pokemon: any) {
    this.teams[counter].name = pokemon.name;
    this.teams[counter].color = this.setColor(pokemon.rol);
    this.teams[counter].image = pokemon.image;
  }

  setTeams(pokemonSeleccionado: number, counter: number) {
    if(this.pokemon[pokemonSeleccionado].name === "MewtwoX") {
      this.setTeamPoke(counter, this.pokemon[pokemonSeleccionado]);
      this.pokemon.splice(pokemonSeleccionado, 1);
      this.pokemon = this.pokemon.filter(element => element.name !== 'MewtwoY');
    } else if(this.pokemon[pokemonSeleccionado].name === "MewtwoY") {
      this.setTeamPoke(counter, this.pokemon[pokemonSeleccionado]);
      this.pokemon.splice(pokemonSeleccionado, 1);
      this.pokemon = this.pokemon.filter(element => element.name !== 'MewtwoX');
    } else {
      this.setTeamPoke(counter, this.pokemon[pokemonSeleccionado]);
      this.pokemon.splice(pokemonSeleccionado, 1);
    }
  }

  generateRandomTeam() {
    let counter: number = 0;
    let pokemonSeleccionado: number = 1;
    this.setPoke();
    this.setRolList();
    for(let team = 1; team <= 2; team++) {
      for(let poke = 1; poke <= 5; poke++) {
        pokemonSeleccionado =  Math.floor(Math.random() * this.pokemon.length);
        this.setTeams(pokemonSeleccionado, counter);
        counter++;
      }
      this.setPoke();
    }
  }

  generateRandomNoRepeat() {
    let pokemonSeleccionado: number = 1;
    this.setPoke();
    this.setRolList();
    for(let poke = 0; poke < 10; poke++) {
      pokemonSeleccionado = Math.floor(Math.random() * this.pokemon.length);
      this.setTeams(pokemonSeleccionado, poke);
    }
    this.setPoke();
  }

  generateRandomBalancedTeam() {
    let balancedTeam: any[] = [];
    let pokemonSeleccionado: number = 1;
    let rolSeleccionado: number = 1;
    this.setPoke();
    this.setRolList();
    for(let poke = 0; poke < 10; poke++) {
      if(poke == 5) {
        this.setRolList();
      }
      rolSeleccionado = Math.floor(Math.random() * this.rols.length);
      balancedTeam = this.pokemon.filter(pokes => pokes.rol === this.rols[rolSeleccionado]);
      pokemonSeleccionado = Math.floor(Math.random() * balancedTeam.length);
      if(balancedTeam[pokemonSeleccionado].name === "MewtwoX") {
        this.setTeamPoke(poke, balancedTeam[pokemonSeleccionado]);
        this.pokemon = this.pokemon.filter(element => element.name !== balancedTeam[pokemonSeleccionado].name && element.name !== 'MewtwoY');
        this.rols.splice(rolSeleccionado, 1);
      } else if(balancedTeam[pokemonSeleccionado].name === "MewtwoY") {
        this.setTeamPoke(poke, balancedTeam[pokemonSeleccionado]);
        this.pokemon = this.pokemon.filter(element => element.name !== balancedTeam[pokemonSeleccionado].name && element.name !== 'MewtwoX');
        this.rols.splice(rolSeleccionado, 1);
      } else {
        this.setTeamPoke(poke, balancedTeam[pokemonSeleccionado]);
        this.pokemon = this.pokemon.filter(element => element.name !== balancedTeam[pokemonSeleccionado].name);
        this.rols.splice(rolSeleccionado, 1);
      }
    }
  }

  setEx() {
    this.setPokemonList();
    if(this.exs) {
      this.pokemon = this.pokemon.filter(ex => ex.type === 'normal');
      this.exTag = "Sin Ex";
      this.exs = false;
    } else {
      this.setPokemonList();
      this.exTag = "Con Ex";
      this.exs = true;
    }
  }

  setRol() {
    this.setRolList();
    let rolSeleccionado: number = 1;
    if(this.allRol) {
      rolSeleccionado = Math.floor(Math.random() * this.rols.length);
      this.selectRol = this.rols[rolSeleccionado];
      this.rolTag = 'Rol: '+ this.rols[rolSeleccionado];
      this.allRol = false;
    } else {
      this.selectRol = "Todos";
      this.rolTag = 'Rol: Todos';
      this.allRol = true;
    }
  }

}

@NgModule({
  declarations: [
  ],
  imports: [
    MatGridListModule,
  ],
})

export class AppModule { }
