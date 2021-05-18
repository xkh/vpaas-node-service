
import { Context } from 'egg';

export default function cors(): any {
    return async (ctx: Context, next: () => Promise<any>) => {

        if (ctx.request.header.origin && (ctx.request.header.origin !== ctx.origin)) {
            ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
            ctx.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            ctx.set('Access-Control-Allow-Credentials', 'true');
            ctx.set('Access-Control-Allow-Headers', 'Content-Type');
        }

        if (ctx.request.method.toLowerCase() === 'options') {
          ctx.status = 204
          ctx.body = null
        } else {
          await next();
        }
    };
}
