/*
Modify the variables inside the function taskBlock so that
the variables aren’t overwritten inside the conditional block.
*/
export default function taskBlock() {
  const task = false;
  const task2 = true;

  return [task, task2];
}
