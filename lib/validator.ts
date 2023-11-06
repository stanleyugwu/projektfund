import mongoose from 'mongoose';
import Validator from 'validatorjs' 

Validator.registerAsync('exists', async (value, requirement, attribute, passes) => {
    if (typeof requirement !== 'string') throw new Error('Invalid unique rule, collection name is required!');

    const args = requirement.split(',');
    const collection = args[0];
    const field = args[1] ?? '_id';

    const result = await mongoose.model(collection).findOne({ [field]: value });
    
    if(!result){
        passes(false, `The ${attribute} does not exist`)
        return;
    }

    // passes()
}, "The :attribute does not exist");

Validator.registerAsync('unique', async (value, requirement, attribute, passes) => {
    if (typeof requirement !== 'string') throw new Error('Invalid unique rule, collection name is required!');

    const args = requirement.split(',');
    const collection = args[0];
    const field = args[1] ?? attribute;

    mongoose.connection.db.collection(collection).findOne({[field]: value}).then((result) => {
        if(result){
            passes(false, `This ${field} has already been taken`)
            return;
        }
        console.log(passes)
        // passes()
    })
}, "The :attribute has already been taken")

Validator.register('file', (value : any, requirement: any, attribute: any) => {
    return !!value.name;
}, "The :attribute must be valid file")

Validator.register('image', (value : any, requirement: any, attribute: any) => {  
    if(!value.name) return false
    return ((!!value.type?.match(`image.*`)) || (!!value.mimetype?.match('image.*')))
}, "The :attribute must be an image")

export default Validator