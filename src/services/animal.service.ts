import {Animal} from "../models/animal";

class AnimalService{
    private animals: Array<Animal> = [
        {
            id: 1,
            name: "Simba",
            species: "Lion",
            age: 5,
            isEndangered: true,
            habitat: "Savanna"
        },
        {
            id: 2,
            name: "Nemo",
            species: "Clownfish",
            age: 2,
            isEndangered: false,
            habitat: "Ocean"
        },
    ]

    GetAllAnimals(): Array<Animal>{
        return this.animals
    }

    GetAllAnimalsEndagered(): Array<Animal>{
        let EndageredAnimals: Array<Animal> = []

        for(let i: number = 0; i < this.animals.length; i++){
            if(this.animals[i]["isEndangered"]){
                EndageredAnimals.push(this.animals[i])
            }
        }

        return EndageredAnimals
    }

    GetAllAnimalsInHabitat(habitat: string): Array<Animal>{
        let HabitatAnimals: Array<Animal> = [];

        for(let i = 0; i < this.animals.length; i++){
            if(this.animals[i]["habitat"] === habitat){
                HabitatAnimals.push(this.animals[i])
            }
        }

        return HabitatAnimals
    }

    GetAllAnimalsSpecies(species: string): Array<Animal>{
        let SpeciesAnimals: Array<Animal> = [];

        console.log(species)

        for(let i = 0; i < this.animals.length; i++){
            if(this.animals[i]["species"] === species){
                console.log(this.animals[i])
                SpeciesAnimals.push(this.animals[i])
            }
        }

        console.log(SpeciesAnimals)

        return SpeciesAnimals
    }
}


export const animalService = new AnimalService()