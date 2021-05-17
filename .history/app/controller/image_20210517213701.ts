import { Controller } from 'egg';

export default class ImageController extends Controller {
	public async index() {
		const { ctx } = this;
		const { id } = ctx.query;
		console.log('..................', ctx.query)
		ctx.body = await ctx.service.image.componentImage('vpaas day one', id);
	}
}
