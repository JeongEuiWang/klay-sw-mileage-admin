import React, {useMemo} from 'react';
import {Badge} from "@chakra-ui/react";

const StatusLabel = ({status}:{status: number}) => {

  const statusStyle = useMemo(() => {
    switch (status){
      case 1: return {
        variant: 'created',
        label: '심사 대기'
      }
      case 2: return {
        variant: 'approved',
        label: '지급 완료'
      }
      case 3: return {
        variant: 'denied',
        label: '반려'
      }
      default: return {
        variant: 'default',
        label: '-'
      }
    }
  }, [status])
  return (
    <Badge variant={statusStyle.variant}>
      {statusStyle.label}
    </Badge>
  );
};

export default StatusLabel;
