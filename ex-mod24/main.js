function Orquestra(naipeCordas, naipeMadeiras, naipeMetais) {
    this.naipeCordas = naipeCordas
    this.naipeMadeiras = naipeMadeiras
    this.naipeMetais = naipeMetais
}

const orquestra = new Orquestra(['Violino, Viola, Violoncelo, Contrabaixo'], ['Flauta, Oboé, Fagote'], ['Trompa, Trompete, Trombone'])
console.log(orquestra)