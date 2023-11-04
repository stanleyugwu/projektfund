import mongoose from "mongoose"
import randomstring from 'randomstring';


export default class Token {


    static async random(collection = "", column = "", len = 8, charset = 'numeric') : Promise<string> {
        var id = randomstring.generate({charset})
        if(collection){
            const model = await mongoose.connection.db.collection(collection).findOne({[column] : id})  
            if(model) return await this.random(collection, column, len);
        }
        return id;
    }

    static async number(collection = '', column = '', len = 8) {
        
    }


}