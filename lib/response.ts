import { redirect } from "next/navigation";

interface ResponseData{
    message?: string,
    code?: number,
    payload?: any,
}   

class Status {
    private status : boolean | null = null;
    private res: null | Response = null
    private code: number = 200
    private req: null | Request = null

    success(code: number = 200){
        this.status = true;
        this.code = code
        return this
    }
    
    error(code: number = 400){
        this.status = false;
        this.code = code
        return this;
    }

    flash(req: Request){
        this.req = req
        return this
    }
    
    json(...args: any[]){
        this.check()
        const [message, data] = this.getReturnData(args)
        return this.data(this.res!, this.status!, message!, data, this.code)
    }
    
    private data(response : Response, status: boolean, message: string, payload: any, code: number) {
        return {
            status: status, 
            message: message, 
            ...payload
        }
    }
    
    render(view: string, ...args: any[]){
        this.check()
        const [message, data] = this.getReturnData(args)
        // const errors: any = this.req?.flash('errors')[0]
        // return this.res?.render(view, {
        //     status: this.status, 
        //     message, 
        //     ...data,
        //     // ...errors
        // })
    }
    
    redirect(route: string, ...args: any[]){
        this.check()
        const [message, data] = this.getReturnData(args)
        return redirect(route)
    }
    
    private check(){
        if(this.status == null) throw new Error('Please define the error Status')
    }

    private getReturnData(args: any[]) {
        var message = args && args.length > 0 ? (typeof args[0] == 'string') ? args[0] : (args[1] ?? '') : '';
        var data = args && args.length > 0 ? (typeof args[0] == 'object' ? args[0] : (args[1] ?? {})) : {};
        return [message, data]
    }

}

const response = new Status()
export default response
