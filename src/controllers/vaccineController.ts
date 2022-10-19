import { Router, Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const router = Router();

function getVaccineList(req: Request, res: Response, next: NextFunction) {
  res.status(200).send({ message: 'Vaccine list' });
}

function getVaccineById(req: Request, res: Response, next: NextFunction) {}

function createVaccine(req: Request, res: Response, next: NextFunction) {}

function updateVaccine(req: Request, res: Response, next: NextFunction) {}

function deleteVaccine(req: Request, res: Response, next: NextFunction) {}

export default { getVaccineList, getVaccineById, createVaccine, updateVaccine, deleteVaccine };