import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user._id;
        const taskObject = { title, description, createdBy: userId };
        const task = await Task.create(taskObject);
        res.status(201).json(task);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const userId = req.user._id;
        const taskId = req.params.id;

        const task = await Task.findOneAndUpdate(
            { _id: taskId, createdBy: userId },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const userId = req.user._id;
        const taskId = req.params.id;

        const task = await Task.findByIdAndDelete({
            _id: taskId,
            createdBy: userId,
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted' });
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
};

export const getTasksById = async (req, res) => {
    try {
        const userId = req.user._id;

        const tasks = await Task.find({
            createdBy: userId,
        });

        res.status(200).json(tasks);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const userId = req.user._id;
        const taskId = req.params.id;

        const task = await Task.findOne({
            _id: taskId,
            createdBy: userId,
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    }
};
