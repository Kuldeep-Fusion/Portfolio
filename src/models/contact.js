const { default: mongoose } = require("mongoose");

export const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);