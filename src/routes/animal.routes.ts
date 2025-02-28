import express, {Request, Response} from "express";
import AnimalController from "../controllers/animal.controller";

const animalRouter = express.Router()

animalRouter.get("/", AnimalController.GetAllAnimals)
animalRouter.get("/endangered", AnimalController.GetAllAnimalsEndagered)
animalRouter.get("/endangered", AnimalController.GetAllAnimalsEndagered)
animalRouter.get("/habitat/:habitat", AnimalController.GetAllAnimalsInHabitat)
animalRouter.get("/species", AnimalController.GetAllAnimalsSpecies)


export default animalRouter