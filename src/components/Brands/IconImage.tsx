'use client';

import { CIcon } from '@coreui/icons-react';
import { brand } from './icons';
import { BrandIcon } from '@/types/brand';

export function IconImage({name, className, }: BrandIcon ){
  return (
    <CIcon icon={brand[name]} className={`${className} size-12`} />
  );
}
