import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://guzovaanuta2_db_user:T9xvSCg5F7Vx1kNF@clustertest.smwlnal.mongodb.net/tasksDB'
        );

        console.log('MongoDB connected ✅');
    } catch (error) {
        console.error('DB error:', error);
        process.exit(1);
    }
};

export default connectDB;
