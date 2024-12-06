import { Brand, BrandIcon } from "@/types/brand";
import Image from "next/image";
import { IconImage } from "./IconImage";

export function SingleBrand({ brand }: { brand: Brand }){
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-24 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <BrandImage image={image} imageLight={imageLight} imageTitle={name} />
      </a>
    </div>
  );
};

function BrandImage({ image, imageLight, imageTitle }: {image: string | BrandIcon; imageLight?: string | BrandIcon; imageTitle: string}) {
  if (typeof image === 'string' && typeof imageLight === 'string') 
    return <div className="flex justify-center w-full gap-2">
      <Image src={image} alt={imageTitle} fill className="hidden dark:block" />
      <Image src={imageLight} alt={imageTitle} fill className="block dark:hidden" />
    </div>
  
  if (typeof image !== 'string' && typeof imageLight !== 'string') 
    return (<div className="flex flex-col items-center w-full  gap-4">
      <span className="text-primary tracking-wide dark:text-white">{imageTitle}</span>
      <IconImage name={image.name} className={`${imageLight ? 'hidden dark:block': ''} ${image.className}`} />
      {imageLight && <IconImage name={imageLight.name} className={`block dark:hidden ${image.className}`} />}
    </div>)
}