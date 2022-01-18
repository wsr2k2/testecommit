// import {getRepository} from "typeorm";
// import {NextFunction, Request, Response} from "express";
// import {User, Cep} from "../entity/User";


// export class CepController {

//     private cepRepository = getRepository(Cep);
    

//     async all(req: Request, res: Response) {
//         return this.cepRepository.find();
//     }

//     async save(req: Request, res: Response) {
//         return this.cepRepository.save(req.body)
//     }

//     async remove(req: Request, res: Response) {
//         let cep = await this.cepRepository.findOne(req.params.id);
//         await this.cepRepository.remove(cep);
//     }

// }


// export class UserController {

//     private userRepository = getRepository(User);

//     async all(request: Request, response: Response, next: NextFunction) {
//         return this.userRepository.find();
//     }

//     async one(request: Request, response: Response, next: NextFunction) {
//         return this.userRepository.findOne(request.params.id);
//     }

//     async save(request: Request, response: Response, next: NextFunction) {
//         return this.userRepository.save(request.body);
//     }

//     async remove(request: Request, response: Response, next: NextFunction) {
//         let userToRemove = await this.userRepository.findOne(request.params.id);
//         await this.userRepository.remove(userToRemove);
//     }

// }