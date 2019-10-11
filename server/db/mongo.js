import mongoose from 'mongoose';

mongoose
    .connect('mongodb://127.0.0.1:27017/clinicaldatadictionary', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

export default mongoose.connection;