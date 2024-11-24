import { Button, Input } from '@nextui-org/react';
import { EmptyIcon } from '../icons';

export const MissionOver = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="账号" />
      <Input label="密码" />
      <Button color="primary">查询可跳过任务</Button>
      <div className="flex justify-center flex-col items-center">
        <div>
          <EmptyIcon size={80} />
        </div>
        <div className="text-default-600 mt-4 text-sm">请先查询可跳过任务~</div>
      </div>
    </div>
  );
};
