import { Button, Input } from '@nextui-org/react';
import { EmptyIcon } from '../icons';

export const MissionOver = () => {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <h3 className="font-bold">任务跳过</h3>
      <Input label="账号" />
      <Input label="密码" />
      <Button color="primary">查询可跳过任务</Button>
      <div className="flex flex-col items-center justify-center">
        <div>
          <EmptyIcon size={80} />
        </div>
        <div className="mt-4 text-sm text-default-600">请先查询可跳过任务~</div>
      </div>
    </div>
  );
};
