import React from 'react';
import { Avatar as MUIAvatar } from '@mui/material';

type Props = {
  src: string;
  alt: string;
}

const Avatar = ({src, alt}: Props) => {
  return (
    <MUIAvatar
      alt={alt}
      src={src}
      variant="rounded"
    ></MUIAvatar>
  );
};

export default Avatar;
