import { TagContainer, TagVariant } from "./style";

interface TagProps {
    title: string;
    variant: TagVariant
}

export function TagButton({ title, variant='primary' }: TagProps) {
    return(
        <TagContainer
            variant={variant}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0 }}
        >
            {title}       
        </TagContainer>
    )
}