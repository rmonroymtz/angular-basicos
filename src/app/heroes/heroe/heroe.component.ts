import { Component } from "@angular/core";

@Component({
    selector:"app-hero",
    templateUrl:"./heroe.component.html" 
})
export class HeroComponent{
    public nombre: string = "IronMan";
    public edad: number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase();
    }

    public obtenerNombre(): string{
        const { nombre, edad} = this;
        return `${nombre} - ${edad}`; 
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';       
    }

    cambiarEdad():void{
        this.edad = 30;
    }
}