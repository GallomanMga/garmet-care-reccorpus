import { TagContainer, TagVariant } from "./style";

interface TagProps {
    title: string;
    variant: TagVariant
    variantColor: TagVariant
}

export function TagButton({ 
        title, 
        variant='primary', 
        variantColor ='primary'
    }: TagProps) {
    return(
        <TagContainer
            variant={variant}
            variantColor={variantColor}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0 }}
        >
            {title}       
        </TagContainer>
    )
}