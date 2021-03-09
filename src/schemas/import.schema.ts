import * as mongoose from 'mongoose'

export const ImportSchema = new mongoose.Schema({
    Id_employees: String,
    contract: Number,
    date: Number,
    description: String
})

// export const ImportSchema = mongoose.model('Import',
//     new mongoose.Schema({
//         Id_emloyees: {
//             type: String,
//             require: true
//         },
//         contract: {
//             type: Number,
//             require: true,
//         },
//         date: {
//             type: Number,
//             require: true,
//         },
//         description: {
//             type: String,
//             require: true,
//         }
//     })
// );