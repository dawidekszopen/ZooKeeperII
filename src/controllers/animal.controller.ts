import {Response, Request} from "express";
import {animalService} from "../services/animal.service";
class AnimalController{
    static GetAllAnimals(req: Request, res: Response): void{
        const animals = animalService.GetAllAnimals()
        res.json({message: "all animals", animals})
    }

    static GetAllAnimalsEndagered(req: Request, res: Response): void{
        const endageredAnimals = animalService.GetAllAnimalsEndagered()
        res.json({message: "all endagered animals", endageredAnimals})

    }

    static GetAllAnimalsInHabitat(req: Request, res: Response): void{
        const habitat: string = req.params.habitat

        const animalsHabitat = animalService.GetAllAnimalsInHabitat(habitat)

        if(animalsHabitat.length != 0){
            res.json({message: "all animals in habitat", animalsHabitat})
        }
        else {
            res.status(400).json({message: "There is an error in your request. Check and try again"})
        }
    }

    static GetAllAnimalsSpecies(req: Request, res: Response): void{
        const species:string = req.query.species as string

        const animalsSpecies = animalService.GetAllAnimalsSpecies(species)



        if(animalsSpecies.length != 0){
            res.json({message: "all animals in habitat", animalsSpecies})
        }
        else {
            res.status(400).json({message: "There is an error in your request. Check and try again"})
        }
    }
}

export default AnimalController