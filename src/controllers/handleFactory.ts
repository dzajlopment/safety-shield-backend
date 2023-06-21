import type { Model } from "mongoose";
import type { Response, Request, NextFunction } from "express";

import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";
import APIFeatures from "../utils/APIfeatures";
import validateId from "../utils/validateId";

const getAll = (Model: Model<any>) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		let filter = {};
		if (req.params.reportId) {
			filter = { report: req.params.reportId };
		}

		const features = new APIFeatures(Model.find(filter), req.query as any)
			.filter()
			.sort()
			.limitFields()
			.paginate();

		const doc = await features.query;

		res.status(200).json({
			status: "success",
			results: doc.length,
			data: doc,
		});
	});

const getOne = (Model: Model<any>) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;

		if (!validateId(id)) {
			return res.status(422).json({
				status: "fail",
				results: 0,
				data: "Wrong ID",
			});
		}

		const doc = await Model.findById(id);

		res.status(200).json({
			status: "success",
			data: doc,
		});
	});

const deleteOne = (Model: Model<any>) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;

		if (!validateId(id)) {
			return res.status(422).json({
				status: "fail",
				results: 0,
				data: "Wrong ID",
			});
		}

		const doc = await Model.findByIdAndRemove(id);

		if (!doc) {
			return next(new AppError("No document found with that ID", 404));
		}

		res.status(204).json({
			status: "success",
			data: null,
		});
	});

const patchOne = (Model: Model<any>) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;

		if (!validateId(id)) {
			return res.status(422).json({
				status: "fail",
				results: 0,
				data: "Wrong ID",
			});
		}

		const doc = await Model.findOneAndUpdate(
			{ _id: id },
			{ ...req.body },
			{
				upsert: true,
			}
		);

		if (!doc) {
			return next(new AppError("No document found with that ID", 404));
		}

		res.status(200).json({
			status: "success",
			data: {
				data: doc,
			},
		});
	});

const createOne = (Model: Model<any>) =>
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const model = new Model({
			...req.body,
		});

		const response = await model.save();

		res.status(201).json({
			status: "success",
			data: response,
		});
	});

export default {
	getAll,
	getOne,
	createOne,
	patchOne,
	deleteOne,
};