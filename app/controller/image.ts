import { Controller } from 'egg';
export default class ImageController extends Controller {
	public async index() {
		const { ctx } = this;
		// const { id } = ctx.query;
		console.log('..................', ctx.query)
		const data = await ctx.service.image.componentImage('vpaas day one');
		const defaultData = {
			code: data ? 0 : -1,
			data: data ? data : {},
			msg: data ? 'success' : 'fail',
			success: !!data,
		};
	
		ctx.body = defaultData;
	}
}
