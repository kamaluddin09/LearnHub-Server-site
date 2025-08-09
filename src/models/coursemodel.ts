import mongoose, {Document, Schema} from "mongoose";

export interface ICourse extends Document{
    title: string;
    description: string;
    price: number;
    instructor: mongoose.Types.ObjectId;
    category?:string;
    thumbnail?: string;
    published: boolean;

}

const courseSchema = new Schema<ICourse>(
    {
        title: {type: String, required: true },
        description: {type: String, required: true},
        price: {type: Number, default: 0},
        instructor: {type: Schema.Types.ObjectId, ref:"User", required: true},
        category: {type: String},
        thumbnail:{type:String},
        published: {type:Boolean, default: false },
    },
    {timestamps:true}
)

export const Course = mongoose.model<ICourse>("Course", courseSchema); 