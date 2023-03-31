export declare type Task<T> = {
    task: () => Promise<T>;
    taskReslove?: (value: T) => void;
    taskReject?: (error: Error) => void;
};
export default class Queue<T = boolean> {
    private concurrency;
    private queue;
    private activeCount;
    private onFinnish?;
    constructor(concurrency: number, onFinnish?: () => void);
    addTask(task: Task<T>): Promise<void>;
    stop(): void;
    private run;
}
