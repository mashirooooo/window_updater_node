
// 定义下载任务类型
export type Task<T> = {
  task: () => Promise<T>,
  taskReslove?: (value: T) => void
  taskReject?: (error: Error) => void
};

export class Queue<T = boolean> {
  private concurrency: number; // 并发任务数
  private queue: Task<T>[] = []; // 任务队列
  private activeCount = 0; // 当前正在执行的任务数

  private onFinnish?: () => void;

  constructor (concurrency: number, onFinnish?: () => void) {
    this.concurrency = concurrency;
    this.onFinnish = onFinnish;
  }

  async addTask (task:Task<T>) {
    this.queue.push(task); // 将任务加入队列
    this.run(); // 开始执行任务
  }

  public stop () {
    this.queue = [];
  }

  private async run () {
    if (this.activeCount === 0 && this.queue.length === 0) {
      this.onFinnish && this.onFinnish();
    }
    if (this.activeCount < this.concurrency && this.queue.length > 0) { // 当前正在执行的任务数小于并发任务数并且队列中有任务时
      const task = this.queue.shift()!; // 取出队列中的第一个任务
      this.activeCount++; // 当前正在执行的任务数加1
      task.task().then((result) => {
        task.taskReslove && task.taskReslove(result);
      }).catch(err => {
        task.taskReject && task.taskReject(err);
      }).finally(() => { // 执行任务，无论成功或失败都会调用finally回调函数
        this.activeCount--; // 当前正在执行的任务数减1
        this.run(); // 继续执行任务
      });
    }
  }
}
